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

const stampA:boolean=true;
const stampB:boolean=false;
const stampC:boolean=false;
const stampD:boolean=false;
const stampE:boolean=false;
const stampF:boolean=false;
const stampG:boolean=false;
const stampH:boolean=false;
const stampI:boolean=false;


export default function Stamp() {

    return (
            <div>
                {stampA==true ? <img src={stamp1}></img> : <p></p>}
                {stampB==true ? <img src={stamp2}></img>: <p></p>}
                {stampC==true ? <img src={stamp3}></img>: <p></p>}
                {stampD==true ? <img src={stamp4}></img>: <p></p>}
                {stampE==true ? <img src={stamp5}></img>: <p></p>}
                {stampF==true ? <img src={stamp6}></img>: <p></p>}
                {stampG==true ? <img src={stamp7}></img>: <p></p>}
                {stampH==true ? <img src={stamp8}></img>: <p></p>}
                {stampI==true ? <img src={stamp9}></img>: <p></p>}
            </div>
    );
}