"use client";
import React from "react"; // Import useState and useRef
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

function Contact() {
  return (
    //Fade-in animation when section enters viewport
    <motion.section
      id="contact"
      className=" mt-12 w-[min(100%,43.5rem)] scroll-mt-16 px-5 lg:px-0 md:px-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      {/* Email contact information */}
      <p className="TextClr text-sm">
        Please contact me directly at{" "}
        <a
          href="mailto:sherinfarjana.siraj@gmail.com"
          className="font-semibold underline text-black dark:text-white"
        >
          sherinfarjana.siraj@gmail.com
        </a>
      </p>
    </motion.section>
  );
}

export default Contact;
