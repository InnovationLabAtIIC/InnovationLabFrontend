"use client";

import React, { createContext, useContext, useRef } from "react";
import { useRouter } from "next/navigation";
import PixelTransition from "./PixelTransition";

type TransitionContextShape = {
  navigateWithTransition: (href: string) => Promise<void>;
};

const TransitionContext = createContext<TransitionContextShape | null>(null);

export function useTransition() {
  const ctx = useContext(TransitionContext);
  if (!ctx)
    throw new Error("useTransition must be used within TransitionProvider");
  return ctx;
}

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  type PixelHandle = {
    cover: () => Promise<void>;
    reveal: () => Promise<void>;
  };
  const pixelRef = useRef<PixelHandle | null>(null);

  const navigateWithTransition = async (href: string) => {
    try {
      if (pixelRef.current?.cover) await pixelRef.current.cover();
    } catch {
      // ignore
    }
    // perform navigation
    router.push(href);
    // reveal after slight delay to allow new page to mount
    try {
      if (pixelRef.current?.reveal) await pixelRef.current.reveal();
    } catch {
      // ignore
    }
  };

  return (
    <TransitionContext.Provider value={{ navigateWithTransition }}>
      {children}
      <div className="fixed inset-0 z-50 pointer-events-none">
        <div className="max-w-screen mx-auto">
          <PixelTransition
            ref={pixelRef}
            className="mx-auto w-full"
            firstContent={<></>}
            secondContent={<></>}
            interactive={false}
            aspectClass="h-screen"
            pixelColor="#000"
          />
        </div>
      </div>
    </TransitionContext.Provider>
  );
}
