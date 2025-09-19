import React from 'react';
import watermark from '../../assets/structure.jpg';
import { footer } from '../../data';

const Footer = () => {
  return (
    <div className="relative h-auto overflow-hidden font-poppins">
      <div className="absolute w-full h-full opacity-10">
        <img
          src={watermark}
          alt="Watermark"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 px-6 py-16 flex flex-col lg:flex-row lg:items-start lg:gap-10 lg:px-20">
        <div className="w-full lg:w-1/4 space-y-4 text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="text-4xl font-bold">
            Con
            <span className="bg-gradient-to-b from-primary-accent via-pink-800 to-purple-900 bg-clip-text text-transparent">
              Fix
            </span>
          </h1>
          <p className="text-sm leading-relaxed text-gray-800">
            Our mission is to build lasting spaces that inspire and uplift,
            combining quality craftsmanship with innovative solutions to meet
            the evolving needs of our clients and communities.
          </p>
        </div>

        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center sm:text-left">
            {footer.map((section, index) => (
              <div key={index} className="flex flex-col gap-4">
                <h1 className="text-lg font-semibold">{section.title}</h1>
                <div className="flex flex-col gap-2 text-gray-700">
                  {section.routes.map((link, i) => (
                    <div
                      key={i}
                      className="hover:text-primary-accent cursor-pointer transition-colors"
                    >
                      {link.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full py-3 relative z-20 bg-white/70 backdrop-blur-sm">
        <div className="text-sm text-center text-gray-700">
          © {new Date().getFullYear()} Confix - All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
