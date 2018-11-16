import React from 'react';
import Navbar from './Navbar';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Homepage from './Homepage';

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
      </Switch>
    </div>
  );
}


export default App;
