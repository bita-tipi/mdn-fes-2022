import React, { useEffect } from "react";
import { useState } from "react";
import back from "../../assets/img/background_stamp.svg";
import bingo from "../../assets/img/stamp_setumei.svg";
import stamp1 from "../../assets/img/AMP.svg";
import stamp2 from "../../assets/img/locket.svg";
import stamp3 from "../../assets/img/earth.svg";
import stamp4 from "../../assets/img/lens.svg";
import stamp5 from "../../assets/img/lanthanum.svg";
import stamp6 from "../../assets/img/shoes.svg";
import stamp7 from "../../assets/img/gun.svg";
import stamp8 from "../../assets/img/bell.svg";
import stamp9 from "../../assets/img/umbrella.svg";
import popButton from "../../assets/img/pop_button.svg";
import yellowCell from "../../assets/img/back_y.svg";
import pinkCell from "../../assets/img/back_p.svg";
import "./stamp_rally.css";
import { assert } from "../../assets/data/constants";
import { useLocation } from "react-router-dom";
import { getStampIndex } from "../../model/hash-table";
import { LocalStorage } from "../../model/hash-table";


const stamps = [
    stamp1,
    stamp2,
    stamp3,
    stamp4,
    stamp5,
    stamp6,
    stamp7,
    stamp8,
    stamp9,
];

const initShowedStamp = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
];
function Stamp_rally() {

    function Google() {
        const redirectToGoogle = () => {
          window.location.href = "https://forms.gle/RRAP5cKD1NNMoMWUA";
        };
    }
    //
    // reactHooks definition; do not remove
    const [currentShowedStamp, updateShowedStamp] = useState(initShowedStamp);

    // initShowedStampの引数のtruthyIndex番目をtrueにするよ
    function updateIndexedShowedStamp2Truthy(truthyIndex: number) {
        assert(Number.isInteger(truthyIndex));
        const deepCopiedList = JSON.parse(JSON.stringify(currentShowedStamp));
        deepCopiedList[truthyIndex] = true;
        updateShowedStamp(deepCopiedList);
        new LocalStorage("data").register(
            { showedStamp: currentShowedStamp }
            )
    }
    // -- definition end --

    const location = useLocation().search;
    const wholeParam = new URLSearchParams(location);
    const hashParam = wholeParam.get("c");
    console.log(`hashParam => ${hashParam}`);

    // 1度だけ実行する
    useEffect( () => {
        const data = new LocalStorage("data").get();
if (data !== null) {
    // localStorageから読み込み
    const storedShowedStamp = JSON.parse(data).showedStamp as boolean[];
    // そのまま shouldStamp をアップデート
    updateShowedStamp(storedShowedStamp);
}
        // パラメーターが存在したかの確認 -> スタンプラリーの処理はじめ
        if (hashParam !== null && !initShowedStamp.every((v) => v)) {
            const stampIndex = getStampIndex(hashParam);

            // stampIndex番目のinitShowedStampをtrueをするよ
            updateIndexedShowedStamp2Truthy(stampIndex);

            new LocalStorage("data").register({
                showedStamp:currentShowedStamp,
            });
        }
        return;

    },[]);

    const getStampElement = () => {
        let stampElement = [];

        for (let index = 0; index < stamps.length; index++) {
            stampElement.push(
                <div key={index}>
                    {
                        // セル (背景の枠) の表示
                        <img
                            src={index % 2 === 0 ? pinkCell : yellowCell}
                            alt="cell" className="back_stamp"
                        />
                    }
                    {
                        // スタンプの表示
                        currentShowedStamp[index] ? (
                            <img src={stamps[index]} alt="stamps" className="main_stamp"/>
                        ) : (
                            <></>
                        )
                    }
                    {
                        // 3回に1回改行を挿入
                        (index + 1) % 3 === 0 ? <br /> : <></>
                    }
                </div>,
            );
        }
        return stampElement;
    };

    return (
        <body className="background_stamp">
            <div className="stamp_main">
                <div className="flex">{getStampElement()}</div>
                <img src={popButton} className="bingo" onClick={Google} />
                <img src={bingo} className="bingo" alt="bingo" />
            </div>
        </body>
    );
}

export default Stamp_rally;

