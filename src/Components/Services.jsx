import React from 'react';
import { sketch } from '../assets';
import { services } from '../data';

const Services = () => {
  return (
    <section id="services" className="relative px-6 lg:px-20 py-16 font-poppins">
      <div className="absolute inset-0 opacity-10 z-0">
        <img src={sketch} alt="Decorative background sketch" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center gap-10 mb-20">
        <div className="w-full lg:w-3/5 space-y-6 text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-bold text-primary">
            Plan Your Dream Project with Us
          </h1>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Ready to bring your vision to life? Our expert team offers personalized consultations
            to guide you through every step—from design to budget and beyond. Let’s lay the
            groundwork for your next big project. Schedule your consultation today!
          </p>
          <button className="text-lg tracking-wide border py-3 px-6 rounded-md flex items-center gap-3 text-white bg-primary hover:bg-primary-accent hover:-translate-y-1 transition-all duration-200 mx-auto lg:mx-0">
            Book Consultation
          </button>
        </div>

        <div className="w-full lg:w-2/5 flex justify-center">
          <img
            src={sketch}
            alt="Team planning a project"
            className=" w-3/4 lg:w-full"
          />
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {services.map((data, index) => (
          <div
            key={index}
            className="bg-bg-secondary  px-6 py-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-200"
          >
            <div className="flex items-center gap-5 mb-4">
              <div className="text-3xl border border-primary p-4 rounded-2xl text-primary">
                {data.icon}
              </div>
              <h2 className="font-semibold text-lg">{data.title}</h2>
            </div>

            <p className="text-zinc-600 mb-6">{data.description}</p>

            <button className="border border-primary px-4 py-3 rounded-md text-primary font-semibold hover:text-white hover:bg-primary hover:shadow-md transition-all duration-150">
              Reach Out
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
