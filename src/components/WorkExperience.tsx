import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { BsFillPatchCheckFill } from "react-icons/bs";
import ALT from "../../public/Altair.png";

// Professional work experience timeline data and presentation
export function WorkExperience() {
  const data = [
    {
      title: " Software Developer",
      logo: ALT,
      company: (
        <div className=" flex flex-row items-center justify-between w-full  md:text-sm text-xs">
          <p className=" flex flex-row text-neutral-600 dark:text-neutral-400 font-medium items-center">
            <BsFillPatchCheckFill className="text-blue-500 mr-2 text-base" />{" "}
            Altair Engineering India Pvt. Ltd.
          </p>
        </div>
      ),
      duration: (
        <p className="text-neutral-500 font-normal md:text-sm">
          Jan 2022 - Dec 2023
        </p>
      ),
      content: (
        <div>
          <div className="">
            <div className="flex gap-2 items-center leading-normal text-left text-neutral-600 font-normal dark:text-neutral-400 text-xs md:text-sm">
              Resolved over 50 OpenGL rendering issues by correcting shader
              execution order and coordinate transformations, improving
              simulation accuracy. Optimized rendering pipelines by 20% through
              advanced data structure redesign, memory profiling, and
              elimination of redundant operations. Participated in end-to-end
              testing of simulation tools, identifying and resolving runtime
              issues to ensure stable and reliable software builds.
            </div>
          </div>
        </div>
      ),
    },
    {
      title: " Student Intern",
      logo: ALT,
      company: (
        <div className=" flex flex-row items-center justify-between w-full  md:text-sm text-xs">
          <p className=" flex flex-row items-center text-neutral-600 font-medium dark:text-neutral-400">
            <BsFillPatchCheckFill className="text-blue-500 mr-2 text-base" />{" "}
            Altair Engineering India Pvt. Ltd.
          </p>
        </div>
      ),
      duration: (
        <p className="text-neutral-500 font-normal md:text-sm">
          June 2021 - dec 2021
        </p>
      ),
      content: (
        <div>
          <div className="">
            <div className="flex gap-2 items-center leading-normal text-left text-neutral-600 font-normal dark:text-neutral-400 text-xs md:text-sm">
              Collaborated with third-party UI teams to finalize dependencies
              and configurations required for pre-release activities, ensuring
              smooth integration and timely software delivery. Designed and
              implemented interactive simulation tools using Qt Designer and
              GPU-accelerated rendering pipelines, providing precise and
              efficient simulation feedback for end users.
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full mt-5">
      {/* Timeline entries describing roles, duration, and responsibilities */}
      <Timeline data={data} />
    </div>
  );
}
