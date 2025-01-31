import React from "react";
import { GoArrowRight } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";

const HeroBar = () => {
  return (
    <div>
      <div className="py-[80px] px-[32px] maxContent">
        <div className="w-full  ">
          <h3 className=" font-medium text-neutral-500">
            Precision Engineering at Its Finest
          </h3>
          <h1 className="text-4xl font-medium py-3">Aerodynamics Redefined</h1>
          <p className="w-[44rem] py-4 font-medium text-neutral-600">
            Our aircraft’s streamlined design is a product of relentless
            innovation, reducing drag and enhancing speed and efficiency. Every
            curve, every detail is crafted to ensure optimal performance in all
            flight conditions. Redefined
          </p>

          <button className="underline font-medium py-4 cursor-pointer">
            Discover the ElectraX
          </button>

          <div className="mt-4 flex flex-col gap-8">
            <section className="tail-plane p-8 rounded-2xl space-y-[22rem]">
              <h1 className="font-medium text-5xl text-neutral-800 ">
                Cutting-Edge Materials
              </h1>
              <div className="p-6 bg-gradient-to-r from-neutral-200 to-neutral-100 rounded-2xl space-y-4">
                <h1 className="font-medium text-2xl">
                  Advanced Propulsion Technology
                </h1>
                <p className=" font-medium text-neutral-500 text-[18px]">
                  Powered by next-heneration engines, our aircraft offer
                  unrivaled efficiency and power. Whether you choose electric or
                  hybrid propulsion, you'll experience seamless acceleration and
                  impressive range.
                </p>
              </div>
            </section>

            <section className="flex justify-center w-full gap-8">
              <section className=" w-[50%] h-full rounded-2xl overflow-clip">
                <div>
                  <img
                    src="https://cdn.prod.website-files.com/670029dfe54e815631acec08/67002cca2936ee530a0f853f_engine%202%20wide.avif"
                    className="w-full "
                  />
                </div>
                <div className="p-6 bg-neutral-200 space-y-4">
                  <h1 className="font-medium text-xl">
                    Cutting-edge Materials
                  </h1>
                  <p className=" font-medium text-neutral-500 ">
                    Constructed from advanced liightweight Materials, ElectraX
                    aircraft maximize durability while minimizing weight
                    improving both fuel efficiency and overall performance.
                  </p>
                </div>
              </section>

              <section className="w-[50%] h-full rounded-2xl overflow-clip">
                <div>
                  <img
                    src="https://cdn.prod.website-files.com/670029dfe54e815631acec08/67002cc9922a0ab5e0c3a61a_plane%20black%20background.avif"
                    className="w-full "
                  />
                </div>
                <div className="p-6 bg-neutral-950 space-y-4  text-neutral-200">
                  <h1 className="font-medium text-xl">
                    Enginerring for yhe Future
                  </h1>
                  <p className=" font-medium">
                    From the propulsion system to the aerodynamic body, each
                    element is designed to push the boundaries of what's
                    possible in personal aviation. it's not just a plane---it's
                    a materpiece of Enginerring.
                  </p>
                </div>
              </section>
            </section>
          </div>
        </div>
      </div>

      <section className=" bg-plane w-full h-[86vh]   text-white">
        <h1 className=" text-5xl/tight font-[400] w-full h-full bg-[rgba(0,0,0,0.7)] flex justify-center items-center px-56">
          At ElectraX, we blend the timeless elegance of the iconic Elextra with
          cutting-edge technology to create personal aircraft that redefine the
          skies. Our mission is to honor aviation history while pioneering the
          future of personal flight.
        </h1>
      </section>

      <section className="maxContent w-full flex flex-col justify-start items-start gap-8  py-18">
        <h1 className="text-3xl font-medium">A New Heights of Precision</h1>
        <p className="w-[600px] font-medium text-neutral-500">
          Our aircraft’s streamlined design is a product of relentless
          innovation, reducing drag and enhancing speed and efficiency. Every
          curve, every detail is crafted to ensure optimal performance in all
          flight conditions.
        </p>
        <button className="underline font-medium py-4 flex gap-2 justify-center items-center">
          Discover the ElectraX
          <GoArrowUpRight />
        </button>
      </section>

      <div className="flex justify-center gap-4 maxContent">
        <img
          src="https://cdn.prod.website-files.com/670029dfe54e815631acec08/67015b16deaa29d5b5d70127_engine%203%20wide.avif"
          className="w-full h-64 object-cover rounded-2xl"
        />
        <img
          src="https://cdn.prod.website-files.com/670029dfe54e815631acec08/67002cca1818ddbe17734831_plane%20dark%202%20cropped.avif"
          className="w-full h-64 object-cover rounded-2xl"
        />
        <img
          src="https://cdn.prod.website-files.com/670029dfe54e815631acec08/67015ed668459a5989fa64e0_engine%20black.avif"
          className="w-full h-64 object-cover rounded-2xl"
        />
      </div>

      <section className="py-[80px] px-[32px] flex justify-center items-center gap-8 maxContent">
        <div className="w-full">
          <div>
            <h1 className="font-medium text-neutral-500">
              Heritage Meets Innovation
            </h1>
            <h1 className="text-3xl font-medium py-4">
              Heritage Meets Innovation
            </h1>
            <button className="underline font-medium flex justify-center items-center gap-2">
              Discover the ElectraX
              <GoArrowUpRight />
            </button>
          </div>

          <div>
            <h1 className="py-4 flex justify-start items-center gap-2 text-xl font-medium">
              <GoArrowRight />
              Aedrodynamic Perfection
            </h1>
            <p className="px-6 font-medium text-neutral-500">
              The sleek, streamlined shape of our aircraft is engineered for
              superior aerodynamics, reducing drag and improving fuel
              efficiency. This careful balance of form and function allows for
              smoother, further, faster flying that ever before.
            </p>
            <h1 className="py-4 flex justify-start items-center gap-2 text-xl font-medium">
              <GoArrowRight />
              Iconic Design Meets Modern Technology
            </h1>
            <p className="px-6 font-medium text-neutral-500">
              nspired by aviation's golden era, the ElectraX model showcases
              iconic design elements paired with cutting-edge technology. From
              the gleaming exterior our aircrafts are a testament to excellence.
            </p>
          </div>
          <p className=" mt-8 bg-neutral-200 p-6 rounded-2xl text-neutral-500 font-medium">
            Every ElectraX aircraft is built with future-forward engineering in
            mind. Our planes are not only high-performing but also
            environmentally responsible.
          </p>
        </div>

        <div className="h-[500px] w-full">
          <img
            src="https://cdn.prod.website-files.com/670029dfe54e815631acec08/67002cc9371b19f4f7407d33_full%20plane%20on%20beach%201.5.avif"
            className="h-full object-cover rounded-2xl"
          />
        </div>
      </section>

      <section className="mt-8 py-[80px] px-[32px] flex justify-center items-start gap-8 maxContent">
        <div className="w-full">
          <img
            src="https://cdn.prod.website-files.com/670029dfe54e815631acec11/67005950ec1dc72e2f8ba964_portrait.avif"
            className="w-full h-[400px] object-cover rounded-2xl"
          />
        </div>
        <div className="w-full py-12">
          <h1 className="font-medium text-neutral-500">Our story</h1>
          <h1 className=" text-4xl font-medium py-2">Learn About Out </h1>
          <h1 className=" text-4xl font-medium ">Mission</h1>
          <p className=" py-4">
            From weather updates to navigational data, ElectraX ensures seamless
            transmission of critical information. With real-time flight tracking
            you’ll receive vital data instantly.
          </p>
          <button className="underline font-medium flex justify-center items-center gap-2">
            Read About
            <GoArrowUpRight />
          </button>
        </div>
      </section>

      <section className="maxContent ">
        <div className="flex justify-between items-center">
          <div className="">
            <h1>Heritage Meets Innovation</h1>
            <h1 className="text-2xl font-medium">News & Resources</h1>
          </div>
          <button className="underline font-medium flex justify-center items-center gap-2">
            News & Resources
            <GoArrowUpRight />
          </button>
        </div>

        <div className="flex justify-between items-center text-white mt-12">
          <section className="news-plane-1 flex flex-col justify-between items-start w-[410px] h-[500px] rounded-2xl px-12 py-6">
            <p className="flex justify-between items-center gap-2">
              <div className=" bg-white w-2 h-2 rounded-full"></div> 10/14/2023
            </p>
            <h1>Aviation and Globalization</h1>
          </section>
          <section className="news-plane-2 flex flex-col justify-between items-start w-[410px] h-[500px] rounded-2xl px-12 py-6">
            <p className="flex justify-between items-center gap-2">
              <div className=" bg-white w-2 h-2 rounded-full"></div> 10/14/2023
            </p>
            <h1>Aviation and Globalization</h1>
          </section>
          <section className="news-plane-3 flex flex-col justify-between items-start w-[410px] h-[500px] rounded-2xl px-12 py-6">
            <p className="flex justify-between items-center gap-2">
              <div className=" bg-white w-2 h-2 rounded-full"></div> 10/14/2023
            </p>
            <h1>Aviation and Globalization</h1>
          </section>
        </div>
      </section>

      <div className="future-plane mt-32">
        <section className="maxContent text-white w-full h-[80vh] flex justify-between items-end py-12">
          <div>
            <h1>The Future of Personal Aviation</h1>
            <h1 className="text-[80px]">Experience the Next</h1>
            <h1 className="text-[80px]">Era of Flight</h1>
          </div>
          <button
            type="submit"
            className=" border border-gray-200 py-3 px-8 rounded hover:bg-[rgba(255,255,255,0.1)] flex justify-center items-center gap-2"
          >
            Clone Template
            <GoArrowUpRight />
          </button>
        </section>
      </div>
       
    </div>
  );
};

export default HeroBar;
