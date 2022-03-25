import { useEffect, useState } from "react";

export default function useIsLandscape() {
  const [isLandscape, setIsLandscape] = useState(true);

  useEffect(() => {
    const handleChange = (e: MediaQueryListEvent) => setIsLandscape(e.matches);
    window.matchMedia("(orientation: landscape)").addEventListener("change", handleChange);

    return () => {
      window.matchMedia("(orientation: landscape)").removeEventListener("change", handleChange);
    };
  }, []);

  return isLandscape;
}
