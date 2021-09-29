import React from "react";
import style from "styled-components";
import { Navbar, Sidebar, Card } from "../../components";
import product from "../../components/Card/product";

const Container = style.div`
  padding-left: 150px;
  @media only screen and (max-width: 480px) {
    padding:0px;
  }
  
`;
const Row = style.div`
  display:flex;
  // justify-content: space-between;
  flex-wrap: wrap;
`;
const Col = style.div`
  width: calc((100% / 12) * 3);
  @media only screen and (max-width: 480px) {
    width: calc((100% / 12) * 6)
  } 
  padding: 15px 25px;
`;

function HomePage() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Container>
        <Row>
          {product.map((val, index) => {
            return (
              <Col key={index}>
                <Card image={val.image} price={val.price} title={val.title} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export { HomePage };
