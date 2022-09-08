import React from "react";
import "./koutyou.css";
import setumei from "../../assets/img/koutyou_setumei.svg";
import syasin from "../../assets/img/koutyou_syasin.svg";

function Koutyou() {
    return (
        <body className="background_koutyou">
            <div className="Kty">
                <img src={syasin} className="syasin" />
                <img src={setumei} className="koutyousetumei" />
            </div>
        </body>
    );
}

export default Koutyou;
