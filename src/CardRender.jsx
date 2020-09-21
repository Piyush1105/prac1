import React, { Component } from "react";
import Cards from "./Cards";
import Data from "./Cards_data";

class CardRender extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          {Data.map((data) => (
            <div className="col-md-4" key={data.imgsrc}>
              <Cards
                imgsrc={data.imgsrc}
                name={data.name}
                role={data.role}
                link={data.link}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CardRender;
