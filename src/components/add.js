import React from "react";

function Add() {
  return(
    <>
    <h1>Add a cat</h1>
    <form>
      <div>
        <label>Name: </label>
        <input type="text"/>
        <label>Rating: </label>
        <input type="radio"/> 1 star
        <input type="radio"/> 2 star
        <input type="radio"/> 3 star
        <input type="radio"/> 4 star
        <input type="radio"/> 5 star
      </div>
    </form>
    </>
  ); 
}

export default Add;