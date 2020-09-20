import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import CardRender from './CardRender';



function Home() {
  return (
  <>
      <Navbar />
      
      
      <CardRender />
      
      
      <Footer />
  </>
  );
}

export default Home;
