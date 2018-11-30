import React from "react";
import NewTapForm from "./NewTapForm";

function Admin() {
  <Switch>
    <Route path="/Details" component={Details} />
    <Route path="/Admin" component={Admin} />
  </Switch>;
}

export default Admin;
