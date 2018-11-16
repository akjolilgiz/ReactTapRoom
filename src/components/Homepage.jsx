import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';

function Homepage() {
  const style = {
    backgroundColor: '#1a0d00',
    color: '#fff2e6',
    fontFamily: 'Allerta Stencil',
    padding: '20px',
    textAlign: 'center',
    // position: 'absolute',
    left: '0',
    width: '100%',
    fontSize: '36px',
    marginTop: '30px'
  }
  return(
    <div style={style}>
      <Menu/>
    </div>
  );
}

export default Homepage;