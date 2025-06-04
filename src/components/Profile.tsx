import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Instagram, Github } from 'lucide-react';
import { ProfileData } from '../types';

interface ProfileProps {
  data: ProfileData;
}

const Profile: React.FC<ProfileProps> = ({ data }) => {
  const socialIcons = {
    twitter: <Twitter className="h-5 w-5" />,
    instagram: <Instagram className="h-5 w-5" />,
    github: <Github className="h-5 w-5" />,
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-primary-950 dark:bg-primary-900 text-primary-50">
        <motion.div 
          className="h-full flex items-center justify-center p-8 md:p-12 lg:p-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-md">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{data.name}</h1>
              <p className="text-xl md:text-2xl text-primary-300 mb-8">{data.title}</p>
              <p className="text-primary-200 leading-relaxed mb-8">{data.bio}</p>
              
              <div className="flex space-x-4">
                {data.socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-300 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {socialIcons[link.type as keyof typeof socialIcons]}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <div className="w-full md:w-1/2 bg-primary-100 dark:bg-primary-800">
        <motion.div 
          className="h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="h-full flex items-center justify-center overflow-hidden">
            <motion.div 
              className="relative w-full h-full"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <img 
                src={data.imageUrl} 
                alt={data.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;