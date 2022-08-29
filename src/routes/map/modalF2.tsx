import { classDataType, F } from "../../assets/data/constants";
import "./map.css";


export default function MapInfoModal(
    selectedFloor: F,
    selectedClassData: classDataType
){
    return(
        <div>
        <p className="floor_F2">{selectedFloor}</p>
        <p className="className_F2">{selectedClassData.className}</p>
        <p className="title_map_F2">{selectedClassData.title}</p>
        <p className="description_F2">{selectedClassData.description}</p>
        </div>
    );
}