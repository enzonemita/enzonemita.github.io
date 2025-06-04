import React from 'react';
import { motion } from 'framer-motion';
import Profile from './components/Profile';
import Quotes from './components/Quotes';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './hooks/useTheme';
import { profileData, favoritesData } from './data/profileData';

function App() {
  return (
    <ThemeProvider>
      <motion.div 
        className="min-h-screen relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 transition-all duration-700 ease-in-out bg-white dark:bg-black" />
        <div id="background-patterns" className="absolute inset-0 transition-opacity duration-700" />
        
        <div className="relative z-10">
          <ThemeToggle />
          
          <main>
            <section id="profile">
              <Profile data={profileData} />
            </section>
            
            <section id="quotes">
              <Quotes quotes={favoritesData} />
            </section>
          </main>
          
          <Footer />
        </div>
      </motion.div>
    </ThemeProvider>
  );
}

export default App