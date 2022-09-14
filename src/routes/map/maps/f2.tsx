import { classDataType, CLASS_DATA } from "../../../assets/data/constants";
import "./maps.css";
import F2 from "../../../assets/img/maps/map_F2.svg";

export default function F2Map(
    updateModalData: (classData: classDataType) => void,
) {
    return (
        <img src={F2}/>
    );
}
