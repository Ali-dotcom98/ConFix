import React from 'react';
import { portfolio } from '../data';

const Portfolio = () => {
  return (
    <section id="portfolio" className="min-h-screen px-6 lg:px-20  mb-20 font-poppins">
      <div className="py-10 text-center space-y-4">
        <h1 className="text-3xl lg:text-4xl font-bold text-primary">
          Crafting Spaces, Building Dreams
        </h1>
        <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          Explore our portfolio to see how we turn visions into high-quality, inspiring
          spaces—from luxury homes to commercial buildings.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-h-[80vh] overflow-y-auto pr-2">
        {portfolio.map((data, index) => (
          <div
            key={index}
            className="flex flex-col border border-zinc-200 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-200 bg-white"
          >
            <div className="relative w-full h-60 overflow-hidden">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-4 space-y-2">
              <h2 className="text-xl font-semibold text-primary">{data.title}</h2>
              <p className="text-sm text-zinc-600 line-clamp-2">{data.description}</p>

              <div className="mt-3 flex items-center justify-between text-sm">
                <span className="px-3 py-1 rounded-full text-white bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-800 text-xs font-medium">
                  {data.date}
                </span>
                <span className="font-medium text-zinc-700">{data.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
