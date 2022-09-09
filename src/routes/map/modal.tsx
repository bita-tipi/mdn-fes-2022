import { classDataType, F } from "../../assets/data/constants";
import "./map.css";
import infoBackgroundImage from "../../assets/img/info.svg";

export default function MapInfoModal(
    selectedFloor: F,
    selectedClassData: classDataType
    ){
    return(
        <div>
            <img src={infoBackgroundImage} className={"map_info_modal_img"}/>
            <div>
                {/* <p className="floor_F2">{selectedFloor}</p>
                <p className="className_F2">{selectedClassData.className}</p>
                <p className="title_map_F2">{selectedClassData.title}</p>
                <p className="description_F2">{selectedClassData.description}</p> */}
            </div>
        </div>
    );
    
}
