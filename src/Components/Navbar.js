import React from 'react';
import { useTheme } from './themeContext';

const Navbar = () => {
  const { theme, themes, toggleTheme } = useTheme();

  return (
    <nav style={{ background: themes[theme].background, color: themes[theme].color }}>
      <h1>Theme Switcher</h1>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </nav>
  );
};

export default Navbar;
