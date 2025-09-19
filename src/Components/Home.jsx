import React from 'react';
import structure from '../assets/structure.jpg';
import watermark from '../assets/watercolor.png';
import { crane } from '../assets/index';

const Home = () => {
  return (
    <section className="relative font-poppins overflow-hidden">

      <div className="absolute inset-0 opacity-10">
        <img
          src={structure}
          alt="structure background"
          className="w-full h-full object-cover"
        />
      </div>

    
      <div className="absolute top-10 left-10 bg-primary w-36 h-36 rounded-full blur-3xl opacity-40" />

      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 sm:px-10 lg:px-20 py-16 items-center">
        <div className='lg:-translate-y-5'> 
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-t from-orange-400 via-red-800 to-black bg-clip-text text-transparent">
            Building Excellence
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 bg-gradient-to-t from-yellow-300 to-orange-500 bg-clip-text text-transparent">
            Creating Tomorrow
          </h2>

          <p className="mt-6 text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
            We are dedicated to delivering top-quality construction services with
            a focus on innovation, sustainability, and client satisfaction. With
            over 25 years of experience, we bring expertise and precision to every
            project, shaping the future through excellence in design and
            craftsmanship.
          </p>

          <div className="relative mt-10">
            <div className="absolute inset-0 rotate-2 opacity-30">
              <img src={watermark} alt="watermark" className="w-full h-full object-cover" />
            </div>
            <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
              <div>
                <p className="text-4xl sm:text-5xl font-extrabold text-primary">700+</p>
                <p className="font-medium">Projects Completed</p>
              </div>
              <div>
                <p className="text-4xl sm:text-5xl font-extrabold text-primary">98%</p>
                <p className="font-medium">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-4xl sm:text-5xl font-extrabold text-primary">25+</p>
                <p className="font-medium">Years of Operation</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 border border-primary rounded-md text-primary font-semibold hover:bg-primary hover:text-white transition-transform transform hover:-translate-y-1 duration-200">
              View Projects
            </button>
            <button className="px-6 py-3 flex items-center gap-3 rounded-md bg-primary text-white font-semibold hover:bg-primary-accent transition-transform transform hover:-translate-y-1 duration-200">
              Get a Quote
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="10 15 15 20 20 15" />
                <path d="M4 4h7a4 4 0 0 1 4 4v12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end lg:-translate-y-10">
          <img
            src={crane}
            alt="crane"
            className="w-3/4 sm:w-3/4 lg:w-full lg:scale-110"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
