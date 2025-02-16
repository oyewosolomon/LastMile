import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Plane, FileCheck, 
  Menu, X, ChevronDown, 
  Facebook, Twitter, 
  Linkedin, Instagram,
  Mail, Phone, MapPin,
  Cpu
} from 'lucide-react';
const stats = [
  { number: '50,000+', label: 'Deliveries Monthly' },
  { number: '99.7%', label: 'Success Rate' },
  { number: '20', label: 'Cities' },
];

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse -top-10 -left-10" />
        <div className="absolute w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl opacity-20 animate-pulse top-1/2 -right-10" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="text-white space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold leading-tight"
            >
              Revolutionizing Urban Deliveries with Autonomous Robots and Drones
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-blue-100"
            >
              Fast, Reliable, and Sustainable Last-Mile Solutions for Modern Cities
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <button className="px-8 py-3 bg-white text-blue-900 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-100 transition-colors">
                Explore Our Services <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold flex items-center gap-2 hover:bg-white/10 transition-colors">
                Partner With Us
              </button>
            </motion.div>
          </div>

          {/* Right Column - Interactive Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] bg-blue-800/30 rounded-2xl p-8 backdrop-blur-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-8">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="p-6 bg-white/10 rounded-xl backdrop-blur-lg"
                  >
                    <Plane className="w-12 h-12 text-white mb-4" />
                    <h3 className="text-white font-semibold">Drone Delivery</h3>
                    <p className="text-blue-100 text-sm mt-2">Under 30 minutes</p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="p-6 bg-white/10 rounded-xl backdrop-blur-lg"
                  >
                    <Cpu className="w-12 h-12 text-white mb-4" />
                    <h3 className="text-white font-semibold">Robot Delivery</h3>
                    <p className="text-blue-100 text-sm mt-2">Smart navigation</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white">
              <div className="text-3xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;