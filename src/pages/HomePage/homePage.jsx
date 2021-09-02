import React from "react";
import { Navbar } from "../../components";
import { Sidebar } from "../../components";

function HomePage() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
    </div>
  );
}

export { HomePage };
