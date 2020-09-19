import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cards from "./Cards";
import Data from "./Cards_data";



function Home() {
  return (
  <>
      <Navbar />
      
      
      <Cards 
        imgsrc={Data[0].imgsrc}
        name={Data[0].name}
        link={Data[0].link}
      />
      <Cards 
        imgsrc={Data[1].imgsrc}
        name={Data[1].name}
        link={Data[1].link}
      />
      <Cards 
        imgsrc={Data[2].imgsrc}
        name={Data[2].name}
        link={Data[2].link}
      />
      <Footer />
  </>
  );
}

export default Home;
