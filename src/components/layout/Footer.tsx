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
    Resources: ['Documentation', 'Support', 'Partner Portal'],
    Legal: ['Privacy Policy', 'Terms of Service']
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
            <svg 
              width="50px" 
              height="50px" 
              viewBox="0 -37 256 256" 
              xmlns="http://www.w3.org/2000/svg" 
              style={{ overflow: 'visible' }}  // Prevents clipping during animation
            >
              <style>{`
                #paper-airplane {
                  animation: float 3s ease-in-out infinite;
                }
                #wing {
                  animation: tilt 2.5s ease-in-out infinite;
                }
                @keyframes float {
                  0%, 100% { transform: translateY(0) rotate(0deg); }
                  50% { transform: translateY(-10px) rotate(2deg); }
                }
                @keyframes tilt {
                  0%, 100% { transform: rotate(0deg); }
                  50% { transform: rotate(-5deg); }
                }
              `}</style>

              <g id="SVGRepo_iconCarrier">
                <g id="paper-airplane">
                  <path 
                    id="wing"
                    d="M216.358 174.771C255.136 205.772 279.98 113.202 218.194 96.135C166.346 81.769 114.174 106.397 61.894 163.862C61.894 163.862 158.461 128.54 216.358 174.771Z" 
                    fill="#e4e6e7"
                  />
                  <path 
                    d="M62.758 163.105C99.916 124.543 161.701 81.553 219.274 97.431C232.668 101.212 242.174 108.989 248.331 118.278L193.89 8.425C186.113-3.997 166.238-1.404 155.004 8.101L11.126 128.648C-1.944 139.882-2.7 159.865 9.397 171.963C20.091 182.657 37.05 183.628 48.824 174.123L62.758 163.105Z" 
                    fill="#e4e6e7"
                  />
                </g>
              </g>
            </svg>

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