import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import ServerStatus from '../ui/ServerStatus';
import { cn } from '../../utils/cn';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#features' },
    { name: 'Community', href: '#community' },
    { name: 'News', href: '#news' },
    { name: 'Join Us', href: '#join' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-nightshade-950/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="container-custom flex justify-between items-center h-16 md:h-20">
        <div className="flex items-center">
          <a href="#" className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="Emerald Roleplay Logo"
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold text-white hidden sm:inline">
              <span className="text-emerald-500">Emerald</span> Roleplay
            </span>
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link text-white hover:text-emerald-400"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <ServerStatus className="text-white" />
          <Button
            variant="primary"
            className="bg-emerald-500 hover:bg-emerald-600"
            onClick={() => window.open('samp://play.emeraldrp.com:7777', '_blank')}
          >
            Connect Now
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-nightshade-950"
          >
            <div className="container-custom py-4">
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-white hover:text-emerald-400 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
              <div className="mt-4 flex flex-col space-y-3">
                <ServerStatus />
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => window.open('samp://play.emeraldrp.com:7777', '_blank')}
                >
                  Connect Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;