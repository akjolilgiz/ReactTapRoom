import React, { Component } from "react";

const NewTapForm = props => {
  function handleAddingNewTap(event) {
    event.preventDefault();
    props.onNewTap({
      name: _name.value,
      brewer: _brewer.value,
      description: _description.value,
      abv: _abv.value,
      orice: _orice.value,
      remaining: _remaining.value,
      url: _url.value
    });
    _names.value = "";
    _location.value = "";
    _issue.value = "";
  }
  return (
    <div>
      <h1>Add a new tap!</h1>
      <form>
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
            _remaining = input;
          }}
        />
        <input
          type="text"
          id="image"
          placeholder="Enter image url"
          ref={input => {
            _url = input;
          }}
        />
        <button type="submit">Add!</button>
      </form>
    </div>
  );
};

export default NewTapForm;
