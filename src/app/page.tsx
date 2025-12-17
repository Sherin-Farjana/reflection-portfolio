"use client";
import type { NextPage } from "next";
import { useTheme } from "@/context/themeContext";
import { Toaster } from "react-hot-toast";

//Page sections
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Project from "@/components/Project";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

//Main landing page
const Home: NextPage = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <main className=" max-w-screen overflow-x-hidden dark:bg-black flex flex-col items-center scrollbar-hide">
      {/*Page sections*/}
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Project />
      <Contact />

      {/*Global toast notifications*/}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            borderRadius: "10px",
            background: theme !== "light" ? "#141414" : "",
            color: theme !== "light" ? "#fff" : "",
          },
        }}
      />
    </main>
  );
};

export default Home;
