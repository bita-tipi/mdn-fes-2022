import { classDataType, F } from "../../assets/data/constants";


export default function MapInfoModal(
    selectedFloor: F,
    selectedClassData: classDataType
){
    return(
        <div>
        <p>{selectedFloor}</p>
        <p>{selectedClassData.className}</p>
        <p>{selectedClassData.title}</p>
        <p>{selectedClassData.description}</p>
        </div>
    );
}