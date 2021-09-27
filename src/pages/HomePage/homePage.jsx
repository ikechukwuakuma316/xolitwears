import React from "react";
import { Navbar, Sidebar, Card } from "../../components";

function HomePage() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <div style={{ display: "flex" }}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export { HomePage };
