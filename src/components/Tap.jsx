import React from 'react';
import PropTypes from 'prop-types';

function Tap(props){
  const drinkStyle = {
    width: '500px',
    background: 'silver',
    height: '400px',
  }
  const imgStyle = {
    height: '400px',
  }
  return (
    <div style={drinkStyle}>
      <h2>{props.name}</h2>
      <p>{props.brewer}</p>
      <p><em>{props.description}</em></p>
      <p>{props.abv}</p>
      <p>{props.price}&</p>
      <p>{props.remaining}</p>
      <p style={imgStyle}>{props.image}</p>
      <hr/>
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