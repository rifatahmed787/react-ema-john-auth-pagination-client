import React from "react";
import Carousel from "./Carousel/Carousel";
import Category from "./CategoryItems/Category";
import Connect from "./Connect/Connect";
import Wave from "./Wave/Wave";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Category />
      <Connect />
      <Wave />
    </div>
  );
};

export default Home;
