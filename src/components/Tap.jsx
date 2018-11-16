import React from 'react';
import PropTypes from 'prop-types';

function Tap(props){

  const drinkStyle = {
    width: '600px',
    background: 'silver',
    height: '600px',
    color: 'black',
    borderRadius: '10px',
  }
  const imgStyle = {
    width: '100px',
    height: '100px',
  }
  return (
      <div style={drinkStyle}>
        <h1>{props.name}</h1>
        <p>By {props.brewer}</p>
        <p><em>"{props.description}"</em></p>
        <p>{props.abv}</p>
        <p>{props.price} $</p>
        <h7>Remainig: {props.remaining}</h7>
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