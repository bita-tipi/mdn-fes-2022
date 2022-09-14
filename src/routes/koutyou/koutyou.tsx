import React from "react";
import "./koutyou.css";
import setumei from "../../assets/img/koutyo_setumei.svg";
import syasin from "../../assets/img/koutyou_syasin.svg";

function Koutyou() {
    return (
        <body className="background_koutyou">
            <div className="Kty">
                <img
                    src={setumei}
                    className="koutyousetumei"
                    alt="koutyousetumei"
                />
            </div>
        </body>
    );
}

export default Koutyou;
