import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Card.css";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

function Cards(props) {
  return (
    <>
      <div className="Card" /*full_container*/>
        <div className="view overlay" /*card_image*/>
          <img className="cardImgTop" src={props.imgsrc} alt="CardImageCap" />
          </div>

          <div /*Card_Content*/ className="cardBody">
            <h4 className="cardTitle">{props.name}</h4>
            <p class="cardText">Some quick example text to build on the card title and make up the bulk of the card's
    content.</p>
            <a href={props.link} className ="btn btnPrimary">
              More Info
            </a>
          </div>
        </div>
      
    </>
  );
}

export default Cards;