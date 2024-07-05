import React, { createContext, useState, useContext } from 'react';

const themes = {
  light: {
    background: '#ffffff',
    color: '#000000',
  },
  dark: {
    background: '#333333',
    color: '#ffffff',
  },
};

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, themes, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
