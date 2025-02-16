import React from 'react';

import { 
  ArrowRight, ChevronDown, BarChart, Clock, 
  Fuel, Database, Building2, Users, Car,
  LineChart, Mail, Phone, MapPin, LinkedinIcon,
  TwitterIcon, FacebookIcon,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';


const Footer = () => {
  const footerLinks = {
    Company: ['About Us', 'Careers', 'Press', 'Blog'],
    Services: ['Robot Delivery', 'Drone Delivery', 'Custom Solutions', 'Pricing'],
    Resources: ['Documentation', 'Support', 'API Access', 'Partner Portal'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR']
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
    { icon: <Instagram className="w-5 h-5" />, label: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              {/* <Drone className="w-8 h-8 text-blue-400" /> */}
              <span className="text-xl font-bold">LastMile</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Revolutionizing urban deliveries with autonomous robots and drones. 
              Fast, reliable, and sustainable last-mile solutions for modern cities.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href="#"
                  className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-lg mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="mailto:info@lastmile.com" className="flex items-center text-gray-400 hover:text-white">
              <Mail className="w-5 h-5 mr-2" />
              info@lastmile.com
            </a>
            <a href="tel:+18001234567" className="flex items-center text-gray-400 hover:text-white">
              <Phone className="w-5 h-5 mr-2" />
              +1 (800) 123-4567
            </a>
            <div className="flex items-center text-gray-400">
              <MapPin className="w-5 h-5 mr-2" />
              San Francisco, CA
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} LastMile Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;