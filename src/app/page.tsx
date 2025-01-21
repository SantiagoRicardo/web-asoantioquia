import React from "react";

import { Services } from "./(pages-lib)/components/Services";
import { Recycle } from "./(pages-lib)/components/Recycle";
import { Hero } from "./(pages-lib)/components";
import ImageSection from "./(pages-lib)/components/Image";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Recycle />
      <ImageSection />
    </>
  );
};

export default HomePage;
