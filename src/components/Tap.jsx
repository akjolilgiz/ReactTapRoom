import React from "react";
import PropTypes from "prop-types";

function Tap(props) {
  const drinkStyle = {
    width: "600px",
    background: "silver",
    height: "500px",
    color: "gold",
    borderRadius: "10px",
    textAlign: "center",
    fontFamily: "selfish",
    border: "2px"
  };
  const imgStyle = {
    width: "200px",
    height: "200px",
    transform: "translate(150px, -150px)",
    position: "relative",
    border: "2px solid yellow",
    borderRadius: "100px"
  };
  const bottomStyle = {
    textAlign: "left",
    marginLeft: "50px",
    lineHeight: "10px",
    color: "black",
    marginTop: "50px"
  };
  const middleStyle = {
    color: "red"
  };

  function onClickSellTap() {
    props.onSoldTap(props.index);
  }
  return (
    <div style={drinkStyle}>
      <h1>{props.name}</h1>
      <div style={middleStyle}>
        <p>By {props.brewer}</p>
        <p>
          <em>"{props.description}"</em>
        </p>
      </div>
      <div style={bottomStyle}>
        <p>Abv: {props.abv}</p>
        <p>Price: {props.price} $</p>
        <p>Remainig: {props.remaining}</p>
      </div>
      <button onClick={onClickSellTap}>Order</button>
      {/* <img style={imgStyle} src={props.image} /> */}
    </div>
  );
}

Tap.propTypes = {
  names: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
  remaining: PropTypes.number,
  image: PropTypes.string
  // index: PropTypes.number
};

export default Tap;
