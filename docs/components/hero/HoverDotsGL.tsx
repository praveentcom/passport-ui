"use client";

import React, { useEffect, useMemo, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { cn } from "../../../src/lib/utils";

function hexToRgb(hex: string): [number, number, number] {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return m ? [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)] : [0, 0, 0];
}

function isDarkMode(): boolean {
  if (typeof window === "undefined") return false;
  return document.documentElement.classList.contains("dark");
}

export interface HoverDotsGLProps {
  /* 
   * px between dots (CSS pixels)
   */
  gap?: number;

  /* 
   * base dot diameter in px
   */
  size?: number;

  /* 
   * base opacity (0..1)
   */
  baseOpacity?: number;

  /* 
   * max opacity on hover (0..1)
   */
  maxOpacity?: number;

  /* 
   * hover radius in px
   */
  hoverRadius?: number;

  /* 
   * hover zoom factor (>=1)
   */
  zoomFactor?: number;

  /* 
   * hex colors for light/dark
   */
  color?: {
    /* light mode color */ default: string;
    /* dark mode color */ dark: string;
  };

  /* 
   * wrapper className
   */
  className?: string;
}

export function HoverDotsGL({
  gap = 20,
  size = 2,
  baseOpacity = 0.5,
  maxOpacity = 0.5,
  hoverRadius = 150,
  zoomFactor = 3.0,
  color = { default: "#525252", dark: "#454545" },
  className,
}: HoverDotsGLProps) {
  return (
    <div className={cn("absolute inset-0 pointer-events-none", className)}>
      <Canvas
        orthographic
        dpr={[1, 3]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        onCreated={({ gl }) => gl.setClearAlpha(0)}
      >
        <FullscreenQuad
          gap={gap}
          size={size}
          baseOpacity={baseOpacity}
          maxOpacity={maxOpacity}
          hoverRadius={hoverRadius}
          zoomFactor={zoomFactor}
          color={color}
        />
      </Canvas>
    </div>
  );
}

function FullscreenQuad(props: {
  gap: number;
  size: number;
  baseOpacity: number;
  maxOpacity: number;
  hoverRadius: number;
  zoomFactor: number;
  color: { default: string; dark: string };
}) {
  const { size: viewport, gl } = useThree();
  const matRef = useRef<THREE.ShaderMaterial>(null!);

  const [isDark, setIsDark] = React.useState(() => isDarkMode());

  useEffect(() => {
    const observer = new MutationObserver(() => setIsDark(isDarkMode()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const colorVec3 = useMemo(() => {
    const hex = isDark ? props.color.dark : props.color.default;
    const [r, g, b] = hexToRgb(hex);
    return new THREE.Vector3(r / 255, g / 255, b / 255);
  }, [props.color.default, props.color.dark, isDark]);

  const uniforms = useRef({
    uMouse: { value: new THREE.Vector2(-1e6, -1e6) },
    uGap: { value: props.gap },
    uDotSize: { value: props.size },
    uBaseOpacity: { value: props.baseOpacity },
    uMaxOpacity: { value: props.maxOpacity },
    uHoverRadius: { value: props.hoverRadius },
    uZoom: { value: props.zoomFactor },
    uColor: { value: colorVec3.clone() },
    uPixelRatio: {
      value: Math.min(
        3,
        gl.getPixelRatio?.() ?? (typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1)
      ),
    },
  }).current;

  useEffect(() => {
    uniforms.uGap.value = props.gap;
    uniforms.uDotSize.value = props.size;
    uniforms.uBaseOpacity.value = props.baseOpacity;
    uniforms.uMaxOpacity.value = props.maxOpacity;
    uniforms.uHoverRadius.value = props.hoverRadius;
    uniforms.uZoom.value = props.zoomFactor;
  }, [props.gap, props.size, props.baseOpacity, props.maxOpacity, props.hoverRadius, props.zoomFactor, uniforms]);

  useEffect(() => {
    uniforms.uColor.value.copy(colorVec3);
  }, [colorVec3, uniforms]);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      // Get the canvas element's bounding rectangle
      const canvas = gl.domElement;
      const rect = canvas.getBoundingClientRect();
      
      // Calculate mouse position relative to the canvas
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Convert to shader coordinates (Y is flipped)
      uniforms.uMouse.value.set(x, viewport.height - y);
    };
    const out = () => {
      uniforms.uMouse.value.set(-1e6, -1e6);
    };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerout", out, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerout", out);
    };
  }, [uniforms, viewport.height, gl]);

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={matRef}
        uniforms={uniforms}
        vertexShader={VERT}
        fragmentShader={FRAG}
        depthWrite={false}
        depthTest={false}
        transparent
      />
    </mesh>
  );
}

const VERT = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const FRAG = /* glsl */ `
  precision highp float;

  uniform vec2  uMouse;
  uniform float uGap;
  uniform float uDotSize;
  uniform float uBaseOpacity;
  uniform float uMaxOpacity;
  uniform float uHoverRadius;
  uniform float uZoom;
  uniform vec3  uColor;
  uniform float uPixelRatio;

  vec2 fragCoord() {
    return gl_FragCoord.xy / uPixelRatio;
  }

  void main() {
    vec2 p = fragCoord();
    vec2 grid = floor(p / uGap + 0.5) * uGap;
    float dDot = length(p - grid);
    float dMouse = length(p - uMouse);
    float t = clamp(1.0 - dMouse / uHoverRadius, 0.0, 1.0);
    float radius = 0.5 * uDotSize * mix(1.0, uZoom, t);
    float opacity = mix(uBaseOpacity, uMaxOpacity, t);
    float aa = 0.5 / uPixelRatio;
    float sdf = dDot - radius;
    float alpha = smoothstep(aa, -aa, sdf) * opacity;
    if (alpha <= 0.001) discard;
    gl_FragColor = vec4(uColor, alpha);
  }
`;
