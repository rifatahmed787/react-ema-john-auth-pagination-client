import React from "react";
import "../CategoryItems/Category.css";
import png1 from "../../../assets/images/banner-images/watch1.png";
import png2 from "../../../assets/images/banner-images/bag2.png";
import png3 from "../../../assets/images/categories/shoes.png";

const Category = () => {
  return (
    <div>
      <div className="pt-10 bg-white grid place-content-center px-5">
        <h1 className="capitalize text-3xl md:text-4xl lg:text-6xl text-center mb-10 lg:mb-20 text-indigo-600">
          categories
        </h1>
        <div className="grid lg:grid-cols-3 gap-7 justify-center">
          <div className="max-w-sm shadow-xl relative card rounded-md overflow-hidden">
            <div className="relative">
              <img src={png1} alt="" className="w-96 h-60" />
              <div className="custom-shape-divider-bottom-1635508836">
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                    className="shape-fill"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="absolute bottom-4 px-4">
              <span className="text-sm text-gray-500 -mb-1 block">
                Many variants
              </span>
              <h2 className="text-xl text-pink-400">Watch</h2>
            </div>
            <div className="absolute top-0 right-0 bg-pink-400 cursor-pointe z-50 w-full h-full flex justify-center items-center card-overlay">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white cursor-pointer"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="max-w-sm shadow-xl relative card rounded-md overflow-hidden">
            <div className="relative">
              <img src={png2} alt="Wedding" className="w-96 h-60" />
              <div className="custom-shape-divider-bottom-1635508836">
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                    className="shape-fill"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="absolute bottom-4 px-4">
              <span className="text-sm text-gray-500 -mb-1 block">
                Many variants
              </span>
              <h2 className="text-xl text-yellow-400">Backpack</h2>
            </div>
            <div className="absolute top-0 right-0 bg-yellow-400 cursor-pointe z-50 w-full h-full flex justify-center items-center card-overlay">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white cursor-pointer"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="max-w-sm shadow-xl relative card rounded-md overflow-hidden">
            <div className="relative">
              <img src={png3} alt="Funeral" className="w-96 h-60" />
              <div className="custom-shape-divider-bottom-1635508836">
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                    className="shape-fill"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="absolute bottom-4 px-4">
              <span className="text-sm text-gray-500 -mb-1 block">
                Many variants
              </span>
              <h2 className="text-xl text-green-700">Shoe</h2>
            </div>
            <div className="absolute top-0 right-0 bg-green-700 cursor-pointe z-50 w-full h-full flex justify-center items-center card-overlay">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white cursor-pointer"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
