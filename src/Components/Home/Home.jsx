import React from "react";
import hero from "../../assets/hero.png";
import { logos } from "../../Data";
import { motion } from "framer-motion";

const Home = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div className="section" id="home">
      <div className="md:flex items-center">
        <div>
          <div className="font-bold text-xs text-Teal mb-4">
            you e-elearning partner
          </div>
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
            Cara Baru <br /> Untuk Belajar Online
          </div>
          <p className="text-sm leading-7 text-gray max-w-sm">
            Dengan Cinta dan Dedikasi, Wujudkan Karier Impian yang Luar Biasa.
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 font-bold bg-Teal text-white rounded-lg mr-4 text-sm">
              Get Started
            </button>
            <button className="px-6 py-3 font-bold border border-gray rounded-lg text-sm">
              Discover
            </button>
          </div>
        </div>
        <div className="md:w-[60%]">
          <img src={hero} alt="" />
        </div>
      </div>
      <div>
        <p className="text-center text-xl">
          We collaboration with{" "}
          <span className="text-Teal">
            100+ leading universities ans companies
          </span>
        </p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center flex-wrap gap-8 p-2"
        >
          {logos.map((logo, index) => (
            <motion.div variants={item} className=" w-28" key={index}>
              <img src={logo} alt="" className="w-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
