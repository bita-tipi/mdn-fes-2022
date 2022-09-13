import { classDataType } from "../../../assets/data/constants";
import F4 from "../../../assets/img/maps/map_F4.svg";

export default function F4Map(
    updateModalData: (classData: classDataType) => void,
) {
    return (
        <div>
            <img src={F4} className="map-img" alt="map-img" />
        </div>
    );
}
