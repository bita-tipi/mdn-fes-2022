import { url } from "inspector";
import React from "react";
import './header.css';
import { Link, NavLink, useHistory } from "react-router-dom";
import backbottun from "../assets/img/backbottun.png"

export default function Header() {
    function handleClick() {
        history.goBack;
      }
    let history = useHistory();
    return (
      <header className="header">
        <div>
            <img src={backbottun} onClick={handleClick} className="back_button"/>
        </div>
      </header>
    )
  }
