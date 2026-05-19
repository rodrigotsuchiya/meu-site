"use client";

import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";

// Dynamic imports with ssr: false
const GLSLHills = dynamic(() => import("@/components/ui/glsl-hills").then(mod => mod.GLSLHills), { 
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-bg/50" /> 
});

const TextScramble = dynamic(() => import("@/components/ui/text-scramble").then(mod => mod.TextScramble), { 
  ssr: false,
  loading: ({ children }: any) => <>{children}</> 
});

const Gallery4 = dynamic(() => import("@/components/ui/gallery4").then(mod => mod.Gallery4), { 
  ssr: false,
  loading: () => <div className="h-[500px] animate-pulse bg-black/5" />
});

export function DynamicHills() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // ESTRATÉGIA DE PERFORMANCE: Carregar WebGL apenas quando a thread principal estiver livre
    // ou após um pequeno delay para priorizar o LCP (texto).
    const timer = setTimeout(() => {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => setShouldLoad(true));
      } else {
        setShouldLoad(true);
      }
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  if (!shouldLoad) return <div className="absolute inset-0 bg-bg/50" />;

  return (
    <Suspense fallback={<div className="absolute inset-0 bg-bg/50" />}>
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
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasInteracted(true);
      window.removeEventListener('scroll', handleScroll);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!hasInteracted) return <div className="h-[500px] animate-pulse bg-black/5" />;

  return (
    <Suspense fallback={<div className="h-[500px] animate-pulse bg-black/5" />}>
      <Gallery4 />
    </Suspense>
  );
}
