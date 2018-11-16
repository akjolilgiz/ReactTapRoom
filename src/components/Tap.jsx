import React from 'react';
import PropTypes from 'prop-types';

function Tap(props){
  const drinkStyle = {
    width: '200px',
    background: 'silver',
  }
  return (
    <div>
        <style jsx>{`
          div {
            background-color: gray;
          }
        `}</style>
      <div className="row">
      <h2>{props.name}</h2>
      <p>{props.brewer}</p>
      <p><em>{props.description}</em></p>
      <p>{props.abv}</p>
      <p>{props.price}&</p>
      <p>{props.remaining}</p>
      <hr/>
    </div>
  );
}

Tap.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Tap;