import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

// Placeholder page for sections still under development
function page() {
  return (
    <div className=" flex min-h-screen flex-col gap-5 items-center justify-center">
      {/*Section title*/}
      <h2 className=" TextClr font-bold sm:text-3xl text-2xl text-center">
        This section is under developement.
      </h2>
      {/* Supporting message */}
      <h2 className=" TextClr font-medium sm:text-lg text-xs text-center">
        or you can find more projects on my github !
      </h2>
      {/* Navigation actions */}
      <div className=" flex flex-row gap-5 mt-5">
        {/* Internal navigation */}
        <Link
          href="/"
          className="px-2 py-1.5 rounded-lg border border-black dark:border-white/95 dark:text-white/95 text-black flex flex-row items-center justify-center gap-1 text-sm font-medium"
        >
          Home
        </Link>
        {/* External GitHub link */}
        <Link
          target="_blank"
          href="https://github.com/Sherin-Farjana"
          className="px-2 py-1.5 rounded-lg bg-black/85 dark:bg-white/95 dark:text-black text-white flex flex-row items-center justify-center gap-1 text-sm font-medium"
        >
          <FaGithub className="text-base" /> Github
        </Link>
      </div>
    </div>
  );
}

export default page;
