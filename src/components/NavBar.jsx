import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const menuBar = ["ElectraX", "About", "Careers", "News", "Contact"];
const NavBar = () => {
  return (
    <div className="bg-gray-100 h-[80vh]">
      <div className=" flex justify-between items-center p-4 maxContent ">
        <div className=" text-2xl uppercase cursor-pointer ">electrax</div>
        <ul className=" flex justify-center items-center gap-8 cursor-pointer">
          {menuBar.map((item) => {
            return (
              <li key={item} className=" hover:text-gray-300 font-sans">
                {item}
              </li>
            );
          })}
          <button
            type="submit"
            className=" border border-gray-200 py-3 px-8 rounded hover:bg-gray-200"
          >
            Clone Template
          </button>
        </ul>
      </div>

      <div className="w-full h-full flex flex-col justify-center items-start maxContent">
        <h1 className="text-[109px]/[109px] font-light uppercase ">
          Redefining Personal Aviation
        </h1>
        <p className="w-[32rem] mt-4 mb-[12rem]">
          Elevate your travel experience with ElectraX, where innovation meets
          legacy in our flagship aircraft. Designed for pioneers who dare to
          dream, we’re soaring into the future of flight.
        </p>

        <button className="underline font-medium py-4 flex gap-2 justify-center items-center cursor-pointer">
          Discover the ElectraX <GoArrowUpRight />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
