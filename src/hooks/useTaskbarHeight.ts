import { useEffect, useState } from "react";
import { sizes } from "../themes";
import useInBreakpoint from "./useInBreakpoint";
import useIsLandscape from "./useIsLandscape";

export default function useTaskbarHeight() {
  const isLandscape = useIsLandscape();
  const isMobile = useInBreakpoint(0, isLandscape);
  const [height, setHeight] = useState(sizes[8]);

  useEffect(() => {
    setHeight(sizes[isMobile && isLandscape ? 7 : 8]);
  }, [isLandscape, isMobile]);

  return height;
}
