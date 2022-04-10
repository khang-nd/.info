import { Transition } from "framer-motion";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

export default function useReduceMotion(transition?: Transition) {
  const { reduceMotion } = useContext(GlobalContext);
  return reduceMotion.val ? { duration: 0 } : transition;
}
