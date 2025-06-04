import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-950 dark:bg-primary-900 text-primary-200 py-8">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-sm">
          © {currentYear} | Designed with passion
        </p>
        <p className="text-xs mt-2 text-primary-400">
          Monochrome Profile Template
        </p>
      </div>
    </footer>
  );
};

export default Footer;