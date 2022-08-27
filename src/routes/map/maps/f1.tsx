import { CLASS_DATA, F } from "../../../assets/data/constants";
import MapInfoModal from "../modal";
import "./floor.css"
import F1 from "../../../assets/img/map_F1.svg";


export default function F1Map() {

    return (
    <div>
        <div>
            <img src={F1}/>
        </div>
        <div className="modal">
            {MapInfoModal( F[4], CLASS_DATA.GRADE2.J2A )}
        </div>
    </div>
    );
}