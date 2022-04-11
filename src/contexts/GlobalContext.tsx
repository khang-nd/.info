import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
import { useColorMode } from "theme-ui";
import { ThemeMode } from "../themes";

type Context<T = boolean> = {
  val: T;
  set: Dispatch<SetStateAction<T>>;
};

type GlobalContextType = {
  theme: Context<ThemeMode>;
  reduceMotion: Context;
  hideTaskbar: Context;
};

type GlobalProviderProps = {
  children: ReactNode;
};

export const GlobalContext = createContext<GlobalContextType>({
  theme: { val: ThemeMode.Flat, set: () => {} },
  reduceMotion: { val: false, set: () => {} },
  hideTaskbar: { val: false, set: () => {} },
});

export const GlobalProvider = ({ children }: GlobalProviderProps): JSX.Element => {
  const [_theme, _setTheme] = useColorMode();
  const [theme, setTheme] = useState(ThemeMode.Flat);

  // need these `useState + useEffect` intermediaries to resolve
  // the problem when using localStorage with Next's Static Generation
  const [_reduceAnim, _setReduceAnim] = useLocalStorage("reduceMotion", false);
  const [reduceMotion, setReduceAnim] = useState(false);

  const [_hideTaskbar, _setHideTaskbar] = useLocalStorage("hideTaskbar", false);
  const [hideTaskbar, setHideTaskbar] = useState(false);

  useEffect(() => {
    // workaround for Theme UI's color mode being default to user preference,
    // which is light/dark, altering that to match site's default
    setTheme(_theme === "light" || _theme === "dark" ? ThemeMode.Flat : (_theme as ThemeMode));
  }, [_theme]);
  useEffect(() => setReduceAnim(_reduceAnim as boolean), [_reduceAnim]);
  useEffect(() => setHideTaskbar(_hideTaskbar as boolean), [_hideTaskbar]);

  const context: GlobalContextType = {
    theme: {
      val: theme,
      set: _setTheme as Dispatch<SetStateAction<ThemeMode>>,
    },
    reduceMotion: {
      val: reduceMotion,
      set: _setReduceAnim as Dispatch<SetStateAction<boolean>>,
    },
    hideTaskbar: {
      val: hideTaskbar,
      set: _setHideTaskbar as Dispatch<SetStateAction<boolean>>,
    },
  };

  return <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>;
};
