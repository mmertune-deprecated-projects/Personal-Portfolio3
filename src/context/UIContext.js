import { createContext, useState } from "react";

export const UIContext = createContext(null);

export const UIProvider = ({ children }) => {
  //   const [isDarkTheme, setTheme] = useState(true);
  const [theme, setTheme] = useState("darkMode");
  const [isBurgerIcon, setBurgerIcon] = useState(true);
  const [overlayActive, setOverlayState] = useState(false);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "darkMode" ? "lightMode" : "darkMode"
    );
  };
  return (
    <UIContext.Provider
      value={{
        theme,
        setTheme,
        isBurgerIcon,
        setBurgerIcon,
        toggleTheme,
        overlayActive,
        setOverlayState,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
