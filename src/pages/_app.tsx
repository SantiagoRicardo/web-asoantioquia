import React from "react";

import "./app.css";

import { Header } from "./(pages-lib)/components/Header";
import { Layout } from "./(pages-lib)/components/Layout";
import { Recycle } from "./(pages-lib)/components/Recycle";
import { Services } from "./(pages-lib)/components/Services";

const HomePage = () => {
  return (
    <Layout>
      <Header />
      <Services />
      <Recycle />
    </Layout>
  );
};

export default HomePage;
