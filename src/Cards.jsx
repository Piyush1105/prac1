import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./Card.css";
import "./Cards_data";

const Cards = (props) => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img
          src={`/Images/${props.imgsrc}`}
          alt="my_image"
          className="card-img-top"
        />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.name}</h4>
        <p className="card-text text-secondary">{props.role}</p>
        <a href={props.link} className="btn btn-outline-success">
          More Info
        </a>
      </div>
    </div>
  );
};

export default Cards;
