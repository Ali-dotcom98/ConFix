import React from 'react';
import { about } from '../assets';
import { keypoints, whyChooseUs } from '../data';

export const AboutUs = () => {
  return (
    <>
      <section id="about" className="relative mt-[15vh] bg-bg-secondary font-poppins py-16">
        <div className="absolute inset-0 bg-primary rounded-tl-[110%] z-0"></div>

        <div className="relative z-10 lg:-translate-y-8 flex flex-col lg:flex-row w-full px-6 lg:px-20 gap-10">
          <div className="w-[70%] lg:w-1/3 bg-primary p-2 rounded-2xl shadow-lg">
            <img
              src={about}
              alt="About Confix - Expert craftsmanship and innovative solutions"
              className="w-full rounded-2xl object-cover"
            />
          </div>

          <div className="w-full lg:w-2/3 space-y-5">
            <h1 className="text-4xl font-bold text-black sm:bg-gradient-to-t from-yellow-300 to-orange-500 sm:bg-clip-text sm:text-transparent">About Us</h1>
            <p className="text-2xl font-semibold text-black sm:text-white lg:translate-y-5">
              Building Your Vision, Crafting Your Future
            </p>
            <p className="text-black sm:text-white tracking-wide leading-relaxed">
              At Confix, we transform your ideas into reality through expert craftsmanship and
              innovative solutions. From concept to completion, we’re committed to creating spaces
              that inspire and stand the test of time. Let’s build a future you can be proud of.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {keypoints.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center gap-4 bg-white p-3 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div className="text-primary text-2xl">{data.icon}</div>
                  <div className="text-primary font-medium text-lg">{data.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-20 py-14 border-b border-zinc-200 shadow-xl">
          {whyChooseUs.map((data, index) => (
            <div
              key={index}
              className="flex shadow-md rounded-md px-3 py-2 flex-col items-start hover:scale-105 transition-transform"
            >
              <div className="text-3xl text-primary mb-3">{data.icon}</div>
              <h3 className="text-lg font-semibold text-text-color">{data.title}</h3>
              <p className="text-text-muted">{data.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
