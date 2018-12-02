import React from "react";
import Tap from "./Tap";
import PropTypes from "prop-types";

const MenuList = props => {
  return (
    <div>
      {props.menuList.map((tap, index) => (
        <Tap
          name={tap.name}
          brewer={tap.brewer}
          description={tap.description}
          abv={tap.abv}
          price={tap.price}
          remaining={tap.remaining}
          onSoldTap={props.onSoldTap}
          onFillingUp={props.onFillingUp}
          currentRouterPath={props.currentRouterPath}
          onAlert={props.onAlert}
          key={index}
          index={index}
        />
      ))}
    </div>
  );
};

MenuList.proptypes = {
  menuList: PropTypes.array,
  currentRouterPath: PropTypes.string
};
export default MenuList;
