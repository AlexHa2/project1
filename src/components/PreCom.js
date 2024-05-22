import React from "react";
// import MainCom from "./share/MainCom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Content/Content.css";
export default function PreCom({ playerDATA }) {
  return (
    <div className="container">
      {playerDATA.map((player) => (
        // <div className="cart" key={player.id}>
        <div className="col-12 col-md-6 col-lg-4" key={player.id}>
          <img src={player.img}></img>
          <p>{player.name}</p>
          <p>{player.club}</p>
          <p>
            <button>Detail</button>
          </p>
        </div>
      ))}
    </div>
  );
}
