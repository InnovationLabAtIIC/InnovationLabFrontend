"use client";

import { useEffect, useState } from "react";

const TOTAL_COLUMNS = 16;

export default function useGutter() {
  const [gutter, setGutter] = useState(0);

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      setGutter(width / TOTAL_COLUMNS);
    };

    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  return gutter;
}
