import React from "react";
import { categories } from "../../../Data";
import { courses } from "../../../Data";
import Categories from "./Categories";
import Course from "../Course/Course";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Courses = () => {
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
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="section" id="courses">
      <div className="text-center">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Our Top <span className="text-Teal"> Categories </span>
        </div>
        <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          voluptas perferendis! Fugit atque itaque, cumque, autem obcaecati
          quasi aliquid nulla non temporibus quaerat alias quae neque! Neque,
          doloremque corporis odit non magni amet placeat. Labore!
        </p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8"
      >
        {categories.map((category) => {
          return <Categories key={category.id} {...category} />;
        })}
      </motion.div>
      <div className="text-xl font-bold mt-32">Most Popular Courses</div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          480: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 40 },
        }}
        className="mt-12 py-5"
      >
        {courses.map((course) => {
          return (
            <SwiperSlide key={course.id}>
              <Course {...course} />
            </SwiperSlide>
          );
        })}
        <div className="mt-5 flex items-center justify-end gap-7">
          <div className="button-prev-slide text-white w-[40px] h-[40px] bg-Teal grid place-items-center">
            <FaArrowLeft />
          </div>
          <div className="button-next-slide text-white w-[40px] h-[40px] bg-Teal grid place-items-center ">
            <FaArrowRight />
          </div>
        </div>
      </Swiper>
      {/* <div className="mt-12 overflow-x-hidden w-full relative">
        <div className="flex gap-8 md-w-full sm:w-[170%] xs:w-[140%] w-[400%]">
          {courses.map((course) => {
            return <Course key={course.id} {...course} />;
          })}
        </div>
      </div> */}
    </div>
  );
};

export default Courses;
