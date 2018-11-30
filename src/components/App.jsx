import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Homepage from "./Homepage";
import Details from "./Details";
import Admin from "./Admin";
import { Switch, Route } from "react-router-dom";

function App() {
  var styles = {
    backgroundColor: "yellow"
  };
  return (
    <div style={styles}>
      <Navbar />
      <Header />
      <Switch>
        {/* <Route exact path="/Admin" component={Homepage} /> */}
        <Route exact path="/" component={Homepage} />
        <Route path="/Details" component={Details} />
      </Switch>
    </div>
  );
}

export default App;
