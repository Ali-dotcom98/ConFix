import React from 'react'
import { teamMembers } from '../data'
import Slider from "react-slick";

const Team = () => {
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 2,
    centerMode: true,
    swipeToSlide: true,
    centerPadding: "30px",
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 640, 
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <section
  id="team"
  className="min-h-screen bg-[#f7f7f7] px-4 sm:px-10 lg:px-24 py-20 font-poppins"
>
  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-20">
    <div className="w-full lg:w-[35%] space-y-5">
      <h1 className="text-lg font-medium">Meet Our Experts</h1>
      <h1 className="text-3xl lg:text-4xl font-bold">Building with Excellence</h1>
      <p className="text-gray-600 leading-relaxed">
        Meet the experts who bring excellence and innovation to every project.
        Get to know our dedicated team making your vision a reality.
      </p>
      <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-accent transition w-fit">
        Let’s Talk Now
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </button>
    </div>

    <div className="w-full lg:w-[60%]">
      <Slider
        {...{
          infinite: true,
          speed: 1000,
          slidesToShow: 2,
          swipeToSlide: true,
          autoplay: true,
          autoplaySpeed: 2500,
          arrows: false,
          responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
          ],
        }}
      >
        {teamMembers.map((data, index) => (
          <div
            key={index}
            className="bg-white px-6 py-10 rounded-xl border border-gray-200 shadow-sm mx-3 hover:shadow-lg transition"
          >
            <div className="flex flex-col items-center">
              <img
                src={data.image}
                alt={data.fullName}
                className="w-24 h-24 object-cover rounded-full border-2 border-gray-300"
              />
              <h2 className="mt-4 text-lg font-semibold">{data.fullName}</h2>
              <p className="text-sm text-gray-500">{data.title}</p>
            </div>
            <div className="flex justify-center gap-3 mt-4 flex-wrap">
              {['Facebook', 'Instagram', 'LinkedIn', 'YouTube'].map((platform, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm border rounded-full text-gray-600 hover:bg-primary hover:text-white cursor-pointer transition"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
</section>

  );
};

export default Team;
