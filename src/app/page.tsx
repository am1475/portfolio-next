"use client"; // Add this to ensure the component is treated as a client-side component

import Image from "next/image";
import { HeroHighlightDemo } from "@/components/HeroHighlightDemo";




import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import { TracingBeamDemo } from "@/components/TracingBeamDemo";
import { StickyScrollRevealDemo } from "@/components/StickyScrollRevealDemo";
import { LampDemo } from "@/components/LampDemo";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] bg-grid-white bg-opacity-[0.02] antialiased">
      <HeroHighlightDemo />
      <InfiniteMovingCardsDemo />
      <TracingBeamDemo />
      <StickyScrollRevealDemo />
      <LampDemo />
    
     
   
      <Footer />
    </main>

  );
}
