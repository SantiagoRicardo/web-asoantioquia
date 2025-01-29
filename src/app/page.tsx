import React from "react";

import { Services } from "./(pages-lib)/components/Services";
import { Recycle } from "./(pages-lib)/components/Recycle";
import { Hero } from "./(pages-lib)/components";
import ImageSection from "./(pages-lib)/components/Image";
import FormContact from "./(pages-lib)/components/Form/FormContact";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Recycle />
      <ImageSection />
      <FormContact />
    </>
  );
};

export default HomePage;
