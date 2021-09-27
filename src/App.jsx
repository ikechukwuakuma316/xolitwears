import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Pages
import Homepage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Homepage />
          {/* <div>good</div> */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
