import React from "react";
import _Card from "./Card.style";
import shirt from "../../assets/images/shirt.jpeg";

const Card = () => {
  return (
    <>
      <_Card.Container>
        <_Card.Image src={shirt} />
        <_Card.Description>
          <h3>&#8358;6,000</h3>
          <p>Top Selling product</p>
        </_Card.Description>
      </_Card.Container>
    </>
  );
};

export default Card;
