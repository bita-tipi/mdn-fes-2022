import { classDataType } from "../../../assets/data/constants";
import F3 from "../../../assets/img/maps/map_F3.svg";

export default function F3Map(
    updateModalData: (classData: classDataType) => void,
) {
    return (
        <div>
            <img src={F3} className="map-img" alt="map-img" />
        </div>
    );
}
