import { classDataType, F } from "../../assets/data/constants";
import "./map.css";
import infoBackgroundImage from "../../assets/img/info.svg";

export default function MapInfoModal(
    selectedFloor: F,
    selectedClassData: classDataType,
) {
    return (
        <div className="modal_container">
            <div className="hikidashi-tab"></div>
            <div className="modal">
                <div className="modal_header">
                    <p className="floor">{selectedFloor}</p>
                    <span className="delimiter"></span>
                    <p className="class_name">{selectedClassData.className}</p>
                </div>
                <p className="title">{selectedClassData.title}</p>
                <p className="description">{selectedClassData.description}</p>
            </div>

            <img
                className="map_info_modal_img"
                src={infoBackgroundImage}
                alt=""
            />
        </div>
    );
}
