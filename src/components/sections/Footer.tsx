import React from 'react';
import { Github, Twitter, Disc as Discord, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-nightshade-950 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-emerald-500">Emerald</span> Roleplay
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              The premier San Andreas Multiplayer roleplay experience, offering 
              immersive gameplay since 2019. Join our community and create your story.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Discord size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Home</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-emerald-500 transition-colors">Features</a></li>
              <li><a href="#community" className="text-gray-400 hover:text-emerald-500 transition-colors">Community</a></li>
              <li><a href="#news" className="text-gray-400 hover:text-emerald-500 transition-colors">News</a></li>
              <li><a href="#join" className="text-gray-400 hover:text-emerald-500 transition-colors">Join Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Server Rules</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Getting Started</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Donate</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-nightshade-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {year} Emerald Roleplay. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;