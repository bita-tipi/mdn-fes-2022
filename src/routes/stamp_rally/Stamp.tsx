import stamp1 from "../../assets/img/AMP.svg";
import stamp2 from "../../assets/img/earth.svg";
import stamp3 from "../../assets/img/gun.svg";
import stamp4 from "../../assets/img/lens.svg";
import stamp5 from "../../assets/img/umbrella.svg";
import stamp6 from "../../assets/img/shoes.svg";
import stamp7 from "../../assets/img/gun.svg";
import stamp8 from "../../assets/img/gun.svg";
import stamp9 from "../../assets/img/gun.svg";
import "./stamp_rally.css";

const stampA = true;
const stampB = false;
const stampC = false;
const stampD = false;
const stampE = false;
const stampF = false;
const stampG = false;
const stampH = false;
const stampI = false;

export default function Stamp() {
    return (
        <div>
            {stampA ? <img src={stamp1} alt="stamp1"></img> : <></>}
            {stampB ? <img src={stamp2} alt="stamp2"></img> : <></>}
            {stampC ? <img src={stamp3} alt="stamp3"></img> : <></>}
            {stampD ? <img src={stamp4} alt="stamp4"></img> : <></>}
            {stampE ? <img src={stamp5} alt="stamp5"></img> : <></>}
            {stampF ? <img src={stamp6} alt="stamp6"></img> : <></>}
            {stampG ? <img src={stamp7} alt="stamp7"></img> : <></>}
            {stampH ? <img src={stamp8} alt="stamp8"></img> : <></>}
            {stampI ? <img src={stamp9} alt="stamp9"></img> : <></>}
        </div>
    );
}
