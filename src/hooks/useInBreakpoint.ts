import { useEffect, useState } from "react";
import { breakpoints } from "../themes";
import useDimensions from "./useDimentions";

/**
 * Determine if the screen size is within the specified breakpoint (src/themes/index.ts).
 *
 * @param index
 * @returns
 */
export default function useInBreakpoint(index: number, useHeight?: boolean) {
  const { width, height } = useDimensions();
  const [inBreakpoint, setInBreakpoint] = useState(false);

  useEffect(() => {
    setInBreakpoint((useHeight ? height : width) < parseInt(breakpoints[index]));
  }, [width, height, useHeight, index]);

  return inBreakpoint;
}
