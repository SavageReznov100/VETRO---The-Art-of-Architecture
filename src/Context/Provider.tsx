import { createContext, useContext, useEffect, useState } from "react";

interface ContextType {
  theme: string;
  loading: boolean;
  isHidden: boolean;
  isMenu: boolean;
  setIsMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const Context = createContext<ContextType>({
  theme: "dark",
  loading: true,
  isHidden: true,
  isMenu: true,
  setIsMenu: () => {},
  setIsHidden: () => {},
  setLoading: () => {},
  setTheme: () => {},
});

export const Provider = ({ children }: any) => {
  const [theme, setTheme] = useState("dark");
  const [loading, setLoading] = useState(true);
  const [isHidden, setIsHidden] = useState(true);
  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    console.log("Theme updated:", theme);
  }, [theme]);

  return (
    <Context.Provider
      value={{
        theme,
        setTheme,
        loading,
        setLoading,
        isHidden,
        setIsHidden,
        isMenu,
        setIsMenu,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useProvider = () => {
  return useContext(Context);
};
