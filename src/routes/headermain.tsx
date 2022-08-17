import { url } from "inspector";
import React from "react";
import './header.css';
import { Link, NavLink, useHistory } from "react-router-dom";
import backbottun from "../assets/img/backbottun.png"
import header_main from "../assets/img/header_main.png"
import menu from "../assets/img/home_menu.svg"

export default function Header() {
    function handleClick() {
        history.goBack();
      }
    let history = useHistory();
    return (
      <header className="header">
            <img src={backbottun} onClick={handleClick} className="back_button"/>
            <img src={header_main} className="header_main"/>
            <Link to={"/"}>
            <img src={menu}className="menu"/>
            </Link>
      </header>
    )
  }
