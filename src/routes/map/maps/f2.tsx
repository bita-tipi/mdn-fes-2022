import { CLASS_DATA, F } from "../../../assets/data/constants";
import MapInfoModal from "../modalF2";
import "./floor.css"
import F2 from "../../../assets/img/map_F2.svg";


export default function F2Map() {

    return (
    <div>
        <div>
            <img src={F2}className="MAP"/>
        </div>
        <div className="modal">
            {MapInfoModal( F[4], CLASS_DATA.GRADE2.J2A )}
        </div>
    </div>
    );
}