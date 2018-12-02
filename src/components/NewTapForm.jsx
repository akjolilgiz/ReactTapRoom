import React, { Component } from "react";

const NewTapForm = props => {
  let _name = null;
  let _brewer = null;
  let _description = null;
  let _abv = null;
  let _price = null;
  let _remaining = null;

  function handleAddingNewTap(event) {
    event.preventDefault();
    props.onNewTap({
      name: _name.value,
      brewer: _brewer.value,
      description: _description.value,
      abv: _abv.value,
      price: _price.value,
      remaining: _remaining.value
    });
    _name.value = "";
    _brewer.value = "";
    _description.value = "";
    _abv.value = "";
    _price.value = "";
  }
  return (
    <div>
      <h1>Add a new tap!</h1>
      <form onSubmit={handleAddingNewTap}>
        <input
          type="text"
          id="name"
          placeholder="Tap Name"
          ref={input => {
            _name = input;
          }}
        />
        <input
          type="text"
          id="brewer"
          placeholder="Brewer Name"
          ref={input => {
            _brewer = input;
          }}
        />
        <input
          type="text"
          id="Description"
          placeholder="Enter Description"
          ref={input => {
            _description = input;
          }}
        />
        <input
          type="text"
          id="abv"
          placeholder="Alcohol by volume"
          ref={input => {
            _abv = input;
          }}
        />
        <input
          type="text"
          id="price"
          placeholder="Enter Price"
          ref={input => {
            _price = input;
          }}
        />
        <input
          type="text"
          id="Remaining"
          placeholder="Amount on stock"
          ref={input => {
            _remaining = parseInt(input);
          }}
        />
        <button type="submit">Add!</button>
      </form>
    </div>
  );
};

export default NewTapForm;
