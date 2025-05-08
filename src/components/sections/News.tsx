import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { staggerContainer, fadeInUp } from '../../utils/animations';

const News: React.FC = () => {
  const newsItems = [
    {
      title: "Major Map Update Released",
      date: "June 15, 2025",
      summary: "We've added a new district to the map with unique buildings and locations for roleplay.",
      image: "https://images.pexels.com/photos/1716155/pexels-photo-1716155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Vehicle System Overhaul",
      date: "May 28, 2025",
      summary: "Completely revamped vehicle mechanics including damage system and maintenance.",
      image: "https://images.pexels.com/photos/3151030/pexels-photo-3151030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Summer Event: Beach Party",
      date: "Coming July 1, 2025",
      summary: "Get ready for our summer special event with unique rewards and activities.",
      image: "https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <section id="news" className="py-20 bg-nightshade-900">
      <motion.div 
        className="container-custom"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Latest <span className="gradient-text">News & Events</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest happenings, updates, and events in Emerald Roleplay.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="glass-card overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-emerald-400 mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.summary}</p>
                <Button 
                  variant="outline" 
                  className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 w-full"
                  rightIcon={<ArrowRight size={16} />}
                >
                  Read More
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white/10"
          >
            View All News
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default News;