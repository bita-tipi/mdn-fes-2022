import React from "react";
import "./header_koutyou.css";
import { useNavigate } from "react-router-dom";
import backbottun from "../../assets/img/backbottun.png";
import header_main from "../../assets/img/header_main.png";
import menu from "../../assets/img/home_menu.svg";
import { Link } from "react-router-dom";

export default function Header_koutyou() {
    const navigate = useNavigate();

    return (
        <header className="header_koutyou">
            <img
                src={backbottun}
                onClick={() => navigate(-1)}
                className="back_button_koutyou"
            />
            <img src={header_main} className="header_main_koutyou" />
            <Link to={"/"}>
                <img src={menu} className="menu" />
            </Link>
        </header>
    );
}
