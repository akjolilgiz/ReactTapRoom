import React from 'react';

function Header() {
  let imgUrl='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-hnm5qgf5ur9fsiemsefum58ea3-20171019173603.Medi.jpeg'
  const style = {
    backgroundColor: 'black',
    color: 'white',
    fontFamily: 'Allerta Stencil',
    padding: '20px',
    textAlign: 'center',
    left: '0',
    width: '100%',
    fontSize: '36px',
    marginTop: '1px',
    backgroundImage: 'url("https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-hnm5qgf5ur9fsiemsefum58ea3-20171019173603.Medi.jpeg")', 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

  }
  return(
    <div style={style}>
      <h1>Welcome to AJ's Tap Room!!!</h1>
    </div>
  );
}

export default Header;