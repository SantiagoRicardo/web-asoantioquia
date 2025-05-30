import React from "react";

import { Services } from "./(pages-lib)/components/Services";
import { Recycle } from "./(pages-lib)/components/Recycle";
import { Hero } from "./(pages-lib)/components";
import ImageSection from "./(pages-lib)/components/Image";
import FormContact from "./(pages-lib)/components/Form/FormContact";
import Allies from "./(pages-lib)/components/Allies";
import Location from "./(pages-lib)/components/Location";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Location />
      <ImageSection />
      <FormContact />
      <Recycle />
      <Allies />
    </>
  );
};

export default HomePage;
