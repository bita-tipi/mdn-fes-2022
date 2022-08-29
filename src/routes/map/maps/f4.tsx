import { CLASS_DATA, F } from "../../../assets/data/constants";
import MapInfoModal from "../modalF2";
import "./floor.css"
import F4 from "../../../assets/img/map_F4.svg";


export default function F4Map() {

    return (
    <div>
        <div>
            <img src={F4}className="MAP"/>
        </div>
        <div className="modal">
            {MapInfoModal( F[4], CLASS_DATA.GRADE2.J2A )}
        </div>
    </div>
    );
}