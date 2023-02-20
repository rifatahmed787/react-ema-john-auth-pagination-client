import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import img from "../../../assets/images/banner-images/discount-removebg-preview.png";
import "../FeaturedItems/Featured.css";
import { Icon } from "@iconify/react";
import Spinner from "../../../components/Spinner/Spinner";
import { Link } from "react-router-dom";

const Featured = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHoures] = useState("00");
  const [timerMin, setTimerMin] = useState("00");
  const [timerSec, setTimerSec] = useState("00");
  let interval = useRef();
  const startTimer = () => {
    const countdownDate = new Date("March 01, 2023 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHoures(hours);
        setTimerMin(minutes);
        setTimerSec(seconds);
      }
    }, 1000);
  };

  //componentDidMount
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  const { data: featureds = [], isLoading } = useQuery({
    queryKey: ["featured"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/featured");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container mx-auto dark:text-white">
      <div className="flex items-center rounded-lg bg-indigo-100 dark:bg-black">
        <div className="container ml-auto mr-auto flex flex-wrap items-start">
          <div className="w-full pl-5 lg:pl-2 mb-4 mt-4">
            <h1 className="capitalize text-3xl md:text-4xl lg:text-6xl text-center mb-10  text-indigo-600">
              Featured
            </h1>
          </div>
          {featureds.map((featured) => (
            <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2 dark:bg-black dark:text-white">
              <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                <figure className="mb-2">
                  <img
                    src={featured.img}
                    alt=""
                    className="h-64 ml-auto mr-auto"
                  />
                </figure>
                <div className="rounded-lg p-4 bg-orange-500 flex flex-col">
                  <div>
                    <h5 className="text-black text-2xl font-bold leading-none">
                      New product launches
                    </h5>
                    <span className="text-sm text-black leading-none">
                      {featured.seller}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="text-lg text-black font-semibold">
                      ${featured.price}
                    </div>
                    <Link
                      to="/shop"
                      className="rounded-full bg-black text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none ml-auto w-10 h-10  transition duration-300"
                    >
                      <button>
                        <Icon
                          className="stroke-current mt-1.5 ml-1.5"
                          icon="material-symbols:arrow-forward"
                          width="26"
                        />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="mx-auto">
            <img src={img} alt="" className="w-3/5" />
            <div className="flex mx-auto">
              <section>
                <p>{timerDays}</p>
                <p>
                  <small>days</small>
                </p>
              </section>
              <span>:</span>
              <section>
                <p>{timerHours}</p>
                <p>
                  <small>Hours</small>
                </p>
              </section>
              <span>:</span>
              <section>
                <p>{timerMin}</p>
                <p>
                  <small>Minutes</small>
                </p>
              </section>
              <span>:</span>
              <section>
                <p>{timerSec}</p>
                <p>
                  <small>Seconds</small>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
