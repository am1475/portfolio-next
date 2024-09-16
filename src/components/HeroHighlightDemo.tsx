"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { Cover } from "@/components/ui/cover";

export function HeroHighlightDemo() {
  const words = [
    {
      text: "Welcome",
    },
    {
      text: "To",
    },
    {
      text: "my",
    },
    {
      text: "Portfolio",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="relative">
      {/* HeroHighlight Content */}
      <HeroHighlight>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto px-4 py-8">
          {/* Left Half: Static Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-7xl mx-auto text-center mt-6 relative z-20 py-10 bg-clip-text text-transparent bg-gradient-to-b from-purple-600 via-blue-500 to-teal-400 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-200">
              Amartya Paul's Portfolio
              <Cover>I am a Full Stack AI enthusiast</Cover>
            </h1>

            <p className="text-sm sm:text-base md:text-lg mt-4 text-gray-600 dark:text-gray-300">
              Passionate about building modern web applications and AI-driven solutions.
            </p>
          </motion.div>

          {/* Right Half: 3D Image Card */}
          <div className="mt-12 md:mt-0 md:ml-8">
            <CardContainer className="inter-var mt-8">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-900 dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="100"
                  rotateX={20}
                  rotateZ={-10}
                  className="w-full mt-4"
                >
                  <div className="flex justify-center">
                    <motion.img
                      src="https://res.cloudinary.com/dqm8rxpzq/image/upload/v1726428690/WhatsApp_Image_2024-09-16_at_00.59.20_c2732884_dm73av.jpg" // Replace with your image URL
                      alt="Amartya Paul"
                      className="rounded-lg shadow-lg"
                      style={{ width: "100%", height: "auto" }} // Set width and height for responsiveness
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </HeroHighlight>
    </div>
  );
}
