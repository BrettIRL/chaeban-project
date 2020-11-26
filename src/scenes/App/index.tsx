import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InputForm from "scenes/InputForm";
import OutputPage from "scenes/OutputPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={InputForm} />
        <Route path="/output" component={OutputPage} />
      </Switch>
    </Router>
  );
}

export default App;
