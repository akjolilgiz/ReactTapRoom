import React from "react";
import NewTapForm from "./NewTapForm";

function Admin() {
  return (
    <div>
      <h1>asdasdas</h1>
      <NewTapForm onNewTap={this.handleNewTap} />
      <div>
        <MenuList
          MenuList={props.MenuList}
          currentRoutePath={props.currentRoutePath}
        />
      </div>
    </div>
  );
}

export default Admin;
