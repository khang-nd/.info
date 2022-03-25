import { RefObject, useEffect, useState } from "react";

export const useIsFocused = (ref: RefObject<HTMLElement>) => {
  const [focusVisible, setFocusVisible] = useState(false);

  useEffect(() => {
    const elem = ref?.current;
    const exitFocus = () => setFocusVisible(false);
    const startFocus = ({ key }: KeyboardEvent) => key === "Tab" && setFocusVisible(true);

    elem?.addEventListener("keyup", startFocus);
    elem?.addEventListener("mousedown", exitFocus);
    elem?.addEventListener("blur", exitFocus);

    return () => {
      elem?.removeEventListener("keyup", startFocus);
      elem?.removeEventListener("mousedown", exitFocus);
      elem?.removeEventListener("blur", exitFocus);
    };
  }, [ref]);

  return focusVisible;
};
