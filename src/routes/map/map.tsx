import React from "react";
import { useState } from "react";
import map_list from "../../assets/img/map_list.svg";
import "./map.css";
import { Link } from "react-router-dom";
import Header from "../header/headermain";
import f1_none from "../../assets/img/map_1_b.svg";
import f1_hovered from "../../assets/img/map_1_y.svg";
import f2_none from "../../assets/img/map_2_b.svg";
import f2_hovered from "../../assets/img/map_2_y.svg";
import f3_none from "../../assets/img/map_3_b.svg";
import f3_hovered from "../../assets/img/map_3_y.svg";
import f4_none from "../../assets/img/map_4_b.svg";
import f4_hovered from "../../assets/img/map_4_y.svg";
import map_info from "../../assets/img/info.svg";
import F1Map from "./maps/f1";
import F2Map from "./maps/f2";
import F3Map from "./maps/f3";
import F4Map from "./maps/f4";

const selectorStruct = [
    [f1_none, f2_none, f3_none, f4_none],
    [f1_hovered, f2_hovered, f3_hovered, f4_hovered],
];

const floorMaps = [F1Map(), F2Map(), F3Map(), F4Map()];

function Map() {
    const [currentFloorIndex, updateFloorIndex] = useState(0);

    function clickHandler(index: number) {
        updateFloorIndex(index);
        console.log(`, ${index + 1}F`);
    }

    function floorSelector() {
        let selector = [];
        for (let index = 0; index < selectorStruct[0].length; index++) {
            const isSelected = currentFloorIndex === index;
            selector.push(
                <div>
                    <img
                        src={selectorStruct[Number(isSelected)][index]}
                        onClick={() => clickHandler(index)}
                        className={"floor_selector f" + (index + 1)}
                        alt=""
                    />
                </div>
            );
        }
        return selector;
    }

    return (
        <div className="background_map">
            <div>
                <Link to={"/list"}>
                    <img src={map_list} className="list" />
                </Link>
                <div className="setumei"></div>
            </div>
            <div>
                <img src={map_info} className="info" />
            </div>
            <div className="map_main">{floorMaps[currentFloorIndex]}</div>
            <div>{floorSelector()}</div>
        </div>
    )
}

export default Map;
