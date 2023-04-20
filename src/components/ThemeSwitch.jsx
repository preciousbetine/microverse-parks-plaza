import React, { useEffect, useState } from 'react';
import '../assets/styles/theme.module.scss';

function ThemeSwitch() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'blue');

  const changeTheme = () => {
    setTheme(theme === 'blue' ? 'pink' : 'blue');
  };

  useEffect(() => {
    const rootElem = document.querySelector(':root');
    rootElem.style.setProperty('--primary-1', theme === 'pink' ? '#4369b2' : '#f05291');
    rootElem.style.setProperty('--primary-2', theme === 'pink' ? '' : '');
    rootElem.style.setProperty('--primary-3', theme === 'pink' ? '#5384e0' : '#cf4487');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button type="button" onClick={changeTheme}>
      <i className="fa fa-moon" />
    </button>
  );
}

export default ThemeSwitch;
