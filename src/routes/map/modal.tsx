import { classDataType, F } from "../../assets/data/constants";
import "./map.css";
import infoBackgroundImage from "../../assets/img/info.svg";

export default function MapInfoModal(
    selectedFloor: F,
    selectedClassData: classDataType
    ){
    return(
        <div>
            <div>
            <img src={infoBackgroundImage} className={"map_info_modal_img"}/>
            </div>
        <div className="modal">
                <p className="floor">{selectedFloor}</p>
                <p className="className">{selectedClassData.className}</p>
                <p className="title_map">{selectedClassData.title}</p>
                <p className="description">{selectedClassData.description}</p>
        </div>
        </div>
    );
    
}
