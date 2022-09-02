import React from "react";
import "./koutyou.css";
import setumei from "../../assets/img/koutyou_setumei.svg";
import syasin from "../../assets/img/koutyou_syasin.svg";
import Header_koutyou from "./headermain_koutyou";


function Koutyou() {
    return (
        <body className="background_koutyou">
            <div>
                <img src={syasin} className="syasin" />
                <img src={setumei} className="koutyousetumei" />
            </div>
            <Header_koutyou />
        </body>
    );
}

export default Koutyou;
