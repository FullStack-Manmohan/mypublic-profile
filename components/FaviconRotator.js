"use client";

import { useEffect } from "react";
import { faviconRotationUrls } from "../lib/projects";

const ROTATE_INTERVAL_MS = 2500;

export default function FaviconRotator() {
  useEffect(() => {
    if (typeof document === "undefined" || !faviconRotationUrls.length) return;
    let index = 0;
    const setFavicon = () => {
      const href = faviconRotationUrls[index % faviconRotationUrls.length];
      let link = document.querySelector('link[rel="icon"]');
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }
      link.href = href;
      index += 1;
    };
    setFavicon();
    const id = setInterval(setFavicon, ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);
  return null;
}
