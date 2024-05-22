import React, { Component } from "react";
import { Players } from "./listOfPlayer";
import PreCom from "../PreCom";

export default class MainCom extends Component {
  constructor() {
    super();
    this.state = {
      playerData: Players,
    };
  }

  render() {
    return (
      <div>
        <PreCom playerDATA={this.state.playerData} />
      </div>
    );
  }
}
