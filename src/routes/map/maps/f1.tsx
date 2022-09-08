import { CLASS_DATA, F } from "../../../assets/data/constants";

import F1 from "../../../assets/img/map_F1.svg";


export default function F1Map() {

    return (
    <div>
        <div className="MAP2">
            <img src={F1} className="map-img"/>
            <div className="G3J" onClick={ => MapInfoModal(F[1], CLASS_DATA.GRADE1.G1A)}></div>
        </div>
    </div>
    );
}
