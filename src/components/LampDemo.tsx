"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

// Custom LeetCode Icon
const LeetcodeIcon = () => (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
    alt="LeetCode Logo"
    width="48"
    height="48"
  />
);



export function LampDemo() {
  return (
    <BackgroundBeamsWithCollision>
    <LampContainer>
      {/* Lamp Effect Section */}
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Contact <br /> Me
      </motion.h1>

      {/* Social Media Links Section */}
      <div className="mt-12 flex justify-center space-x-6">
        {/* GitHub */}
        <motion.a
          href="https://github.com/your-github-handle"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-4xl md:text-5xl text-gray-800 dark:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/your-linkedin-handle"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-4xl md:text-5xl text-blue-700 dark:text-blue-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </motion.a>

        {/* LeetCode */}
        <motion.a
          href="https://leetcode.com/your-leetcode-handle"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-4xl md:text-5xl text-orange-500 dark:text-orange-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LeetcodeIcon />
        </motion.a>

        {/* HackerRank */}
        <motion.a
          href="https://www.hackerrank.com/your-hackerrank-handle"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-4xl md:text-5xl text-green-600 dark:text-green-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaHackerrank />
        </motion.a>
      </div>
    </LampContainer>
    </BackgroundBeamsWithCollision>
  );
}
