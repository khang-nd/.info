import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { useLocalStorage } from "react-use";

type Context<T = boolean> = {
  val: T;
  set: Dispatch<SetStateAction<T>>;
};

type GlobalContextType = {
  reduceAnim: Context;
  hideTaskbar: Context;
};

type GlobalProviderProps = {
  children: ReactNode;
};

export const GlobalContext = createContext<GlobalContextType>({
  reduceAnim: { val: false, set: () => {} },
  hideTaskbar: { val: false, set: () => {} },
});

export const GlobalProvider = ({ children }: GlobalProviderProps): JSX.Element => {
  const [_reduceAnim, _setReduceAnim] = useLocalStorage("reduceAnimation", false);
  const [reduceAnim, setReduceAnim] = useState(false);

  const [_hideTaskbar, _setHideTaskbar] = useLocalStorage("hideTaskbar", false);
  const [hideTaskbar, setHideTaskbar] = useState(false);

  useEffect(() => setReduceAnim(_reduceAnim as boolean), [_reduceAnim]);
  useEffect(() => setHideTaskbar(_hideTaskbar as boolean), [_hideTaskbar]);

  const context: GlobalContextType = {
    reduceAnim: {
      val: reduceAnim,
      set: _setReduceAnim as Dispatch<SetStateAction<boolean>>,
    },
    hideTaskbar: {
      val: hideTaskbar,
      set: _setHideTaskbar as Dispatch<SetStateAction<boolean>>,
    },
  };

  return <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>;
};
