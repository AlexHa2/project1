import React, { Component } from "react";
import "./NavBar.css";
export default class NavBar extends Component {
  render() {
    return (
      <div className="header">
        <nav>
          <ul>
            <li classNameName="trasition">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact US</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
