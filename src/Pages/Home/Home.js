import React from "react";
import TitleHook from "../../Hooks/TitleHook/TitleHook";
import Carousel from "./Carousel/Carousel";
import Category from "./CategoryItems/Category";
import Connect from "./Connect/Connect";
import Featured from "./FeaturedItems/Featured";
import Wave from "./Wave/Wave";

const Home = () => {
  TitleHook("Home");
  return (
    <div>
      <Carousel />
      <Category />
      <Featured />
      <Connect />
      <Wave />
    </div>
  );
};

export default Home;
