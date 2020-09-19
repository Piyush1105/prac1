import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Data from "./Cards_data";

const Example = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.imgsrc} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button href={props.link}>More Info</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;