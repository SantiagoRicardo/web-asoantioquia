// index.page.tsx
import React from "react";
import Hero from "./(pages-lib)/components/Hero";
import { Services } from "./(pages-lib)/components";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Services />
    </div>
  );
};

export default HomePage;
