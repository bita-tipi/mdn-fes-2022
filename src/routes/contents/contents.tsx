import React from "react";
import speaker from "../../assets/img/speaker.svg"
import arrow from "../../assets/img/arrow.svg"
import "./contents.css";
import { Link } from "react-router-dom";

function Contents() {
    function getContentsList() {
        let contentsEles = []
        const contentsList = [
            { link: "/map", text: "#MAP" },
            { link: "/theme", text: "#テーマ" },
            { link: "/tyui", text: "#注意事項" },
            { link: "/zenya", text: "#前夕祭" },
            { link: "/koutyou", text: "#学校長あいさつ" },
            { link: "/stamp_rally", text: "#スタンプラリー" },
            { link: "/schedule", text: "#スケジュール" },
        ]

        for (let i = 0; i < contentsList.length; i++) {
            contentsEles.push(
                <Link to={contentsList[i].link} className="contents-link">
                    <div className="contents">
                        <p className="contents-title">{contentsList[i].text}</p>
                        <svg className="contents-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 478.64 80.92">
                            <g>
                                <path className="contents-0" d="M0,20.95H448.66c16.55,0,29.99,13.44,29.99,29.99h0c0,16.55-13.44,29.99-29.99,29.99H29.99C13.44,80.92,0,67.49,0,50.94V20.95H0Z" />
                                <path className="contents-1" d="M0,6.75H448.66c16.55,0,29.99,13.44,29.99,29.99h0c0,16.55-13.44,29.99-29.99,29.99H29.99C13.44,66.73,0,53.29,0,36.74V6.75H0Z" />
                                <circle className="contents-2" cx="20.96" cy="32.65" r="7.7" />
                            </g>
                            <g>
                                <path className={`contents-change-${i % 2}`} d="M422.66,3.95c.38-1.29,1.58-2.17,2.9-2.17h13.54c1.32,0,2.53,.61,3.32,1.66,.79,1.06,1.02,2.39,.65,3.65l-10.57,35.44-8.26-5.31-13.03,6.37,11.45-39.65Z" />
                                <path className="contents-4" d="M439.11,3.28c1.76,0,3.03,1.7,2.53,3.39l-10,33.53-7.29-4.68-10.75,5.26,10.51-36.4c.19-.65,.79-1.09,1.46-1.09h13.54m0-3h-13.54c-1.99,0-3.77,1.33-4.34,3.23l-10.52,36.42-1.88,6.5,6.08-2.97,9.24-4.51,5.87,3.77,3.36,2.16,1.14-3.82,10-33.53c.51-1.72,.19-3.54-.88-4.98-1.07-1.44-2.72-2.27-4.52-2.27h0Z" />
                            </g>
                            <g>
                                <path className={`contents-change-${i % 2}`} d="M378.86,71.91c-1.33,0-2.55-.61-3.34-1.68-.8-1.07-1.03-2.41-.65-3.69l18.16-60.89c.73-2.45,3.02-4.16,5.58-4.16h11.27c1.37,0,2.62,.63,3.43,1.72,.82,1.09,1.06,2.47,.67,3.78l-18.38,61.62c-.54,1.79-2.15,3.02-4.02,3.05l-12.71,.24Z" />
                                <path className="contents-4" d="M409.86,3c1.86,0,3.19,1.79,2.66,3.57l-18.38,61.62c-.35,1.16-1.4,1.96-2.61,1.98l-12.63,.24h-.05c-1.78,0-3.07-1.72-2.56-3.44l18.16-60.89c.55-1.83,2.23-3.08,4.14-3.08h11.27m0-3h-11.27c-3.21,0-6.1,2.15-7.01,5.23l-18.16,60.89c-.52,1.73-.19,3.56,.89,5.01,1.08,1.45,2.74,2.28,4.55,2.28h.11l12.63-.24c2.53-.05,4.71-1.71,5.43-4.13l18.38-61.62c.53-1.77,.2-3.63-.9-5.1-1.1-1.48-2.79-2.33-4.63-2.33h0Z" />
                            </g>
                        </svg>
                    </div>
                </Link>
            )
        }
        return contentsEles;
    }

    return (
        <div className="background">
            <span className="contents-container">
                <div className="contents-event">
                    <img src={speaker} className="svg-icon" />
                    <span className="event-text">イベント告知</span>
                    <img src={arrow} className="svg-icon arrow" />
                </div>
                {getContentsList()}
            </span>
        </div>
    );
}

export default Contents;
