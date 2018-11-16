import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const style = {
    backgroundColor: 'gray',
    color: '#fff2e6',
    fontFamily: 'Allerta Stencil',
    padding: '20px',
    textAlign: 'right',
    width: '99%',
    fontSize: '10px',
    marginTop: '1px',
    height: '20px',
  }
  const textStyle={
    marginRight: '20px',
  }
  return(
    <div>
      <div className="Navbar" style={style} >
      <h3 style={textStyle}>About | <Link to="/Admin">Admin</Link></h3>
      </div>
    </div>
  );
}

export default Navbar;