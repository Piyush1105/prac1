import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CardRender from "./CardRender";
import APIspace from "./APIspace";

function Home() {
  return (
    <>
      <Navbar />

      <APIspace />

      <CardRender />

      <Footer />
    </>
  );
}

export default Home;
