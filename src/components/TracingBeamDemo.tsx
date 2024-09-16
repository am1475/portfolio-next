"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../components/ui/tracing-beam";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6 bg-black">
      {/* Set the background color to black */}
      <div className="max-w-6xl mx-auto antialiased pt-8 relative">
        {/* Heading */}
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 text-center">
        Projects
      </p>

        {projects.map((item, index) => (
          <div
            key={`content-${index}`}
            className="flex flex-col md:flex-row items-start mb-20"
          >
            <div className="md:w-1/2 lg:w-2/3 mb-8 md:mb-0"> {/* Adjust width on large screens */}
              {/* Badge */}
              <h2 className="bg-white text-black rounded-full text-sm w-fit px-6 py-2 mb-6">
                {item.badge}
              </h2>

              {/* Title */}
              <p className={twMerge("font-sans text-white text-4xl mb-6 md:text-5xl")}>
                {item.title}
              </p>

              {/* Description */}
              <div className="text-lg prose prose-lg prose-invert text-white">
                {item.description}
              </div>
            </div>

            {/* Image Section with link */}
            {item?.image && (
              <div className="md:w-1/2 lg:w-1/2 flex justify-end md:pl-12"> {/* Increased image container width */}
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={item.image}
                    alt="project thumbnail"
                    className="rounded-lg object-cover w-full h-auto max-w-[800px]" /* Increased max width */
                  />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const projects = [
  {
    title: "Restaurant Website",
    description: (
      <>
        <p>
          A fully responsive restaurant website built using React and Tailwind CSS. 
          This website showcases a modern design with user-friendly navigation. It has been 
          deployed using Vercel for easy access and scalability.
        </p>
      </>
    ),
    badge: "React, Tailwind CSS",
    image:
      "https://res.cloudinary.com/dqm8rxpzq/image/upload/v1726408355/Screenshot_2024-09-15_192036_b9kith.png",
    link: "https://resto-beta-puce.vercel.app/",
  },
  {
    title: "Text Sentiment Analysis",
    description: (
      <>
        <p>
          This project leverages a Flask backend with a React frontend to analyze text sentiment. 
          The model is trained on datasets from Kaggle, enabling accurate and efficient sentiment analysis.
        </p>
      </>
    ),
    badge: "React, Flask, Kaggle",
    image:
      "https://res.cloudinary.com/dqm8rxpzq/image/upload/v1726409994/Screenshot_2024-09-15_194840_o3n1hz.png",
    link: "https://your-text-sentiment-analysis-website.com",
  },
  {
    title: "LeetCode and Codeforces Tracker",
    description: (
      <>
        <p>
          A tracking application built using web scraping and the Codeforces API. 
          It allows users to track their coding progress on LeetCode and Codeforces, 
          displaying metrics and challenges solved.
        </p>
      </>
    ),
    badge: "React, Web Scraping, Codeforces API",
    image:
      "https://res.cloudinary.com/dqm8rxpzq/image/upload/v1726430960/Screenshot_2024-09-16_013751_ayccnb.png",
    link: "https://your-leetcode-codeforces-tracker.com",
  },
  {
    title: "Weather Dashboard",
    description: (
      <>
        <p>
          A weather dashboard built using React and the OpenWeather API. 
          This dashboard provides real-time weather data for any location, 
          presented in a sleek and intuitive interface.
        </p>
      </>
    ),
    badge: "React, OpenWeather API",
    image:
      "https://res.cloudinary.com/dqm8rxpzq/image/upload/v1726409268/Screenshot_2024-09-15_193727_tt8wjk.png",
    link: "https://weather-predictor-zeta.vercel.app/",
  },
];
