import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  content: string;
  author: string;
  role?: string;
  avatarUrl?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  content, 
  author, 
  role, 
  avatarUrl,
  className 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        'glass-card p-6',
        className
      )}
    >
      <Quote className="h-8 w-8 text-emerald-500 mb-4" />
      <p className="text-white mb-6">{content}</p>
      <div className="flex items-center">
        {avatarUrl ? (
          <img 
            src={avatarUrl} 
            alt={author} 
            className="h-10 w-10 rounded-full mr-3 border-2 border-emerald-500"
          />
        ) : (
          <div className="h-10 w-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold mr-3">
            {author.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-medium text-white">{author}</p>
          {role && <p className="text-sm text-gray-400">{role}</p>}
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;