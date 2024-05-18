import React, { Component } from "react";
import { Players } from "../share/listOfPlayer";
import "./Content.css";

export default class NewContent extends Component {
  render() {
    const handleOnclick = function () {
      alert("HIEN CAI QUAN QUE");
    };
    return (
      <>
        <div className="collum">
          {Players.map((Players) => (
            <div className="cart" key={Players.id}>
              <img src={Players.img} alt=""></img>
              <p>{Players.club}</p>
              <p>{Players.name}</p>
              <p>
                <button onMouseOver={handleOnclick}>ViewDetail</button>
              </p>
            </div>
          ))}
        </div>
      </>
    );
  }
}
