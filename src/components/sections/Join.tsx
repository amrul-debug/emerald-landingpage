import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, AlertCircle } from 'lucide-react';
import Button from '../ui/Button';
import { staggerContainer, fadeInUp } from '../../utils/animations';

const Join: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    discord: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.discord.trim()) {
      newErrors.discord = 'Discord tag is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // In a real implementation, you would call the API
      // await formAPI.submitJoinRequest(formData);

      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 1500));

      setIsSuccess(true);
      setFormData({
        username: '',
        email: '',
        discord: '',
        message: ''
      });

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error (show error message, etc.)
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="join" className="py-20 bg-feature-pattern">
      <motion.div
        className="container-custom"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Join <span className="gradient-text">Our Community</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Ready to start your journey in San Andreas? Fill out the form below and we'll help you get started.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
          <div className="glass-card p-8">
            {isSuccess ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Application Submitted!</h3>
                <p className="text-gray-300">
                  Thank you for your interest in joining Emerald Roleplay. We'll review your application
                  and get back to you soon via email or Discord.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="username" className="block text-white mb-2">Username</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-md bg-nightshade-800 border ${
                        errors.username ? 'border-red-500' : 'border-nightshade-600'
                      } text-white focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                      placeholder="Your in-game username"
                    />
                    {errors.username && (
                      <p className="mt-1 text-red-500 flex items-center text-sm">
                        <AlertCircle size={12} className="mr-1" />
                        {errors.username}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-md bg-nightshade-800 border ${
                        errors.email ? 'border-red-500' : 'border-nightshade-600'
                      } text-white focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                      placeholder="Your email address"
                    />
                    {errors.email && (
                      <p className="mt-1 text-red-500 flex items-center text-sm">
                        <AlertCircle size={12} className="mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="discord" className="block text-white mb-2">Discord Tag</label>
                  <input
                    type="text"
                    id="discord"
                    name="discord"
                    value={formData.discord}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-md bg-nightshade-800 border ${
                      errors.discord ? 'border-red-500' : 'border-nightshade-600'
                    } text-white focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                    placeholder="Your Discord username (e.g., username#1234)"
                  />
                  {errors.discord && (
                    <p className="mt-1 text-red-500 flex items-center text-sm">
                      <AlertCircle size={12} className="mr-1" />
                      {errors.discord}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-white mb-2">Why do you want to join?</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-md bg-nightshade-800 border ${
                      errors.message ? 'border-red-500' : 'border-nightshade-600'
                    } text-white focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                    placeholder="Tell us a bit about yourself and your roleplay experience..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-red-500 flex items-center text-sm">
                      <AlertCircle size={12} className="mr-1" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  isLoading={isSubmitting}
                  rightIcon={!isSubmitting && <Send size={16} />}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </Button>
              </form>
            )}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-300">
              Already a member? Connect to our server directly using:
            </p>
            <div className="mt-4 p-3 bg-nightshade-900 rounded-md inline-block">
              <code className="text-emerald-400">samp://play.emeraldrp.com:7777</code>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Join;