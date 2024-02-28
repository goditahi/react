import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardTitle from "react-bootstrap/esm/CardTitle";

const Cards = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "40px",
        padding: "20px",
      }}
    >
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={props.image}
          alt="https://images.pexels.com/photos/3330895/pexels-photo-3330895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Card.Body>
          <Card.Title>{props.CardTitle}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">{props.link}</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
