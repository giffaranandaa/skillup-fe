import React from "react";
import teacher1 from "../../assets/teacher1.png";
import teacher2 from "../../assets/teacher2.png";
import { accordions } from "../../Data";
import Accordion from "./Accordion";

const Teacher = () => {
  return (
    <div className="section" id="teacher">
      <div className="grid sm:grid-cols-2 place-items-center gap-8">
        <div className="pl-5">
          <div className="font-bold sm:text-[1.8rem] text-[1.5rem] mb-5">
            Become <span className="text-Teal">An Instructor</span> <br /> of
            Our platform
          </div>
          <p className="text-sm leading-7 text-gray mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            quam dolor inventore natus, ducimus laudantium ea, at eveniet
            dignissimos, amet repudiandae! Voluptatem deleniti hic ipsa quod ut,
            tenetur perspiciatis fugiat!
          </p>
          <button className="py-3 px-6 bg-Teal text-white rounded-lg text-sm font-bold">
            Start Teaching
          </button>
        </div>
        <div className="p-4 md:w-3/4 sm:row-start-1">
          <img src={teacher1} alt="" />
        </div>
        <div className="pl-5">
          <div className="font-bold sm:text-[1.8rem] text-[1.5rem] mb-5">
            Become <span className="text-Teal">An Instructor</span> <br /> of
            Our platform
          </div>
          <p className="text-sm leading-7 text-gray mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            quam dolor inventore natus, ducimus laudantium ea, at eveniet
            dignissimos, amet repudiandae! Voluptatem deleniti hic ipsa quod ut,
            tenetur perspiciatis fugiat!
          </p>
          <button className="py-3 px-6 bg-Teal text-white rounded-lg text-sm font-bold">
            Get Started
          </button>
        </div>
        <div className="p-4 md:w-3/4">
          <img src={teacher2} alt="" />
        </div>
      </div>
      <div className="text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem]">
        Frequently <span className="text-Teal">Asked Question</span>
      </div>
      <div className="mt-12 max-w-[700px] mx-auto">
        {accordions.map((accordion) => {
          return <Accordion key={accordion.id} {...accordion} />;
        })}
      </div>
    </div>
  );
};

export default Teacher;
