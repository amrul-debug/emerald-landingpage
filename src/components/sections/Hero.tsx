import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Map, Shield } from 'lucide-react';
import Button from '../ui/Button';
import { staggerContainer, fadeInUp } from '../../utils/animations';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-20 flex flex-col justify-center overflow-hidden bg-hero-pattern">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-nightshade-950/80 via-nightshade-950/70 to-nightshade-950/90"></div>
      </div>
      
      <motion.div 
        className="container-custom relative z-10 py-12 md:py-20"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeInUp} className="max-w-3xl mx-auto text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Welcome to <span className="gradient-text">Emerald Roleplay</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Experience San Andreas like never before. Immerse yourself in the most detailed and 
            authentic roleplay experience with a vibrant community.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Button 
              variant="primary" 
              size="lg"
              rightIcon={<ArrowRight className="ml-1" />}
            >
              Join Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
        
        <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="glass-card p-6 text-center">
            <Users className="h-8 w-8 mx-auto mb-4 text-emerald-500" />
            <h3 className="text-xl font-semibold text-white mb-2">Active Community</h3>
            <p className="text-gray-300">
              Join over 5,000 active players in our thriving community
            </p>
          </div>
          
          <div className="glass-card p-6 text-center">
            <Map className="h-8 w-8 mx-auto mb-4 text-emerald-500" />
            <h3 className="text-xl font-semibold text-white mb-2">Custom Map</h3>
            <p className="text-gray-300">
              Explore our unique, hand-crafted map extensions and locations
            </p>
          </div>
          
          <div className="glass-card p-6 text-center">
            <Shield className="h-8 w-8 mx-auto mb-4 text-emerald-500" />
            <h3 className="text-xl font-semibold text-white mb-2">Anti-Cheat</h3>
            <p className="text-gray-300">
              Play securely with our advanced anti-cheat protection system
            </p>
          </div>
        </motion.div>
      </motion.div>
      
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-8">
        <motion.a 
          href="#features"
          className="text-white"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            delay: 1,
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
        >
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;