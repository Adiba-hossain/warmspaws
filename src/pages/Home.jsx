import React from "react";
import HeroSlider from "../components/HeroSlider";
import WinterServices from "../components/WinterServices";
import WinterCareTips from "../components/WinterCareTips";
import ExpertVets from "../components/ExpertVets";
import WinterAccessories from "../components/WinterAccessories";

const Home = () => {
  return (
    <>
      <section>
        <HeroSlider />
      </section>
      <section>
        <WinterServices />
      </section>
      <section>
        <WinterCareTips />
      </section>
      <section>
        <ExpertVets />
      </section>
      <section>
        <WinterAccessories />
      </section>
    </>
  );
};

export default Home;
