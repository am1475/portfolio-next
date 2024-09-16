"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import { Button } from "../components/ui/moving-border";

const content = [
  {
    title: "Exploring New Horizons",
    description:
      "I am currently a 3rd year student of Computer Engineering at DY Patil College of Engineering, Akurdi. I'm passionate about learning and growing in various fields such as development, cloud, databases, and AI/ML. With a strong interest in Problem Solving and Mathematical and Computing Domains, I am always eager to take on new challenges.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white text-3xl sm:text-4xl lg:text-5xl font-semibold">
        Exploring New Horizons
      </div>
    ),
  },
  {
    title: "Development and Cloud",
    description:
      "In my journey, I’ve delved into development, creating modern applications that are sleek and scalable. I am also exploring cloud technologies to understand how to efficiently deploy and manage applications at scale.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white text-3xl sm:text-4xl lg:text-5xl font-semibold">
        Development and Cloud
      </div>
    ),
  },
  {
    title: "AI, ML, and Databases",
    description:
      "I am deeply interested in Artificial Intelligence, Machine Learning, and how databases power modern applications. My work in these areas focuses on building smarter systems and optimizing data flow to create seamless user experiences.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white text-3xl sm:text-4xl lg:text-5xl font-semibold">
        AI, ML, and Databases
      </div>
    ),
  },
  {
    title: "Problem Solving Enthusiast",
    description:
      "With a passion for problem-solving, I enjoy tackling complex challenges in Mathematical and Computing domains. These challenges help me enhance my skills and grow in my field.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white text-3xl sm:text-4xl lg:text-5xl font-semibold">
        Problem Solving Enthusiast
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <p className="text-4xl sm:text-6xl lg:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-12 text-center">
        About me
      </p>
      <StickyScroll content={content} />

      {/* "Get to Know More" section */}
      <div className="mt-16 flex items-center justify-center">
        <div>
          <p className="text-4xl sm:text-6xl lg:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-12 text-center">
            Download my CV
          </p>
          <div className="flex justify-center">
            <a
              href="https://drive.google.com/file/d/1Wvll7b-8PeKZ2tdVg19RYQ5JUcrfcawd/view?usp=drive_link"
              download="Ash_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block px-8 py-4 font-medium text-white group"
            >
              <div>
                <Button
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 px-10 py-3 text-2xl sm:text-3xl lg:text-4xl"
                >
                  Resume
                </Button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
