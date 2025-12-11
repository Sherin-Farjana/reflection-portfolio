import taskmaster from "../../public/Taskmaster.png";
import deepscribe from "../../public/Deepscribe.png";
import nasa from "../../public/Nasa.png";
import startup from "../../public/startup.png";
import unstoppable from "../../public/Unstoppable.png";
import { divider, image } from "@nextui-org/theme";
// data/links.js
import { Github, Linkedin, Instagram } from "lucide-react";

import { BsThreads } from "react-icons/bs";
import { ComponentType, SVGProps } from "react";
import steam from "@/components/steam";
import X from "@/components/X";

interface LinkSocial {
  href: string;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  outline?: boolean;
}

export const projectData = [
  {
    title: "Unstoppable",
    description:
      "Built an interactive workout planner that generates personalized routines based on user-selected goals and muscle groups. Designed a clean, responsive UI with dynamic exercise cards, smooth interactions, and real-time workout tracking.",
    visit: "https://sherin-reactjs-gym-app.netlify.app/",
    github: "https://github.com/Sherin-Farjana/reactjs-gym-app",
    image: unstoppable,
    tech: ["Javascript", "React.js", "Tailwind"],
  },
  {
    title: "DeepScribe",
    description:
      "Developed a browser-based audio transcription and translation application allowing users to record or upload audio and convert it into text. Implemented real-time progress feedback, tab-based navigation, and a responsive, user-friendly interface.",
    visit: "https://sherin-reactjs-transcribe-app.netlify.app/",
    github: "https://github.com/Sherin-Farjana/reactjs-transcribe-app",
    image: deepscribe,
    tech: ["React.js", "Tailwind", "Javascript", "Web workers"],
  },
  {
    title: "NASA APOD Viewer",
    description:
      "Created a NASA Astronomy Picture of the Day viewer that fetches and displays daily space imagery using a public API. Built a responsive layout with sidebar details, caching via localStorage, and smooth loading states for better performance.",
    visit: "https://sherin-reactjs-nasa-app.netlify.app/",
    github: "https://github.com/Sherin-Farjana/reactjs-nasa-app",
    image: nasa,
    tech: ["React.js", "Javascript", "NASA APOD API"],
  },
  {
    title: "StartUp",
    description:
      "Designed and built a modern, responsive startup landing page featuring hero sections, pricing, testimonials, and a contact form. Focused on clean layout, reusability, and consistent visual hierarchy using Bootstrap components.",
    visit: "https://sherin-startup-landing-page.netlify.app/",
    github: "https://github.com/Sherin-Farjana/Startup-Landing-Page",
    image: startup,
    tech: ["HTML5", "CSS3", "Bootstrap"],
  },
  {
    title: "TaskMaster Pro",
    description:
      "Built a lightweight task management application enabling users to add, filter, and manage tasks efficiently. Implemented persistent storage with localStorage and a responsive UI for improved usability.",
    visit: "https://sherin-task-master-pro.netlify.app/",
    github: "https://github.com/Sherin-Farjana/Task-Master",
    image: taskmaster,
    tech: ["HTML5", "CSS3", "Javascript"],
  },
] as const;

export const linksSocial: LinkSocial[] = [
  {
    href: "https://github.com/Sherin-Farjana",
    label: "GitHub",
    icon: Github,
    outline: false,
  },
  {
    href: "https://www.linkedin.com/in/sherin-farjana",
    label: "LinkedIn",
    icon: Linkedin,
    outline: false,
  },
];
