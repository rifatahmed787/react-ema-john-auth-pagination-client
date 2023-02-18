import React from "react";
import logo from "../../assets/Logo.svg";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div class="mt-[75px]">
      <div class="flex flex-col mx-auto max-w-[1500px] h-auto">
        <div class="flex lg:items-center lg:justify-between flex-col lg:flex-row gap-y-[45px] py-[30px] lg:py-0 px-[15px] sm:px-[30px] md:px-[40px] lg:px-[50px] xl:px-[75px] w-full h-auto lg:h-[380px] bg-gray-800">
          <div class="lg:w-4/12">
            <div class="flex items-center justify-center gap-x-[8px] mb-[30px] text-white">
              <img src={logo} alt="" />
            </div>

            <div class="text-center text-gray-200">
              An e-commerce website is one that allows people to buy and sell
              physical goods, services, and digital products over the internet
              rather than at a brick-and-mortar location.
            </div>
          </div>

          <div class="flex justify-center sm:justify-between flex-wrap lg:flex-nowrap gap-y-[60px] gap-x-[90px] sm:gap-x-0 lg:w-7/12">
            <div class="text-center sm:text-left">
              <div class="mb-[18px] text-gray-400 text-sm font-bold select-none">
                Product
              </div>

              <ul class="flex flex-col gap-[10px] text-gray-200">
                <a class="hover:underline" href="/">
                  <li>Overview</li>
                </a>
                <a class="hover:underline" href="/">
                  <li>Features</li>
                </a>
                <a class="hover:underline" href="/">
                  <li>Solutions</li>
                </a>
                <a class="hover:underline" href="/">
                  <li>Pricing</li>
                </a>
              </ul>
            </div>

            <div class="text-center sm:text-left">
              <div class="mb-[18px] text-gray-400 text-sm font-bold select-none">
                Company
              </div>

              <ul class="flex flex-col gap-[10px] text-gray-200">
                <a class="hover:underline" href="/">
                  <li>About us</li>
                </a>
                <a class="hover:underline" href="/">
                  <li>News</li>
                </a>
                <a class="hover:underline" href="/">
                  <li>Media kit</li>
                </a>
                <a class="hover:underline" href="/">
                  <li>Contact</li>
                </a>
              </ul>
            </div>

            <div class="text-center sm:text-left">
              <div class="mb-[18px] text-gray-400 text-sm font-bold select-none">
                Resources
              </div>

              <ul class="flex flex-col gap-[10px] text-gray-200">
                <a class="hover:underline" href="/">
                  <li>Newsletter</li>
                </a>
                <a class="hover:underline" href="/">
                  <li>Events</li>
                </a>
                <a class="hover:underline" href="/">
                  <li>Help centre</li>
                </a>

                <a class="hover:underline" href="/">
                  <li>Support</li>
                </a>
              </ul>
            </div>

            <div class="text-center sm:text-left">
              <div class="mb-[18px] text-gray-400 text-sm font-bold select-none">
                Social
              </div>

              <ul class="flex flex-col gap-[10px] text-gray-200">
                <a class="hover:underline" href="/">
                  <li>Twitter</li>
                </a>
                <a class="hover:underline" href="/">
                  <li>LinkedIn</li>
                </a>
                <a class="hover:underline" href="/">
                  <li>Facebook</li>
                </a>
                <a class="hover:underline" href="/">
                  <li>Github</li>
                </a>
              </ul>
            </div>

            <div class="text-center sm:text-left">
              <div class="mb-[18px] text-gray-400 text-sm font-bold select-none">
                Legal
              </div>

              <ul class="flex flex-col gap-[10px] text-gray-200">
                <a class="hover:underline" href="/">
                  <li>Terms</li>
                </a>
                <a class="hover:underline" href="/">
                  <li>Privacy</li>
                </a>
                <a class="hover:underline" href="/">
                  <li>Cookies</li>
                </a>
                <a class="hover:underline" href="/">
                  <li>Licenses</li>
                </a>
              </ul>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-evenly sm:justify-between flex-col sm:flex-row sm:px-[30px] md:px-[40px] lg:px-[50px] xl:px-[75px] w-full h-[100px] bg-gray-900">
          <div class="text-gray-400">
            Copyright © 2023 - All right reserved by ACME Industries Ltd
          </div>

          <ul class="flex gap-[15px] text-gray-400 cursor-pointer">
            <li class="ease-in duration-200 hover:text-gray-100">
              <Icon icon="ri:facebook-circle-fill" width="24" />
            </li>
            <li class="ease-in duration-200 hover:text-gray-100">
              <Icon icon="jam:linkedin-circle" width="24" />
            </li>
            <li class="ease-in duration-200 hover:text-gray-100">
              <Icon icon="mdi:github" width="24" />
            </li>
            <li class="ease-in duration-200 hover:text-gray-100">
              <Icon icon="ant-design:twitter-circle-filled" width="24" />
            </li>
            <li class="ease-in duration-200 hover:text-gray-100">
              <Icon icon="mdi:instagram" width="24" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;