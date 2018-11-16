import React from 'react';
import PropTypes from 'prop-types';

function Tap(props){

  const drinkStyle = {
    width: '600px',
    background: 'silver',
    height: '500px',
    color: 'gold',
    borderRadius: '10px',
    textAlign: 'center',
    fontFamily: 'selfish',
  }
  const imgStyle = {
    width: '200px',
    height: '200px',
    transform: 'translate(80px, -200px)',
    position: 'relative',
  }
  const bottomStyle = {
    textAlign: 'left',
    marginLeft: '30px',
    lineHeight: '10px',
    color: 'black',
  }
  const middleStyle = {
    color: 'red',
  }
  return (
      <div style={drinkStyle}>
        <h1>{props.name}</h1>
        <div style={middleStyle}>
        <p>By {props.brewer}</p>
        <p><em>"{props.description}"</em></p>
        </div>
        <div style={bottomStyle}>
          <p>{props.abv}</p>
          <p>{props.price} $</p>
          <p>Remainig: {props.remaining}</p>
        </div>
     <img style={imgStyle} src={props.image}/>
    </div>
    
  );
}

Tap.propTypes = {
  names: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
  remaining: PropTypes.string,
  image: PropTypes.string,
};

export default Tap;