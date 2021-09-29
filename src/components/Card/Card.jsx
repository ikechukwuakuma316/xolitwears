import React from "react";
import _Card from "./Card.style";

const Card = (props) => {
  return (
    <>
      <_Card.Container>
        <_Card.Image src={props.image} />
        <_Card.Description>
          <h3>&#8358;{props.price}</h3>
          <p>{props.title}</p>
        </_Card.Description>
      </_Card.Container>
    </>
  );
};

export default Card;
