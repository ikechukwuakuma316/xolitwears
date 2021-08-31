import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components";
//Pages
// import Homepage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* <Route exact path="/">
          <Homepage />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
