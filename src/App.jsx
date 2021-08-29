import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Pages
import Homepage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
