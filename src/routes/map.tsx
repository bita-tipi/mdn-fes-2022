import { url } from "inspector";
import React from "react";
import logo from "../logo.svg";
import map_list from "../assets/img/map_list.svg"
import './map.css';
import { Link, NavLink, useHistory } from "react-router-dom";
import Header from "./headermain"
import b_1 from "../assets/img/map_1_b.svg"
import y_1 from "../assets/img/map_1_y.svg"
import y_2 from "../assets/img/map_2_y.svg"
import b_2 from "../assets/img/map_2_b.svg"
import y_3 from "../assets/img/map_3_y.svg"
import b_3 from "../assets/img/map_3_b.svg"
import y_4 from "../assets/img/map_4_y.svg"
import b_4 from "../assets/img/map_4_b.svg"

function Map() {
    return (
        <div className="background_map">
            <div>
            <img src={y_1} className="map_1"/>
            <img src={b_2} className="map_2"/>
            <img src={b_3} className="map_3"/>
            <img src={b_4} className="map_4"/>
            </div>
            <div>
            <Link to={"/list"}>
            <img src={map_list} className="list"/>
            </Link>
            <div className="setumei"></div>
            </div>
            <Header/>
        </div>
    );
}

export default Map;