import React, { Component } from "react";
import Cards from "./Cards";
import Data from "./Cards_data";


class CardRender extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
          <Cards
              imgsrc={Data[0].imgsrc}
              name={Data[0].name}
              role={Data[0].role}
              link={Data[0].link}
            />
          </div>
          <div className="col-md-4">
            <Cards
              imgsrc={Data[1].imgsrc}
              name={Data[1].name}
              role={Data[1].role}
              link={Data[1].link}
            />
          </div>
          <div className="col-md-4">
            <Cards
              imgsrc={Data[2].imgsrc}
              name={Data[2].name}
              role={Data[2].role}
              link={Data[2].link}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CardRender;
