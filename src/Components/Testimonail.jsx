import React from "react";
import { testimonials, blogs } from "../data";
import Slider from "react-slick";

const Testimonail = () => {
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 2,
    centerMode: true,
    swipeToSlide: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    draggable: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
          centerMode: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <section
        id="testimonials"
        className="min-h-screen bg-[#f7f7f7] px-4 sm:px-10 md:px-20 py-6 font-poppins"
      >
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-2 sm:px-10 w-full">
            {testimonials.map((data, index) => (
              <div
                key={index}
                className="flex flex-col px-5 py-7 gap-5 bg-white rounded-2xl shadow-md"
              >
                <div className="flex flex-row items-start gap-4">
                  <img
                    className="w-16 h-16 rounded-full object-cover"
                    src={data.image}
                    alt=""
                  />
                  <div>
                    <h1 className="font-medium tracking-wider">{data.name}</h1>
                    <div className="flex gap-1 text-sm text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 fill-[#ffaa00]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-gray-600 text-sm sm:text-base">
                  {data.review}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="min-h-[90vh] bg-bg-secondary mt-[10vh] relative font-poppins py-10">
        <div className="absolute top-0 bg-primary rounded-tr-[110%] w-full h-full z-0"></div>

        <div className="relative z-20 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 px-4 md:px-10">
          <div className="w-full text-black sm:text-white lg:w-[40%] text-center lg:text-left space-y-5">
            <h1 className="text-lg font-medium">Meet Our Experts</h1>
            <h1 className="text-3xl font-medium">Insights & Innovations</h1>
            <p className="">
              Stay informed with the latest trends, tips, and expert advice on
              all things construction. Explore industry insights to help guide
              your next project!
            </p>
          </div>

          <div className="w-[70%] lg:w-[50%] cursor-grab active:cursor-grabbing">
            <Slider {...settings}>
              {blogs.map((data, index) => (
                <div key={index} className="px-2">
                  <div className="flex flex-col items-center">
                    <div className="bg-primary p-2 rounded-xl">
                      <img
                        src={data.image}
                        className="w-full rounded-t-xl object-cover"
                        alt=""
                      />
                      <div className="p-3 bg-white rounded-b-xl">
                        <h1 className="font-medium">{data.title}</h1>
                        <p className="line-clamp-2 text-sm text-gray-600">
                          {data.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonail;
