import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  description?: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
  icon, 
  title, 
  value, 
  description, 
  className 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        'glass-card p-6 flex flex-col items-center text-center',
        className
      )}
    >
      <div className="p-3 rounded-full bg-emerald-600/20 text-emerald-500 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
      <p className="text-3xl font-bold gradient-text mb-2">{value}</p>
      {description && (
        <p className="text-gray-300 text-sm">{description}</p>
      )}
    </motion.div>
  );
};

export default StatCard;