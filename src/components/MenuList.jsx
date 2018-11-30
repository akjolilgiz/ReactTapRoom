import React from "react";
import Tap from "./Tap";

const MenuList = props => {
  return (
    <div>
      {props.MenuList.map((tap, index) => (
        <Tap
          name={tap.name}
          brewer={tap.brewer}
          description={tap.description}
          abv={tap.abv}
          price={tap.price}
          remaining={tap.remaining}
          onSoldTap={props.onSoldTap}
          key={index}
          index={index}
        />
      ))}
    </div>
  );
};
export default MenuList;
