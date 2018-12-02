import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Homepage from "./Homepage";
import Admin from "./Admin";
import { Switch, Route } from "react-router-dom";
import Menu from "./Menu";

function App() {
  var styles = {
    backgroundColor: "yellow"
  };
  var menuStyle = {
    textAlign: "center"
  };
  return (
    <div style={styles}>
      <Navbar />
      <Header />
      <div style={menuStyle}>
        <Menu />
      </div>
    </div>
  );
}

export default App;
