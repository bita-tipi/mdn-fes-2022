import { url } from "inspector";
import React from "react";
import logo from "../logo.svg";
import map_list from "../assets/img/map_list.svg"
import './map.css';
import { Link, NavLink, useHistory } from "react-router-dom";
import Header from "./headermain"

function Map() {
    return (
        <div className="background_map">
            <Link to={"/list"}>
            <img src={map_list} className="list"/>
            </Link>
            <div className="setumei"></div>
            <Header/>
        </div>
    );
}

export default Map;