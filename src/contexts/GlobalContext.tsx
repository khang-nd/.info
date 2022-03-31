import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type Context<T = boolean> = {
  val: T;
  set: Dispatch<SetStateAction<T>>;
};

type GlobalContextType = {
  enableAnimation: Context;
};

type GlobalProviderProps = {
  children: ReactNode;
};

export const GlobalContext = createContext<GlobalContextType>({
  enableAnimation: { val: true, set: () => {} },
});

export const GlobalProvider = ({ children }: GlobalProviderProps): JSX.Element => {
  const [enableAnimation, setEnableAnimation] = useState(true);

  const context: GlobalContextType = {
    enableAnimation: {
      val: enableAnimation,
      set: setEnableAnimation,
    },
  };

  return <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>;
};
