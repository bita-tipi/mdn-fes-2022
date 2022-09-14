import React from "react";
import "./map.css";
import F1Map from "./maps/f1";
import F2Map from "./maps/f2";
import F3Map from "./maps/f3";
import F4Map from "./maps/f4";
import F5Map from "./maps/f5";
import MapInfoModal from "./modal";
import { assert, classDataType } from "../../assets/data/constants";
import { useRecoilState, useSetRecoilState } from "recoil";
import { modalDataState, floorIndexState } from "../../model/atom";

function Map() {
    //
    //
    // reactHooks definition; do not remove

    //
    // `floorIndexState`
    //          └ getter -> selectedFloorIndex
    //          └ setter -> updateFloorIndex
    //
    const [selectedFloorIndex, updateFloorIndex] =
        useRecoilState(floorIndexState);

    // modalDataStatusのスナップショット
    const modalDataStateSnap = useSetRecoilState(modalDataState);

    /**
     * ## updater (setter) of `ModalDataState`
     * @param classData  `classDataType`
     * @param floorIndex optional: `number? (0 - 5)` ?? `selectedFloorIndex`
     */
    function updateModalData(classData: classDataType, floorIndex?: number) {
        if (floorIndex !== undefined) {
            assert(
                Number.isInteger(floorIndex) &&
                    floorIndex >= 0 &&
                    floorIndex <= 5,
            );
        }

        modalDataStateSnap((_) => ({
            classData: classData,

            // `floorIndex`のオーバーライドがなければ, (floorIndex === undefined)
            // 選択されている階を使用する
            floorIndex: floorIndex ?? selectedFloorIndex,
        }));
    }
    // -- definition end --

    function floorMaps() {
        const mapsElement = [F1Map, F2Map, F3Map, F4Map, F5Map];
        return mapsElement[selectedFloorIndex](updateModalData);
    }

    function clickHandler(index: number) {
        assert(Number.isInteger(index) && index >= 0 && index <= 4);
        updateFloorIndex(index);
    }

    function floorSelector() {
        let selector = [];
        const floorTexts = [
            { text: "1F", n: 34 },
            { text: "2F", n: 34 },
            { text: "3F", n: 34 },
            { text: "4F", n: 34 },
            { text: "5,6F", n: 20 },
        ];

        for (let index = 0; index < floorTexts.length; index++) {
            const isSelected = selectedFloorIndex === index;
            selector.push(
                <svg
                    className="floor_selector"
                    onClick={() => clickHandler(index)}
                    viewBox="0 0 137.25 39.81"
                >
                    <g>
                        <rect
                            y="8.54"
                            width="137.25"
                            height="31.27"
                            rx="15.63"
                            style={{ fill: isSelected ? "#e2bf57" : "#78bbcf" }}
                        />
                        <rect
                            width="137.25"
                            height="31.27"
                            rx="15.63"
                            style={{ fill: "#f3f9f8" }}
                        />
                        <text
                            className="floor_selector_text"
                            style={{
                                transform: `translate(${floorTexts[index].n}%, 25px)`,
                            }}
                        >
                            {floorTexts[index].text}
                        </text>
                    </g>
                </svg>,
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
                <div className="map_main">{floorMaps()}</div>
                <div className="map_info_modal_container">{MapInfoModal()}</div>
            </div>
        </div>
    );
}

export default Map;
