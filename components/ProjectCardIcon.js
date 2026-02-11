"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProjectCardIcon({ project, sizeClass = "w-24 h-24 md:w-28 md:h-28" }) {
  const [faviconFailed, setFaviconFailed] = useState(false);
  const useFavicon = project.favicon && !faviconFailed;
  return (
    <div className={`relative z-10 ${sizeClass} rounded-xl bg-white/95 p-2 shadow-md flex items-center justify-center flex-shrink-0`}>
      {useFavicon ? (
        <img
          src={project.favicon}
          alt=""
          className="w-full h-full object-contain"
          onError={() => setFaviconFailed(true)}
        />
      ) : (
        <Image src={project.image} alt="" width={96} height={96} className="object-contain" />
      )}
    </div>
  );
}
