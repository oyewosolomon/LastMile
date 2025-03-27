import React from 'react';
import { motion } from 'framer-motion';
import { 
  Plane, Trophy, Users, Globe, 
  Target, ArrowRight, CheckCircle, 
  LineChart, ShieldCheck 
} from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { number: '50,000+', label: 'Monthly Deliveries', icon: <LineChart className="w-6 h-6" /> },
    { number: '99.7%', label: 'Success Rate', icon: <Trophy className="w-6 h-6" /> },
    { number: '20+', label: 'Cities Served', icon: <Globe className="w-6 h-6" /> },
    { number: '100+', label: 'Team Members', icon: <Users className="w-6 h-6" /> }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Pushing boundaries in autonomous delivery technology',
      icon: <Target className="w-8 h-8" />
    },
    {
      title: 'Reliability',
      description: 'Consistent, dependable service you can count on',
      icon: <ShieldCheck className="w-8 h-8" />
    },
    {
      title: 'Sustainability',
      description: 'Committed to eco-friendly delivery solutions',
      icon: <Globe className="w-8 h-8" />
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="py-20 bg-white overflow-hidden" id='about'>
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Redefining Last-Mile Delivery
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            At LastMile Technologies, we're pioneering the future of urban logistics through 
            innovative autonomous delivery solutions that make cities smarter and more sustainable.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={item}
              transition={{ type: 'spring', stiffness: 100 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 rounded-2xl p-6 text-center"
            >
              <motion.div 
                className="text-blue-600 flex justify-center mb-4"
                animate={floatingAnimation}
              >
                {stat.icon}
              </motion.div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Statement */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.01 }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-white mb-20 relative overflow-hidden"
        >
          {/* Animated background elements */}
          <motion.div 
            className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-500 opacity-20"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.1, 0.2]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-blue-400 opacity-20"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.2, 0.05, 0.2]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.h2 
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Our Mission
            </motion.h2>
            <motion.p 
              className="text-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              To transform urban delivery through sustainable, autonomous solutions that 
              reduce traffic congestion, minimize carbon emissions, and create more 
              livable cities for everyone.
            </motion.p>
          </div>
        </motion.div>

        {/* Company Values */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-900 text-center mb-12"
          >
            Our Core Values
          </motion.h2>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={item}
                transition={{ type: 'spring', stiffness: 100 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <motion.div 
                  className="text-blue-600 mb-6"
                  animate={pulseAnimation}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-50 rounded-3xl p-12 relative overflow-hidden"
        >
          {/* Animated dots background */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-full opacity-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ duration: 1 }}
          >
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-600 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, (Math.random() - 0.5) * 20, 0],
                  x: [0, (Math.random() - 0.5) * 20, 0],
                }}
                transition={{
                  duration: 5 + Math.random() * 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2
                }}
              />
            ))}
          </motion.div>

          <div className="text-center mb-12 relative z-10">
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Our Journey
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              From a small startup to a leading force in autonomous delivery, 
              we're proud of our growth and excited about the future.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                What Sets Us Apart
              </h3>
              <ul className="space-y-4">
                {[
                  'Proprietary AI navigation technology',
                  'Industry-leading safety standards',
                  'Sustainable delivery solutions',
                  'Customer-centric approach'
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <motion.span 
                      animate={pulseAnimation}
                    >
                      <CheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    </motion.span>
                    <span className="text-gray-600">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Looking Ahead
              </h3>
              <p className="text-gray-600 mb-6">
                We're continuously innovating and expanding our services to meet 
                the evolving needs of urban delivery. Our commitment to excellence 
                drives us forward as we shape the future of logistics.
              </p>
              <motion.button 
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                whileHover={{ 
                  x: 5,
                  transition: { type: 'spring', stiffness: 300 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                Join Our Team <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;