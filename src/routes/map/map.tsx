import React from "react";
import { useState } from "react";
import map_list from "../../assets/img/map_list.svg";
import "./map.css";
import { Link } from "react-router-dom";
import Header from "../header/headermain";
import F1Map from "./maps/f1";
import F2Map from "./maps/f2";
import F3Map from "./maps/f3";
import F4Map from "./maps/f4";
import F5Map from "./maps/f5";
import MapInfoModal from "./modal";
import { CLASS_DATA, F } from "../../assets/data/constants";

const floorMaps = [F1Map(), F2Map(), F3Map(), F4Map(), F5Map()];

function Map() {
    const [currentFloorIndex, updateFloorIndex] = useState(0);

    function clickHandler(index: number) {
        updateFloorIndex(index);
        console.log(`, ${index + 1}F`);
    }

    function floorSelector() {
        let selector = [];
        const floorTexts = [
            { text: "1F", n: 34 },
            { text: "2F", n: 34 },
            { text: "3F", n: 34 },
            { text: "4F", n: 34 },
            { text: "5,6F", n: 20 },
        ]

        for (let index = 0; index < floorTexts.length; index++) {
            const isSelected = currentFloorIndex === index;
            selector.push(
                <svg className="floor_selector" onClick={() => clickHandler(index)} viewBox="0 0 137.25 39.81">
                    <g>
                        <rect y="8.54" width="137.25" height="31.27" rx="15.63" style={{ fill: isSelected ? '#e2bf57' : '#78bbcf' }} />
                        <rect width="137.25" height="31.27" rx="15.63" style={{ fill: '#f3f9f8' }} />
                        <text className="floor_selector_text" style={{ transform: `translate(${floorTexts[index].n}%, 25px)` }}>{floorTexts[index].text}</text>
                    </g>
                </svg>
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
                    {MapInfoModal(F[1], CLASS_DATA.GRADE1.G1B)}
                </div>
            </div>
        </div>
    );
}

export default Map;
