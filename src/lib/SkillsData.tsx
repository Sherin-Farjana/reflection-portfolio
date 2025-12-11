import Image from "next/image";
import {
  SiGit,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiSass,
  SiBootstrap,
  SiJest,
  SiWebpack,
  SiBabel,
  SiVercel,
  SiNetlify,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: JSX.Element; // Use JSX.Element for React elements like SVG
}

const IconSize = 25;

export const SkillsData = (): Skill[] => {
  return [
    {
      name: "HTML",
      icon: (
        <div
          style={{
            backgroundColor: "#f14f2f15",
            borderColor: "#f14f2f30",
            borderRadius: "0.25rem", // equivalent to rounded-sm
            borderWidth: "1px",
          }}
          className="flex items-center opacity-15 justify-center px-2 py-1.5"
        >
          <SiHtml5 size={IconSize} color="#F1502F" />
        </div>
      ),
    },
    {
      name: "CSS",
      icon: (
        <div
          style={{
            backgroundColor: "#3178c616",
            borderColor: "#3178c630",
            borderRadius: "0.25rem", // equivalent to rounded-sm
            borderWidth: "1px",
          }}
          className="flex items-center opacity-15 justify-center px-2 py-1.5"
        >
          <SiCss3 size={IconSize} color="#3178c6" />
        </div>
      ),
    },
    {
      name: "SASS",
      icon: (
        <div
          style={{
            backgroundColor: "#8902451d",
            borderColor: "#5f5f5f30",
            borderRadius: "0.25rem", // equivalent to rounded-sm
            borderWidth: "1px",
          }}
          className="flex items-center opacity-15 justify-center px-2 py-1.5"
        >
          <SiSass size={IconSize} color="#BF4080" />
        </div>
      ),
    },
    {
      name: "JavaScript",
      icon: (
        <div
          style={{
            backgroundColor: "#f7de1e16",
            borderColor: "#f7de1e50",
            borderRadius: "0.25rem", // equivalent to rounded-sm
            borderWidth: "1px",
          }}
          className="flex items-center opacity-15 justify-center px-2 py-1.5"
        >
          <SiJavascript size={IconSize} color="#f7de1e" />
        </div>
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <div
          style={{
            backgroundColor: "#3178c616",
            borderColor: "#3178c630",
            borderRadius: "0.25rem", // equivalent to rounded-sm
            borderWidth: "1px",
          }}
          className="flex items-center opacity-15 justify-center px-2 py-1.5"
        >
          <SiTypescript size={IconSize} color="#3178c6" />
        </div>
      ),
    },
    {
      name: "Tailwind",
      icon: (
        <div
          style={{
            backgroundColor: "#37bbf815",
            borderColor: "#37bbf830",
            borderRadius: "0.25rem", // equivalent to rounded-sm
            borderWidth: "1px",
          }}
          className="flex items-center opacity-15 justify-center px-2 py-1.5 bg-[#37bbf86e]"
        >
          <SiTailwindcss size={IconSize} color="#37BCF8" />
        </div>
      ),
    },
    {
      name: "Bootstrap",
      icon: (
        <div
          style={{
            backgroundColor: "#37bbf815",
            borderColor: "#37bbf830",
            borderRadius: "0.25rem", // equivalent to rounded-sm
            borderWidth: "1px",
          }}
          className="flex items-center opacity-15 justify-center px-2 py-1.5 bg-[#37bbf86e]"
        >
          <SiBootstrap size={IconSize} color="#4C0BCE" />
        </div>
      ),
    },
    {
      name: "React",
      icon: (
        <div
          style={{
            backgroundColor: "#61dcfb10",
            borderColor: "#61dcfb30",
            borderRadius: "0.25rem", // equivalent to rounded-sm
            borderWidth: "1px",
          }}
          className="flex items-center opacity-15 justify-center px-2 py-1.5"
        >
          <SiReact size={IconSize} color="#61dafb" />
        </div>
      ),
    },
    {
      name: "Next.js",
      icon: (
        <div
          style={{
            backgroundColor: "#5f5f5f16",
            borderColor: "#5f5f5f30",
            borderRadius: "0.25rem", // equivalent to rounded-sm
            borderWidth: "1px",
          }}
          className="flex items-center opacity-15 justify-center px-2 py-1.5 border"
        >
          <SiNextdotjs size={IconSize} />
        </div>
      ),
    },
    {
      name: "Jest",
      icon: (
        <div
          style={{
            backgroundColor: "#8902451d",
            borderColor: "#5f5f5f30",
            borderRadius: "0.25rem", // equivalent to rounded-sm
            borderWidth: "1px",
          }}
          className="flex items-center opacity-15 justify-center px-2 py-1.5 border"
        >
          <SiJest size={IconSize} color="#BF4080" />
        </div>
      ),
    },
    {
      name: "Webpack",
      icon: (
        <div
          style={{
            backgroundColor: "#61dcfb10",
            borderColor: "#61dcfb30",
            borderRadius: "0.25rem", // equivalent to rounded-sm
            borderWidth: "1px",
          }}
          className="flex items-center opacity-15 justify-center px-2 py-1.5 border"
        >
          <SiWebpack size={IconSize} color="#61dafb" />
        </div>
      ),
    },
    {
      name: "Babel",
      icon: (
        <div
          style={{
            backgroundColor: "#f7de1e16",
            borderColor: "#f7de1e50",
            borderRadius: "0.25rem", // equivalent to rounded-sm
            borderWidth: "1px",
          }}
          className="flex items-center opacity-15 justify-center px-2 py-1.5 border"
        >
          <SiBabel size={IconSize} color="#F5DA55" />
        </div>
      ),
    },
    {
      name: "Vercel",
      icon: (
        <div
          style={{
            backgroundColor: "#0000001e",
            borderColor: "#5f5f5f30",
            borderRadius: "0.25rem", // equivalent to rounded-sm
            borderWidth: "1px",
          }}
          className="flex items-center opacity-15 justify-center px-2 py-1.5 border"
        >
          <SiVercel size={IconSize} color="#fff" />
        </div>
      ),
    },
    {
      name: "Netlify",
      icon: (
        <div
          style={{
            backgroundColor: "#61dcfb10",
            borderColor: "#61dcfb30",
            borderRadius: "0.25rem", // equivalent to rounded-sm
            borderWidth: "1px",
          }}
          className="flex items-center opacity-15 justify-center px-2 py-1.5 border"
        >
          <SiNetlify size={IconSize} color="#32E6E2" />
        </div>
      ),
    },
    {
      name: "MySQL",
      icon: (
        <div
          style={{
            backgroundColor: "#00758f15",
            borderColor: "#00758f30",
            borderRadius: "0.25rem", // equivalent to rounded-sm
            borderWidth: "1px",
          }}
          className="flex items-center opacity-15 justify-center px-2 py-1.5"
        >
          <SiMysql size={IconSize} color="#00758f" />
        </div>
      ),
    },
    {
      name: "Git",
      icon: (
        <div
          style={{
            backgroundColor: "#f14f2f15",
            borderColor: "#f14f2f30",
            borderRadius: "0.25rem", // equivalent to rounded-sm
            borderWidth: "1px",
          }}
          className="flex items-center opacity-15 justify-center px-2 py-1.5"
        >
          <SiGit size={IconSize} color="#F1502F" />
        </div>
      ),
    },
  ];
};
