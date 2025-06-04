import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full bg-primary-100 dark:bg-primary-800 transition-colors duration-300 z-50 hover:bg-primary-200 dark:hover:bg-primary-700"
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-primary-950 dark:text-primary-50" />
      ) : (
        <Moon className="h-5 w-5 text-primary-950 dark:text-primary-50" />
      )}
    </button>
  );
};

export default ThemeToggle;