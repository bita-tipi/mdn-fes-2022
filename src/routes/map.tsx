import { url } from "inspector";
import React from "react";
import {useState} from "react";
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
    const [G1] = useState(true);
    const [G3] = useState(false);
    const [G2] = useState(false);
    const [G4] = useState(false);
    function s_1(){
        const G1=true;
        const G2=false;
        const G3=false;
        const G4=false;
    }
    function s_2(){
        const G1=false;
        const G2=true;
        const G3=false;
        const G4=false;
    }
    function s_3(){
        const G1=false;
        const G2=false;
        const G3=true;
        const G4=false;
    }
    function s_4(){
        const G1=false;
        const G2=false;
        const G3=false;
        const G4=true;
    }
    return (
        <div className="background_map">
            <div>
                <div>
                    {G1
                        ? <img src={y_1} onClick={s_1} className="map_1"/>
                        : <img src={b_1} onClick={s_1} className="map_1"/>}
                </div>
                <div>
                    {G2
                        ? <img src={y_2} onClick={s_2} className="map_2"/>
                        : <img src={b_2} onClick={s_2} className="map_2"/>}
                </div>
                <div>
                    {G3
                        ? <img src={y_3} onClick={s_3} className="map_3"/>
                        : <img src={b_3} onClick={s_3} className="map_3"/>}
                </div>
                <div>
                    {G4
                        ? <img src={y_4} onClick={s_4} className="map_4"/>
                        : <img src={b_4} onClick={s_4} className="map_4"/>}
                </div>
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