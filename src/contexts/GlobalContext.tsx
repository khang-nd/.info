import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { useLocalStorage } from "react-use";

type Context<T = boolean> = {
  val: T;
  set: Dispatch<SetStateAction<T>>;
};

type GlobalContextType = {
};

type GlobalProviderProps = {
  children: ReactNode;
};

export const GlobalContext = createContext<GlobalContextType>({
});

export const GlobalProvider = ({ children }: GlobalProviderProps): JSX.Element => {

  const context: GlobalContextType = {
  };

  return <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>;
};
