import React from "react";
import style from "styled-components";
import { Navbar, Sidebar, Card } from "../../components";
const Container = style.div`
  padding-left: 150px;
  height: 10px;
  
`;
const Row = style.div`
  display:flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Col = style.div`
  width: calc((100% / 12) * 3);
  border: 1px solid red;
  
`;
function HomePage() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Container>
        <Row>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export { HomePage };
