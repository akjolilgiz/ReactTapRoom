import React from "react";
import NewTapForm from "./NewTapForm";
import MenuList from "./MenuList";
import PropTypes from "prop-types";

function Admin(props) {
  return (
    <div>
      <div>
        <NewTapForm onNewTap={props.onNewTap} />
        <MenuList
          menuList={props.menuList}
          currentRouterPath={props.currentRouterPath}
          onAlert={props.onAlert}
          onSoldTap={props.onSoldTap}
          onFillingUp={props.onFillingUp}
          onDelete={props.onDelete}
        />
      </div>
    </div>
  );
}
Admin.propTypes = {
  MenuList: PropTypes.array,
  currentRouterPath: PropTypes.string
};

export default Admin;
