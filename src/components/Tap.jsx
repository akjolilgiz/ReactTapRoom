import React from 'react';
import PropTypes from 'prop-types';

function Tap(props){
  return (
    <div>
        <style jsx>{`
          div {
            background-color: gray;
          }
        `}</style>
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