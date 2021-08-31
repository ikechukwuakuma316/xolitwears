import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components";

//Pages
// import Homepage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      {/* <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch> */}
    </Router>
  );
}

export default App;
