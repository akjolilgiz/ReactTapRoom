import React from 'react';
import Navbar from './Navbar';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Homepage from './Homepage';
import Details from './Details';
import Admin from './Admin'; 

function App(){
  var styles = {
    backgroundColor: 'yellow',
  };
  return (
    <div style={styles}>
      <Navbar/>  
      <Header/>
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/Details' component={Details} />
      <Route path='/Admin' component={Admin} />
      </Switch>
    </div>
  );
}


export default App;
