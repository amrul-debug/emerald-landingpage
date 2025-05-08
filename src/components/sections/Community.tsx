import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from '../ui/TestimonialCard';
import Button from '../ui/Button';
import { staggerContainer, fadeInUp } from '../../utils/animations';

const Community: React.FC = () => {
  const testimonials = [
    {
      content: "Emerald Roleplay brought me back to SA-MP after years away. The community is incredibly welcoming and the roleplay quality is unmatched!",
      author: "Alex Johnson",
      role: "2 years member"
    },
    {
      content: "The custom scripts and features are incredible. I've never experienced such an immersive roleplay environment in SA-MP before.",
      author: "Sarah Williams",
      role: "1 year member"
    },
    {
      content: "As someone who runs a business in-game, the economy system is perfectly balanced. The staff is always helpful and responsive!",
      author: "Michael Rodriguez",
      role: "3 years member"
    }
  ];

  const screenshots = [
    "https://images.pexels.com/photos/4009401/pexels-photo-4009401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2653369/pexels-photo-2653369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ];

  return (
    <section id="community" className="py-20 bg-nightshade-950">
      <motion.div 
        className="container-custom"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our <span className="gradient-text">Community</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Join thousands of players who have found their home in Emerald Roleplay. 
            Our community is what makes us special.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
            />
          ))}
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-12">
          <h3 className="text-2xl font-bold text-white text-center mb-6">
            Server Screenshots
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {screenshots.map((screenshot, index) => (
              <motion.div 
                key={index}
                className="relative overflow-hidden rounded-lg aspect-video"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={screenshot} 
                  alt={`Emerald Roleplay Screenshot ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Join Our Discord Community
          </h3>
          <p className="text-gray-300 mb-6">
            Connect with other players, stay updated with server news, and get support.
          </p>
          <Button 
            variant="primary" 
            size="lg"
            className="bg-[#5865F2] hover:bg-[#4752c4]"
          >
            Join Discord
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Community;