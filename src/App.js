import './App.css';
import { createContext, useEffect, useState } from 'react';
import Header from './components/Header/Header';

export const ThemeContext = createContext('null');

function App() {
  const [theme, setTheme] = useState(getPreferredTheme());

  useEffect(() => {
    const handleThemeChange = () => {
      setTheme(getPreferredTheme());
    };

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleThemeChange);
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', handleThemeChange);

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleThemeChange);
      window.matchMedia('(prefers-color-scheme: light)').removeEventListener('change', handleThemeChange);
    };
  }, []);

  function getPreferredTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div className='page-width'>
          <Header />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
