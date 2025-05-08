import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, Car, Home } from 'lucide-react';
import StatCard from '../ui/StatCard';
import { staggerContainer, fadeInUp } from '../../utils/animations';

const Stats: React.FC = () => {
  const stats = [
    {
      icon: <Users size={24} />,
      title: "Players",
      value: "5,000+",
      description: "Registered players"
    },
    {
      icon: <Calendar size={24} />,
      title: "Online Since",
      value: "2019",
      description: "Years of experience"
    },
    {
      icon: <Car size={24} />,
      title: "Custom Vehicles",
      value: "500+",
      description: "Unique vehicles"
    },
    {
      icon: <Home size={24} />,
      title: "Properties",
      value: "1,200+",
      description: "Player-owned"
    }
  ];

  return (
    <section className="py-16 bg-nightshade-950">
      <motion.div 
        className="container-custom"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={fadeInUp}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                title={stat.title}
                value={stat.value}
                description={stat.description}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Stats;