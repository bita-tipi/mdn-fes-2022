import { CLASS_DATA, F } from "../../../assets/data/constants";
import MapInfoModal from "../modalF2";
import "./floor.css"
import F3 from "../../../assets/img/map_F3.svg";


export default function F3Map() {

    return (
    <div>
        <div>
            <img src={F3}className="MAP"/>
        </div>
        <div className="modal">
            {MapInfoModal( F[4], CLASS_DATA.GRADE2.J2A )}
        </div>
    </div>
    );
}