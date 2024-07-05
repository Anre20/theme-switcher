import React from 'react';
import { useTheme } from './themeContext';

const Footer = () => {
  const { theme, themes } = useTheme();

  return (
    <footer style={{ background: themes[theme].background, color: themes[theme].color }}>
      <p>© 2024 Theme Switcher. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
