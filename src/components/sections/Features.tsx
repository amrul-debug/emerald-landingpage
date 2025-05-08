import React from 'react';
import { motion } from 'framer-motion';
import { Car, Home, Briefcase, User, ShoppingBag, Shield, Award, BadgeCheck } from 'lucide-react';
import FeatureCard from '../ui/FeatureCard';
import { staggerContainer, fadeInUp } from '../../utils/animations';

const Features: React.FC = () => {
  const features = [
    {
      icon: <User size={24} />,
      title: "In-depth Character Development",
      description: "Create detailed character backgrounds, appearances, and skills to bring your roleplay to life."
    },
    {
      icon: <Car size={24} />,
      title: "Custom Vehicles",
      description: "Over 500 custom vehicles with unique handling and tuning capabilities."
    },
    {
      icon: <Home size={24} />,
      title: "Property System",
      description: "Buy, sell, and customize properties across San Andreas from apartments to mansions."
    },
    {
      icon: <Briefcase size={24} />,
      title: "Jobs & Economy",
      description: "Engage in various jobs and businesses with our realistic economy system."
    },
    {
      icon: <ShoppingBag size={24} />,
      title: "Custom Clothes & Items",
      description: "Thousands of clothing options and items to personalize your character."
    },
    {
      icon: <Shield size={24} />,
      title: "Faction System",
      description: "Join law enforcement, medical services, or criminal organizations with unique missions."
    },
    {
      icon: <Award size={24} />,
      title: "Skills & Progression",
      description: "Develop character skills that impact gameplay through consistent roleplay."
    },
    {
      icon: <BadgeCheck size={24} />,
      title: "Active Staff Team",
      description: "Dedicated moderators and admins ensuring a fair and enjoyable experience."
    }
  ];

  return (
    <section id="features" className="py-20 bg-feature-pattern">
      <motion.div 
        className="container-custom"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Roleplay <span className="gradient-text">Features</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Emerald Roleplay offers a comprehensive set of features designed to provide the most immersive roleplaying experience in San Andreas.
          </p>
        </motion.div>

        <motion.div 
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Features;