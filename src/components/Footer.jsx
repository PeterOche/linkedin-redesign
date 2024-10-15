import React from "react";
import logo from "../assets/logo.svg";
import BlueButton from "./shared/BlueButton";
import TransparentBtn from "./shared/TransparentBtn";

const Footer = () => {
  return (
    <footer class="bg-[#F7F9FB] py-8 border-t px-4 max-w-full sm:px-8">
      <div class="container mx-auto md:flex flex-wrap justify-around items-center px-16">
        {/* <!-- Logo Section --> */}
        <div class="flex  flex-col items-center space-y-2">
          <img src={logo} alt="LinkedIn Logo" class="h-[46px] w-[46px]" />
          <span class="text-[14px] font-semibold">
            Locked<span className="text-[#0275B1]">IN</span>
          </span>
        </div>

        {/* <!-- Navigation Links --> */}
        <div class="flex flex-wrap gap-8 text-[12px]">
          <div>
            <h4 class="font-semibold mt-3 md:mt-0 mb-2">Navigation</h4>
            <ul class="space-y-1 mt-2">
              <li>
                <a href="#" class="link link-hover">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="link link-hover">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" class="link link-hover">
                  Advertising
                </a>
              </li>
              <li>
                <a href="#" class="link link-hover">
                  Small Business
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul class="space-y-1 md:mt-6">
              <li>
                <a href="#" class="link link-hover">
                  Talent Solutions
                </a>
              </li>
              <li>
                <a href="#" class="link link-hover">
                  Marketing Solutions
                </a>
              </li>
              <li>
                <a href="#" class="link link-hover">
                  Sales Solutions
                </a>
              </li>
              <li>
                <a href="#" class="link link-hover">
                  Safety Center
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul class="space-y-1 md:mt-6">
              <li>
                <a href="#" class="link link-hover">
                  Community Guidelines
                </a>
              </li>
              <li>
                <a href="#" class="link link-hover">
                  Privacy & Terms
                </a>
              </li>
              <li>
                <a href="#" class="link link-hover">
                  Mobile App
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Fast Access Buttons --> */}
        <div class="flex flex-col space-y-2 text-[12px]">
          <p>Fast Access</p>
          <BlueButton>Questions?</BlueButton>
          <TransparentBtn className="text-[#0275B1]">Settings</TransparentBtn>
        </div>

        {/* <!-- Language Selector --> */}
        <div class="flex flex-col space-y-2 mt-8 ">
          <h4 className="text-[12px]  mb-2">Language</h4>
          <select class="select select-bordered md:w-[270px] text-[12px] rounded ">
            <option>ENGLISH</option>
            <option>SPANISH</option>
            <option>FRENCH</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
