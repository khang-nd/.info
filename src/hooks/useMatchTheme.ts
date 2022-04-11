import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { ThemeMode } from "../themes";

export default function useMatchTheme(target: ThemeMode) {
  const { theme } = useContext(GlobalContext);
  return theme.val === target;
}
