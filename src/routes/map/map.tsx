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
import f5_none from "../../assets/img/map_5_b.svg";
import f5_hovered from "../../assets/img/map_5_y.svg";
import F1Map from "./maps/f1";
import F2Map from "./maps/f2";
import F3Map from "./maps/f3";
import F4Map from "./maps/f4";
import F5Map from "./maps/f5";
import MapInfoModal from "./modal";
import { CLASS_DATA, F } from "../../assets/data/constants";

const selectorStruct = [
    [f1_none, f2_none, f3_none, f4_none,f5_none],
    [f1_hovered, f2_hovered, f3_hovered, f4_hovered,f5_hovered],
];

const floorMaps = [F1Map(), F2Map(), F3Map(), F4Map(),F5Map()];

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
                <div className="floor_selector">
                    <img
                        src={selectorStruct[Number(isSelected)][index]}
                        onClick={() => clickHandler(index)}
                        alt=""
                    />
                </div>
            );
        }
        return selector;
    }

    return (
        <div>
            <div className="background_map">
                <div className="floor_selector_container">
                    {floorSelector()}
                </div>
                <div className="map_main">{floorMaps[currentFloorIndex]}</div>
                <div className="map_info_modal_container">
                    {MapInfoModal(F[1], CLASS_DATA.GRADE2.J2B)}
                </div>
            </div>
        </div>
    );
}

export default Map;
