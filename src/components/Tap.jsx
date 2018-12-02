import React from "react";
import PropTypes from "prop-types";

function Tap(props) {
  const drinkStyle = {
    width: "600px",
    background: "silver",
    height: "300px",
    color: "gold",
    borderRadius: "10px",
    fontFamily: "selfish",
    border: "2px",
    marginLeft: "25%"
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
  function handleDelete() {
    props.onDelete(props.index);
  }
  function onClickSellTap() {
    props.onSoldTap(props.index);
  }
  function onClickFillTap() {
    props.onFillingUp(props.index);
  }
  function handleAlert() {
    props.onAlert();
  }
  var buttonStyle = {
    height: "30px",
    width: "90px"
  };

  var displayedTap = null;

  if (props.currentRouterPath === "/admin") {
    return (displayedTap = (
      <div style={drinkStyle}>
        <h1>{props.name}</h1>
        <div style={middleStyle}>
          <p>By {props.brewer}</p>
          <p>
            <em>"{props.description}"</em>
          </p>
        </div>
        <div style={bottomStyle}>
          <p>Alcohol Content: {props.abv} %</p>
          <p>Price: {props.price} $</p>
          <p>Remaining: {props.remaining}</p>
        </div>
        <button style={buttonStyle} onClick={onClickFillTap}>
          Fill up
        </button>
        <button style={buttonStyle} onClick={handleDelete}>
          Delete
        </button>
      </div>
    ));
  } else {
    return (displayedTap = (
      <div style={drinkStyle}>
        <h1>{props.name}</h1>
        <div style={middleStyle}>
          <p>By {props.brewer}</p>
          <p>
            <em>"{props.description}"</em>
          </p>
        </div>
        <div style={bottomStyle}>
          <p>Alcohol Content: {props.abv} %</p>
          <p>Price: {props.price} $</p>
        </div>
        <button onClick={onClickSellTap}>Order</button>
      </div>
    ));
  }
}

Tap.propTypes = {
  names: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
  remaining: PropTypes.number,
  image: PropTypes.string,
  currentRouterPath: PropTypes.string,
  onAlert: PropTypes.func
  // index: PropTypes.number
};

export default Tap;
