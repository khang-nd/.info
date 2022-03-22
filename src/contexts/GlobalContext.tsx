import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

type BooleanContext = {
  val: boolean;
  set: Dispatch<SetStateAction<boolean>>;
};

type GlobalContextType = {
  isFirstLoad?: boolean;
  enableAnimation: BooleanContext;
};

type GlobalProviderProps = {
  children: ReactNode;
};

export const GlobalContext = createContext<GlobalContextType>({
  enableAnimation: { val: true, set: () => {} },
});

export const GlobalProvider = ({ children }: GlobalProviderProps): JSX.Element => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [enableAnimation, setEnableAnimation] = useState(true);

  const context: GlobalContextType = {
    isFirstLoad,
    enableAnimation: {
      val: enableAnimation,
      set: setEnableAnimation,
    },
  };

  useEffect(() => setIsFirstLoad(false), []);

  return <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>;
};
