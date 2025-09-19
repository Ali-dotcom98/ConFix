import React from "react";
import s from "../assets/structure-design.jpg";

const ContactCard = ({ title, value, buttonText }) => (
  <div className="bg-white rounded-2xl border border-zinc-300 flex flex-col items-center justify-center gap-3 p-5">
    <h1 className="font-bold">{title}</h1>
    <p>{value}</p>
    <button className="px-3 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition">
      {buttonText}
    </button>
  </div>
);

const ContactUs = () => {
  return (
    <section id="contact" className="relative font-poppins">
      <div className="absolute inset-0 opacity-15">
        <img src={s} alt="structure" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 flex items-center justify-center px-4 md:px-10 py-10">
        <div className="w-full md:w-[90%] grid grid-cols-1 md:grid-cols-2 gap-8 bg-transparent">
          <div className="grid grid-rows-3 gap-5">
            <ContactCard
              title="Email"
              value="alishah1234584.as@gmail.com"
              buttonText="Send Now"
            />
            <ContactCard
              title="Phone"
              value="+92 300 0000000"
              buttonText="Call Us"
            />
            <ContactCard
              title="Address"
              value="123 Main Street, Karachi"
              buttonText="View Map"
            />
          </div>

          <div className="p-5 rounded-2xl border border-zinc-300 bg-white shadow">
            <h1 className="text-2xl md:text-3xl font-medium text-black mb-2">
              Get in Touch
            </h1>
            <p className="text-zinc-600 text-sm md:text-base mb-5">
              Have a project in mind or need expert advice? We're here to help!
              Reach out to our team for consultations, inquiries, or to start
              your next big project.
            </p>
            <form>
              <div className="flex flex-col md:flex-row gap-3">
                <input
                  className="flex-1 p-2 border border-zinc-400 rounded-md focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-500"
                  type="text"
                  placeholder="First Name"
                />
                <input
                  className="flex-1 p-2 border border-zinc-400 rounded-md focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-500"
                  type="text"
                  placeholder="Last Name"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-3 mt-4">
                <input
                  className="flex-1 p-2 border border-zinc-400 rounded-md focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-500"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="flex-1 p-2 border border-zinc-400 rounded-md focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-500"
                  type="tel"
                  placeholder="Phone Number"
                />
              </div>

              <textarea
                className="w-full h-36 mt-4 p-2 border border-zinc-400 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-500"
                placeholder="Message"
              ></textarea>

              <button
                type="submit"
                className="w-full mt-5 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition"
              >
                Send Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
