import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, ArrowRight,
  Plane,
} from 'lucide-react';

// Navigation Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      title: 'Services',
      href: '#services',
      dropdownItems: [
        { title: 'Robot Delivery', href: '#robot-delivery' },
        { title: 'Drone Delivery', href: '#drone-delivery' },
        { title: 'Custom Solutions', href: '#custom-solutions' }
      ]
    },
    {
      title: 'Industries',
      href: '#industries',
      dropdownItems: [
        { title: 'E-Commerce', href: '#e-commerce' },
        { title: 'Healthcare', href: '#healthcare' },
        { title: 'Food & Beverage', href: '#food-beverage' },
        { title: 'Retail', href: '#retail' }
      ]
    },
    { title: 'How It Works', href: '#how-it-works' },
    { title: 'About', href: '#about' },
    { title: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-2"
          >
            <Plane className={`w-8 h-8 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              LastMile
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <a 
                  href={item.href} 
                  className={`flex items-center space-x-1 ${
                    isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                  }`}
                >
                  <span>{item.title}</span>
                  {item.dropdownItems && <ChevronDown className="w-4 h-4" />}
                </a>

                {item.dropdownItems && (
                  <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden py-2">
                      {item.dropdownItems.map((dropItem, idx) => (
                        <a 
                          key={idx}
                          href={dropItem.href} 
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        >
                          {dropItem.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a 
            href="#get-started" 
            className="hidden md:flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white rounded-b-2xl shadow-lg overflow-hidden"
            >
              {navItems.map((item, index) => (
                <div key={index} className="border-b border-gray-100 last:border-none">
                  <a 
                    href={item.href} 
                    className="w-full px-4 py-3 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    {item.title}
                  </a>
                  {item.dropdownItems && (
                    <div className="bg-gray-50 px-4 py-2">
                      {item.dropdownItems.map((dropItem, idx) => (
                        <a 
                          key={idx}
                          href={dropItem.href} 
                          className="block py-2 text-gray-600 hover:text-blue-600"
                        >
                          {dropItem.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="p-4">
                <a 
                  href="#get-started" 
                  className="w-full px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;