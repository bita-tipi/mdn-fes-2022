import { classDataType } from "../../../assets/data/constants";
import F1 from "../../../assets/img/maps/map_F1.svg";

export default function F1Map(
    updateModalData: (classData: classDataType) => void,
) {
    return (
        <div className="MAP2">
            <img src={F1} className="map-img" alt="map-img" />
        </div>
    );
}
