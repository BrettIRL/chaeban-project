import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InputForm from "components/InputForm";
import OutputPage from "components/OutputPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/output" component={OutputPage} />
      </Switch>
    </Router>
  );
}

export default App;
