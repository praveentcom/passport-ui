"use client";

import { useState } from "react";
import { Input } from "../../src/components/input";
import { Label } from "../../src/components/label";

const FontWeightExample = ({
  weight,
  label,
  input,
}: {
  weight: string;
  label: string;
  input: string;
}) => (
  <div className="meta-container">
    <div className="text-xs text-muted-foreground font-mono">{label}</div>
    <div className={`text-lg ${weight}`}>
      {input || "The quick brown fox jumps over the lazy dog"}
    </div>
  </div>
);

const FontSizeExample = ({
  size,
  label,
  input,
}: {
  size: string;
  label: string;
  input: string;
}) => (
  <div className="meta-container">
    <div className="text-xs text-muted-foreground font-mono">{label}</div>
    <div className={`${size}`}>
      {input || "The quick brown fox jumps over the lazy dog"}
    </div>
  </div>
);

export function FontWeightsSection() {
  const [input, setInput] = useState("");

  return (
    <>
      <div className="meta-container max-w-64">
        <Label>Preview Text</Label>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to display"
        />
      </div>
      <div className="list-container">
        <FontWeightExample
          weight="font-normal"
          label="font-normal (400)"
          input={input}
        />
        <FontWeightExample
          weight="font-medium"
          label="font-medium (500)"
          input={input}
        />
        <FontWeightExample
          weight="font-semibold"
          label="font-semibold (600)"
          input={input}
        />
        <FontWeightExample
          weight="font-bold"
          label="font-bold (700)"
          input={input}
        />
      </div>
    </>
  );
}

export function TypographyScaleSection() {
  const [input, setInput] = useState("");

  return (
    <>
      <div className="meta-container max-w-64">
        <Label>Preview Text</Label>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to display"
        />
      </div>
      <div className="list-container">
        <FontSizeExample
          size="text-2xl font-medium"
          label="h1 - text-2xl font-medium"
          input={input}
        />
        <FontSizeExample
          size="text-lg font-medium"
          label="h2 - text-lg font-medium"
          input={input}
        />
        <FontSizeExample
          size="text-base font-medium"
          label="h3 - text-base font-medium"
          input={input}
        />
        <FontSizeExample
          size="text-sm font-medium"
          label="h4 - text-sm font-medium"
          input={input}
        />
        <FontSizeExample
          size="text-sm font-medium text-muted-foreground"
          label="h5 - text-sm font-medium text-muted-foreground"
          input={input}
        />
        <FontSizeExample
          size="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
          label="h6 - text-xs font-semibold uppercase tracking-wide"
          input={input}
        />
        <FontSizeExample
          size="text-sm"
          label="body - text-sm (default)"
          input={input}
        />
        <FontSizeExample
          size="text-xs text-muted-foreground"
          label="small - text-xs text-muted-foreground"
          input={input}
        />
      </div>
    </>
  );
}
