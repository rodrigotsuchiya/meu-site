"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamic imports with ssr: false must be in a Client Component
const GLSLHills = dynamic(() => import("@/components/ui/glsl-hills").then(mod => mod.GLSLHills), { 
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-bg/50" /> 
});

const TextScramble = dynamic(() => import("@/components/ui/text-scramble").then(mod => mod.TextScramble), { 
  ssr: false,
  loading: ({ children }: any) => <span>{children}</span> 
});

const Gallery4 = dynamic(() => import("@/components/ui/gallery4").then(mod => mod.Gallery4), { 
  ssr: false,
  loading: () => <div className="h-[500px] animate-pulse bg-black/5" />
});

export function DynamicHills() {
  return (
    <Suspense fallback={null}>
      <GLSLHills width="100%" height="100%" />
    </Suspense>
  );
}

export function DynamicText({ children, className }: { children: string, className?: string }) {
  return (
    <TextScramble className={className}>
      {children}
    </TextScramble>
  );
}

export function DynamicGallery() {
  return (
    <Suspense fallback={<div className="h-[500px] animate-pulse bg-black/5" />}>
      <Gallery4 />
    </Suspense>
  );
}
