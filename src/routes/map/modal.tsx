import { classDataType, F } from "../../assets/data/constants";
import "./map.css";


export default function MapInfoModal(
    selectedFloor: F,
    selectedClassData: classDataType
){
    return(
        <div>
        <p className="floor">{selectedFloor}</p>
        <p className="className">{selectedClassData.className}</p>
        <p className="title_map">{selectedClassData.title}</p>
        <p className="description">{selectedClassData.description}</p>
        </div>
    );
}