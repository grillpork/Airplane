import React from "react";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const FooterBar = () => {
  return (
    <div>
      <div className="maxContent">
        <div className="flex justify-between items-center mt-12">
          <section className="space-y-4 py-8">
            <h1 className="text-5xl font-medium">Join our newssltter</h1>
            <h1>We'll send you a nice latter once per week.No spam.</h1>
          </section>
          <div className="space-y-4">
            <section className="flex gap-2">
              <input
                type="text"
                placeholder="example@ex.com"
                className="border border-gray-300 w-[20rem] px-4 rounded bg-white"
              />
              <button className="border border-gray-400 py-4 px-12 rounded-x hover:bg-neutral-200 rounded">
                Subscribe
              </button>
            </section>
            <h1>
              We care about your in our
              <span className="underline ml-2 text-neutral-700">
                privacy policy.
              </span>
            </h1>
          </div>
        </div>

        <section className=" flex justify-between mt-12">
          <header className="space-y-8">
            <h1 className="text-2xl uppercase font-medium">Electrax</h1>
            <div>
              <h className="font-medium text-xl">About</h>
              <p className="w-[500px]">
                We blend the timeless elegance of the iconic Electra with
                cutting-edge technology to create personal aircraft that
                redefine the skies. Our mission is to honor aviation history
                while pioneering the future of personal flight.
              </p>
            </div>

            <div className="space-y-4">
              <h1 className="text-xl font-medium">follow us</h1>
              <div className="social-icons flex gap-2">
                <div className=" w-12 h-12 bg-neutral-200 rounded-full flex justify-center items-center text-3xl">
                  <TiSocialLinkedinCircular />
                </div>
                <div className=" w-12 h-12 bg-neutral-200 rounded-full flex justify-center items-center">
                  <TiSocialTwitter />
                </div>
                <div className=" w-12 h-12 bg-neutral-200 rounded-full flex justify-center items-center">
                  {" "}
                  <SlSocialInstagram />
                </div>
                <div className=" w-12 h-12 bg-neutral-200 rounded-full flex justify-center items-center">
                  <SlSocialFacebook />
                </div>
                <div className=" w-12 h-12 bg-neutral-200 rounded-full flex justify-center items-center">
                  <TiSocialYoutube />
                </div>
              </div>
            </div>
            <div className="flex gap-4 font-medium">
              <span>Licenses</span>
              <span>Style Guilde</span>
              <span>change Log</span>
            </div>
          </header>

          <section className="flex flex-col gap-8 items-start">
            <button>Product</button>
            <button className="hover:text-neutral-500 cursor-pointer font-medium">
              Home
            </button>
            <button className="hover:text-neutral-500 cursor-pointer font-medium">
              ElectraX Airplane
            </button>
          </section>

          <section className="flex flex-col gap-8 items-start">
            <button>Company</button>
            <button className="hover:text-neutral-500 cursor-pointer font-medium">
              About us
            </button>
            <button className="hover:text-neutral-500 cursor-pointer font-medium">
              Careers
            </button>
            <button className="hover:text-neutral-500 cursor-pointer font-medium">
              News
            </button>
            <button className="hover:text-neutral-500 cursor-pointer font-medium">
              Contact
            </button>
          </section>

          <section className="flex flex-col gap-8 items-start">
            <button>Outher Pages</button>
            <button className="hover:text-neutral-500 cursor-pointer font-medium">
              License
            </button>
            <button className="hover:text-neutral-500 cursor-pointer font-medium">
              Style Guilde
            </button>
            <button className="hover:text-neutral-500 cursor-pointer font-medium">
              Chang log
            </button>
            <button className="hover:text-neutral-500 cursor-pointer font-medium">
              404 Page
            </button>
            <button className="hover:text-neutral-500 cursor-pointer font-medium">
              Protected Page
            </button>
          </section>
        </section>
      </div>
      <span className="bg-neutral-200  flex justify-center items-center w-full mt-4 text-neutral-800">
        Copyright © 2023 Electrax. All rights reserved
      </span>
    </div>
  );
};

export default FooterBar;
