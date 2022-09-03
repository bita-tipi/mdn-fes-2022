import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import backbottun from "../../assets/img/backbottun.png";
import header_main from "../../assets/img/header_main.png";
import menu from "../../assets/img/home_menu.svg";
import { useNavigate, useLocation } from "react-router-dom";

const shouldHideHeaderRouterList = ["/"];

export default function Header() {
    const navigate = useNavigate();
    const router = useLocation();

    const shouldHideHeader = shouldHideHeaderRouterList.every(
        (val) => val === router.pathname
    );
    const shouldMakeGoldenHeader = router.pathname === "/koutyou";

    const headerStyle = {
        backgroundColor: shouldMakeGoldenHeader ? "#ebebd4" : "#eeeeee",
    };

    return !shouldHideHeader ? (
        <header className="header" style={headerStyle}>
            <div className="header-container">
                <img
                    src={backbottun}
                    onClick={() => navigate(-1)}
                    className="back_button"
                />
                <img src={header_main} className="header_main" />
                <Link to={"/"}>
                    <img src={menu} className="menu" />
                </Link>
            </div>
        </header>
    ) : (
        <div></div>
    );
}
