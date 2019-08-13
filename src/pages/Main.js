import React from "react";
import './Main.css';
import logo from "../assets/logo.svg";
import like from "../assets/like.svg";
import dislike from "../assets/dislike.svg";

export default function Main({ match }) {
  return (
    <div className="main-container">
      <img src={logo} alt="tindev" />
      <li>
        <img src="" alt="" />
        <footer>
          <strong>Davillo Aurélio</strong>
          <p>Um dev louco</p>
        </footer>
        <div className="buttons">
          <button type="button">
            <img src={dislike} alt="Dislike" />
          </button>
          <button type="button">
            <img src={like} alt="Like" />
          </button>
        </div>
      </li>
    </div>
  );
}
