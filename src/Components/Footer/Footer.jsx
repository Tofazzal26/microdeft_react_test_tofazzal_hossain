"use client";

import { Facebook, Globe, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <div>
        <div className="bg-[#0f0c1d] text-white w-full">
          <footer className="footer px-4 py-4 md:px-10 md:py-[100px] container mx-auto">
            <aside>
              <h2 className="text-[20px] md:text-[44px] md:w-[500px] md:leading-[45px] ">
                EduPortal
              </h2>
              <p className="text-[#d4d4d4] text-[12px] md:text-[15px] my-4 w-[300px] leading-[30px]">
                Desires to obtain pain of itself, because it is pain, but
                occasionally circumstances.
              </p>
              <div className="flex items-center gap-4">
                <span className="border-[1px] border-gray-400 p-1">
                  {" "}
                  <Facebook className="transition-all hover:text-[#eddd5e] cursor-pointer" />
                </span>
                <span className="border-[1px] border-gray-400 p-1">
                  {" "}
                  <Twitter className="transition-all hover:text-[#eddd5e] cursor-pointer" />
                </span>
                <span className="border-[1px] border-gray-400 p-1">
                  {" "}
                  <Globe className="transition-all hover:text-[#eddd5e] cursor-pointer" />
                </span>
                <span className="border-[1px] border-gray-400 p-1">
                  {" "}
                  <Instagram className="transition-all hover:text-[#eddd5e] cursor-pointer" />
                </span>
              </div>
            </aside>
            <nav>
              <h6 className=" text-[16px] md:text-[21px]">Explore</h6>
              <a className="text-[#d4d4d4] text-[12px] md:text-[15px] md:mt-6">
                About Company
              </a>
              <a className="text-[#d4d4d4] text-[12px] md:text-[15px] my-2">
                Meet the Team
              </a>
              <a className="text-[#d4d4d4] text-[12px] md:text-[15px] ">
                News & Media
              </a>
              <a className="text-[#d4d4d4] text-[12px] md:text-[15px] my-2">
                Our Courses
              </a>
              <a className="text-[#d4d4d4] text-[12px] md:text-[15px] ">
                Contact
              </a>
            </nav>
            <nav>
              <h6 className="text-[16px] md:text-[21px]">Contact</h6>
              <a className="text-[#d4d4d4] text-[12px] md:text-[15px] md:mt-6">
                66 Road Dhaka Avenue, 600 New
              </a>
              <a className="text-white text-[12px] md:text-[15px]">
                Bangladesh, Dhaka
              </a>
              <a className="text-[#d4d4d4] text-[12px] md:text-[15px] md:mt-6">
                afranislamabir6789@gmail.com
              </a>
              <a className="text-white text-[12px] md:text-[15px]">
                +8801306700357
              </a>
            </nav>
            <nav>
              <h6 className="text-[16px] md:text-[21px]">Language</h6>
              <a className="text-[#d4d4d4] text-[12px] md:text-[15px] md:mt-5">
                English
              </a>
              <a className="text-[#d4d4d4] text-[12px] md:text-[15px]">
                Korean
              </a>
              <a className="text-[#d4d4d4] text-[12px] md:text-[15px]">
                Japanese
              </a>
            </nav>
          </footer>
          <div className="container mx-auto">
            <div className="border-t-[1px] border-gray-600">
              <div className="flex md:flex-row flex-col justify-between items-center text-gray-400 text-[14px] md:text-[18px] py-4 md:py-8">
                <div className="space-x-10 text-gray-200">
                  <span>Education</span>
                  <span>English</span>
                  <span>About Us</span>
                </div>
                <div>
                  <h2>EduPortal © 2024. All Rights Reserved.</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
