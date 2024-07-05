import React from 'react';
import { useTheme } from './themeContext';

const Main = () => {
  const { theme, themes } = useTheme();

  return (
    <main style={{ background: themes[theme].background, color: themes[theme].color }}>
      <p>This is the main content area.</p>
    </main>
  );
};

export default Main;
