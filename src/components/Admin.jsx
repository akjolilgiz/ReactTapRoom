import React from 'react';

function Admin(){
  return (
    <div>
    <h1>Add a new tap!</h1>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Tap Name'/>
        <input
          type='text'
          id='brewer'
          placeholder='Brewer Name'/>
        <input
          type='text'
          id='Description'
          placeholder='Enter Description'/>
        <input
          type='text'
          id='abv'
          placeholder='Alcohol by volume'/>
        <input
          type='text'
          id='price'
          placeholder='Enter Price'/>
        <input
          type='text'
          id='Remaining'
          placeholder='Amount on stock'/>
        <input
          type='text'
          id='image'
          placeholder='Enter image url'/>
        <button type='submit'>Add!</button>
      </form>
    </div>
  );
}

export default Admin;