"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [variant, setVariant] = useState<"A" | "B" | null>(null);

  useEffect(() => {
    // simple random assignment per load
    const randomVariant = Math.random() > 0.5 ? "A" : "B";
    setVariant(randomVariant);
  }, []);

  if (!variant) return <p>Loading...</p>;

  return (
    <div>
      <h1>Welcome to Our Product</h1>

      <button onClick={() => console.log("Clicked variant:", variant)}>
        {variant === "A" ? "Get Started" : "Start Free Trial"}
      </button>
    </div>
  );
}