import { classDataType, CLASS_DATA } from "../../../assets/data/constants";
import F5 from "../../../assets/img/maps/map_F5.svg";

export default function F5Map(
    updateModalData: (classData: classDataType, floorIndex?: number) => void,
) {
    return (
        <img src={F5} className="map-img" alt="map-img" />
    );
}
