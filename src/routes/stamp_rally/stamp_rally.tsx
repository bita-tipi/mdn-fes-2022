import React from "react";
import { useState } from "react";
import { useParams } from 'react-router-dom'
import stamp_camera from "../../assets/img/stamp_camera.svg";
import back from "../../assets/img/background_stamp.svg";
import memo from "../../assets/img/stamp_memo.svg";
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
import Header from "../header/headermain";
import Stamp from "./Stamp"
import {has} from "../../index"
import {classTable} from "../../index"
import {stampTable} from "../../index"


const stamp = [
    [stamp1,stamp2,stamp3,stamp4,stamp5,stamp6,stamp7,stamp8,stamp9]
];

function Stamp_rally() {

    const a =() => {
        const urlParams = useParams<{id:string}>()
        console.log(urlParams.id)
        return(
            <div>
                {urlParams.id}
            </div>
        )
    }
    
    const c = [useParams]
    
    const classHash =() => {
        return(
            <React.Fragment>
            {stampTable.map((item)=>{
                return(
                    <div>
                        <p></p>
                    </div>
                )
            
            })}
            </React.Fragment>
        )
    }

    localStorage.getItem('StampIndex')

    const stampCell = useState(false)

    const [currentStampCell, updateStampCell] = useState(0);

for(let index = 0; index < 9; index++){
    const isSelected = currentStampCell === index;
    {stampCell[index] 
        ?   <div className="stamp">

            <img src={stamp[Number(isSelected)][index]} />

            </div> 
        :<></>}

    {(index+1)%3==3
        ? <br />
        :<></>
    }
}

return (
    
        <body className="background_stamp">
            <header className="stamp_main">
            {has ?<p>正常です</p> : <p>ブラウザで利用してください</p>}
                <img src={back} className="stamp_back" />
                <img src={memo} className="memo" />
            </header>
            <div>
            </div>
        </body>
    );
}

export default Stamp_rally;
