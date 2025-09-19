import React, { useEffect, useRef, useState } from 'react';
import { navigations } from '../../data';
import { Link } from 'react-scroll';
import gsap from 'gsap';
import logo from "../../assets/logo.svg"

const NavigationBar = () => {
  const [fixedit, setFixedit] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const container = useRef();

  const handleControl = () => {
    const position = window.scrollY;
    if (position > 110) setFixedit(true);
    else if (position < 50) setFixedit(false);
  };

  useEffect(() => {
    if (fixedit) {
      gsap.fromTo(container.current, { y: -150 }, { y: 0, top: 0 });
    }
  }, [fixedit]);

  useEffect(() => {
    window.addEventListener('scroll', handleControl);
    return () => window.removeEventListener('scroll', handleControl);
  }, []);

  return (
    <>
      <div
        ref={container}
        className={`${
          fixedit ? 'fixed top-0 left-0 w-full z-50' : 'relative'
        } bg-white flex items-center justify-between px-10 py-4 font-poppins shadow-md`}
      >
      <div className='flex gap-3 items-center'>
          <img src={logo} className='size-12 ' alt="" />
          <h1 className="text-3xl font-bold">
            Con
            <span className="bg-gradient-to-b from-primary-accent via-pink-800 to-purple-900 bg-clip-text text-transparent">
              Fix
            </span>
          </h1>
      </div>

    
        <div className="hidden md:flex flex-row gap-10 items-center">
          <div className="flex gap-5">
            {navigations.map((data, index) => (
              <Link
                to={data.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={data.offset}
                key={index}
                className="text-md   cursor-pointer py-2 hover:text-primary text-text-color font-medium tracking-wider"
                activeClass="border-b-2 border-primary !text-primary"
              >
                {data.label}
              </Link>
            ))}
          </div>
          <button className="border px-5 py-2 rounded-full text-white bg-primary hover:bg-primary-accent transition-all">
            Get a quote
          </button>
        </div>

        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

   
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4 space-y-4">
          {navigations.map((data, index) => (
            <Link
              to={data.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={data.offset}
              key={index}
              className="block text-lg cursor-pointer hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              {data.label}
            </Link>
          ))}
          <button className="w-full border px-5 py-2 rounded-full text-white bg-primary hover:bg-primary-accent transition-all">
            Get a quote
          </button>
        </div>
      )}
    </>
  );
};

export default NavigationBar;
