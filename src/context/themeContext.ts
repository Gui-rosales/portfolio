import { createContext, useState } from 'react';

interface IThemeContext {
  theme: string;
  setTheme: () => void;
}

const initialValue = {
  theme: 'light',
  setTheme: () => {},
};

export const ThemeContext = createContext(initialValue);

function ThemeContextProvider() {
  const [theme, setTheme] = useState();
}
