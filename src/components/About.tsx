"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import Image from "next/image";
import BlurFade from "./ui/blur-fade";

function About() {
  return (
    <section
      className="mt-10 max-w-[45.3rem] z-20 scroll-mt-44 leading-8 px-5 lg:px-0 md:px-5"
      id="about"
    >
      <BlurFade delay={0.04 * 3}>
        <SectionHeading>About Me</SectionHeading>
      </BlurFade>
      <BlurFade delay={0.04 * 4}>
        <p className="text-left TextClr mt-5">
          I&apos;m a passionate{" "}
          <span className="font-semibold underline chipText">
            {" "}
            Front-End developer
          </span>{" "}
          with nearly three years of experience as a software developer,
          specializing in C, C++, OpenGL, and modern web technologies. In web
          development, I create interactive, responsive, and high-performance
          applications using{" "}
          <span className="inline-flex items-center align-middle rounded-md py-0.5 chip chipText md:px-2 px-1 text-sm font-semibold h-6">
            <Image
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/react-js-icon.png"
              alt="React Icon"
              className="w-4 h-4 mr-1 rounded-full"
              width={16}
              height={16}
            />
            React,
          </span>{" "}
          <span className="inline-flex items-center align-middle rounded-md py-0.5 chip chipText md:px-2 px-1 text-sm font-semibold h-6">
            <Image
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png"
              alt="React Icon"
              className="w-4 h-4 mr-1 rounded-full"
              width={16}
              height={16}
            />
            Next.js,
          </span>{" "}
          <span className="inline-flex items-center align-middle rounded-md py-0.5 chip chipText md:px-2 px-1 text-sm font-semibold h-6">
            <Image
              src="/tailwind-css-icon.png"
              alt="React Icon"
              className="w-4 h-4 mr-1 rounded-full"
              width={16}
              height={16}
            />
            Tailwind
          </span>{" "}
          and{" "}
          <span className="inline-flex items-center align-middle rounded-md py-0.5 chip chipText md:px-2 px-1 text-sm font-semibold h-6">
            <Image
              src="/bootstrap-5-logo-icon.png"
              alt="React Icon"
              className="w-4 h-4 mr-1 rounded-full"
              width={16}
              height={16}
            />
            Bootstrap,
          </span>{" "}
          focusing on building seamless user experiences and visually engaging
          interfaces. I enjoy turning complex requirements into intuitive,
          user-friendly solutions and continuously exploring new tools and
          techniques to enhance my craft.
        </p>
      </BlurFade>
    </section>
  );
}

export default About;
