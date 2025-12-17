import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { BsFillPatchCheckFill } from "react-icons/bs";
import PU from "../../public/PU.png";
import LC from "../../public/LC.png";

// Structured education data passed into Timeline component
export function EducationData() {
  const data = [
    {
      title: "Post Graduate Diploma in Full Stack Software Development",
      logo: LC,
      company: (
        // Institution name with verification icon
        <div className=" flex flex-row items-center justify-between w-full  md:text-sm text-xs">
          <p className=" flex flex-row items-center text-neutral-600 font-medium dark:text-neutral-400">
            <BsFillPatchCheckFill className="text-blue-500 mr-2 text-base" />{" "}
            Lambton College.
          </p>
        </div>
      ),
      duration: (
        <p className="text-neutral-500 font-normal md:text-sm">
          Jan 2024 - Sep 2025
        </p>
      ),
      content: (
        // Expanded description shown on timeline click
        <div>
          <div className="">
            <div className="flex gap-2 items-center leading-normal text-left text-neutral-600 font-normal dark:text-neutral-400 text-xs md:text-sm">
              During my Full Stack program, I explored building interactive and
              responsive web applications using React, Next.js, Node.js, and
              MongoDB. I worked on practical projects that emphasized UI/UX,
              front-end performance, and end-to-end application development,
              further fueling my interest in web development.
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Bachelor of Engineering",
      logo: PU,
      company: (
        <div className=" flex flex-row items-center justify-between w-full  md:text-sm text-xs">
          <p className=" flex flex-row items-center text-neutral-600 font-medium dark:text-neutral-400">
            <BsFillPatchCheckFill className="text-blue-500 mr-2 text-base" />{" "}
            Panimalar University.
          </p>
        </div>
      ),
      duration: (
        <p className="text-neutral-500 font-normal md:text-sm">
          Mar 2017 - May 2021
        </p>
      ),
      content: (
        <div>
          <div className="">
            <div className="flex gap-2 items-center leading-normal text-left text-neutral-600 font-normal dark:text-neutral-400 text-xs md:text-sm">
              My coding journey began during my B.E at Panimalar University,
              where I discovered the excitement of turning ideas into functional
              applications. This experience sparked a passion for creating
              interactive and efficient software, which continues to drive me in
              every project I undertake.
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full mt-5">
      <Timeline data={data} />
    </div>
  );
}
