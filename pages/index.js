import Head from "next/head";
import Image from "next/image";
import Facebook from "../images/Facebook.svg";
import Instagram from "../images/Instagram.svg";
import Twitter from "../images/Twitter.svg";
import Sun from "../images/Sun.svg";
import BG from "../images/Bg-Vectary .png";
import Moon from "../images/Moon-Man.png";
import Arrow from "../images/Right-Arrow.svg";
import Menu from "../images/Mobile-Menu.svg";
import React, { useState } from "react";

export default function Home() {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="overflow-hidden h-screen relative bg-gradient-to-r from-[#2C4550] to-[#0C0C0C] text-white">
      <div className="absolute md:h-screen lg:h-screen sm:h-screen sm:w-[1px] ml-32 bg-[#FFFFFF]"></div>

      <div className="flex flex-col">
        <header className="flex justify-between w-full p-6 pb-0">
          <h1 className="font-bold text-4xl">Xae</h1>
          {/* Desktop Nav */}
          <nav className="hidden sm:flex gap-4 sm:gap-8 cursor-pointer items-center">
            <span className="border-b border-white">Home</span>
            <span className="hover:border-b border-white">About</span>
            <span className="hover:border-b border-white">Gallery</span>
            <span className="hover:border-b border-white mr-6">Contact</span>
            <Image src={Sun} alt="Sun" />
          </nav>

          {/* Mobile Nav */}
          <div
            type="button"
            className="block sm:hidden cursor-pointer relative"
            onClick={() => setIsActive(!isActive)}
          >
            <Image src={Menu} alt="Menu" />
          </div>

          <nav
            className={
              isActive
                ? "hidden"
                : "sm:hidden flex flex-col absolute w-full h-screen gap-1 sm:gap-8 cursor-pointer top-16 left-0 bottom-0 right-0"
            }
          >
            <span className="bg-white h-[1px] w-full"></span>
            <span className="hover:text-black ml-6">About</span>
            <span className="hover:text-black ml-6">Gallery</span>
            <span className="hover:text-black ml-6">Contact</span>
          </nav>
        </header>

        <div className="w-full flex  sm:pl-0 pl-6 pb-[9rem] sm:pb-[7.3rem]  sm:mt-4 mt-16 relative">
          <div className="relative flex flex-col w-[50%] ml-0 sm:ml-56">
            <div className="absolute w-[250%] sm:w-[85%] sm:left-28 z-50 sm:top-5 top-24">
              <h1 className="text-5xl sm:text-6xl font-bold mb-2 sm:mb-6">
                Adventure Together
              </h1>
              <p className="text-xs sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Placerat id potenti faucibus nec, rhoncus, vulputate vitae.
                Dictum rutrum ut cras nullam porta id dolor arcu, quis.
              </p>
            </div>
          </div>
          <div className="sm:mr-24 mr-0 sm:w-[50%] w-[150%]">
            <Image src={BG} alt="BG" />
          </div>

          <div className="gap-4 flex top-[21.5rem] right-0 absolute h-[180px] sm:h-[220px] sm:w-[1237px] bg-gradient-to-bl">
            <div className="flex">
              <div className="w-[40px] sm:w-[180px]"></div>
              <Image src={Moon} alt="Moon" />
              <div className="flex flex-col pt-4 sm:pt-10 ml-10">
                <h1>Exploration</h1>
                <p className="mt-3 sm:mt-8 sm:text-sm text-xs">
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit. Placerat id potenti faucibus nec, rhoncus, vulputate
                </p>
              </div>
              <div className="pt-32 sm:pt-36 mr-5 sm:mr-14">
                <Image src={Arrow} alt="Arrow" />
              </div>
              <div className="hidden sm:flex flex-col pt-10 mr-10">
                <h1>Footprint</h1>
                <p className="mt-8 text-sm">
                  Lorem ipsum dolor sit amet, consectetur{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 p-8 ml-4 cursor-pointer lg:hidden md:hidden hidden sm:flex">
        <div className="flex-col gap-8 sm:flex">
          <Image src={Facebook} alt="Facebook" />
          <Image src={Instagram} alt="Instagram" />
          <Image src={Twitter} alt="Twitter" />
        </div>
      </div>
    </div>
  );
}

// sm:border-r-2 border-gray-600
