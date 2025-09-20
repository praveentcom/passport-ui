"use client";

import React, { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { cn } from "../../lib/utils";

export type TypewriterMode = "typewriter" | "fade-in-words" | "slide-in-chars";

export type TypewriterTextProps = {
  text: string | string[];
  mode?: TypewriterMode;
  speed?: number;
  delay?: number;
  className?: string;
  cursorClassName?: string;
  showCursor?: boolean;
  cursorChar?: string;
  loop?: boolean;
  pauseTime?: number;
  onComplete?: () => void;
  onStart?: () => void;
  startOnMount?: boolean;
  preserveWhitespace?: boolean;
  splitByWords?: boolean;
};

export function TypewriterText({
  text,
  mode = "typewriter",
  speed = 50,
  delay = 0,
  className,
  cursorClassName,
  showCursor = true,
  cursorChar = "|",
  loop = false,
  pauseTime = 2000,
  onComplete,
  onStart,
  startOnMount = true,
  preserveWhitespace = true,
  splitByWords = false,
}: TypewriterTextProps) {
  const [state, setState] = useState({
    displayText: "",
    currentTextIndex: 0,
    showCursorState: showCursor,
    prefersReducedMotion: false,
  });

  const timeoutRef = useRef<NodeJS.Timeout>();
  const intervalRef = useRef<NodeJS.Timeout>();

  // Convert text to array format
  const textArray = Array.isArray(text) ? text : [text];
  const currentText = textArray[state.currentTextIndex] || "";

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setState((prev) => ({ ...prev, prefersReducedMotion: mediaQuery.matches }));

    const handleChange = (event: MediaQueryListEvent) => {
      setState((prev) => ({ ...prev, prefersReducedMotion: event.matches }));
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Cursor blinking effect
  useEffect(() => {
    if (!showCursor) return;

    intervalRef.current = setInterval(() => {
      setState((prev) => ({ ...prev, showCursorState: !prev.showCursorState }));
    }, 530);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [showCursor]);

  // Main typing animation logic
  useEffect(() => {
    if (!startOnMount || state.prefersReducedMotion) {
      setState((prev) => ({ ...prev, displayText: currentText }));
      return;
    }

    const startTyping = () => {
      setState((prev) => ({ ...prev, displayText: "" }));

      if (onStart) {
        onStart();
      }

      const typeText = () => {
        if (mode === "typewriter") {
          typewriterAnimation();
        } else if (mode === "fade-in-words") {
          fadeInWordsAnimation();
        } else if (mode === "slide-in-chars") {
          slideInCharsAnimation();
        }
      };

      if (delay > 0) {
        timeoutRef.current = setTimeout(typeText, delay);
      } else {
        typeText();
      }
    };

    const typewriterAnimation = () => {
      const chars = splitByWords
        ? currentText.split(" ")
        : currentText.split("");

      const typeNextChar = (index: number) => {
        if (index <= chars.length) {
          const newText = splitByWords
            ? chars.slice(0, index).join(" ") + (index < chars.length ? "" : "")
            : chars.slice(0, index).join("");

          setState((prev) => ({ ...prev, displayText: newText }));

          if (index < chars.length) {
            const nextSpeed = splitByWords ? speed * 3 : speed;
            timeoutRef.current = setTimeout(
              () => typeNextChar(index + 1),
              nextSpeed
            );
          } else {
            completeAnimation();
          }
        }
      };

      typeNextChar(0);
    };

    const fadeInWordsAnimation = () => {
      setState((prev) => ({ ...prev, displayText: currentText }));
      completeAnimation();
    };

    const slideInCharsAnimation = () => {
      setState((prev) => ({ ...prev, displayText: currentText }));
      completeAnimation();
    };

    const completeAnimation = () => {
      if (onComplete) {
        onComplete();
      }

      // Handle looping or multiple texts
      if (
        loop ||
        (textArray.length > 1 && state.currentTextIndex < textArray.length - 1)
      ) {
        timeoutRef.current = setTimeout(() => {
          if (textArray.length > 1) {
            setState((prev) => ({
              ...prev,
              currentTextIndex: (prev.currentTextIndex + 1) % textArray.length,
            }));
          } else {
            startTyping();
          }
        }, pauseTime);
      }
    };

    startTyping();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [
    currentText,
    state.currentTextIndex,
    mode,
    speed,
    delay,
    loop,
    pauseTime,
    onComplete,
    onStart,
    startOnMount,
    splitByWords,
    state.prefersReducedMotion,
    textArray.length,
  ]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // If reduced motion is preferred, render without animation
  if (state.prefersReducedMotion) {
    return <span className={cn("", className)}>{currentText}</span>;
  }

  const renderText = () => {
    if (mode === "fade-in-words") {
      const words = currentText.split(" ");
      return (
        <span className={cn("", className)}>
          {words.map((word, index) => (
            <motion.span
              key={`${state.currentTextIndex}-${index}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * (speed / 1000),
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="inline-block"
              style={{ marginRight: preserveWhitespace ? "0.25em" : 0 }}
            >
              {word}
            </motion.span>
          ))}
        </span>
      );
    }

    if (mode === "slide-in-chars") {
      const chars = currentText.split("");
      return (
        <span className={cn("", className)}>
          {chars.map((char, index) => (
            <motion.span
              key={`${state.currentTextIndex}-${index}`}
              initial={{ opacity: 0, x: -10, rotateX: 90 }}
              animate={{ opacity: 1, x: 0, rotateX: 0 }}
              transition={{
                delay: index * (speed / 1000),
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="inline-block"
              style={{
                transformOrigin: "center bottom",
                marginRight: char === " " && preserveWhitespace ? "0.25em" : 0,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </span>
      );
    }

    // Default typewriter mode
    return <span className={cn("", className)}>{state.displayText}</span>;
  };

  return (
    <span className="relative inline-block">
      <AnimatePresence mode="wait" key={state.currentTextIndex}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {renderText()}
        </motion.span>
      </AnimatePresence>

      {showCursor && (
        <motion.span
          className={cn(
            "inline-block ml-0.5",
            state.showCursorState ? "opacity-100" : "opacity-0",
            cursorClassName
          )}
          animate={{ opacity: state.showCursorState ? 1 : 0 }}
          transition={{ duration: 0.1 }}
        >
          {cursorChar}
        </motion.span>
      )}
    </span>
  );
}

TypewriterText.displayName = "TypewriterText";
