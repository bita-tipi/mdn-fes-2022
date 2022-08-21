import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import backbottun from "../assets/img/backbottun.png";
import header_main from "../assets/img/header_main.png";
import menu from "../assets/img/home_menu.svg";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    return (
        <header className="header">
            <img
                src={backbottun}
                onClick={() => navigate(-1)}
                className="back_button"
            />
            <img src={header_main} className="header_main" />
            <Link to={"/"}>
                <img src={menu} className="menu" />
            </Link>
        </header>
    );
}
