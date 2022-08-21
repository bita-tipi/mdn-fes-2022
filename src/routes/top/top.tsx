import top_center from "../../assets/img/top_center.svg";
import top_link from "../../assets/img/top_link.svg";
import schedule from "../../assets/img/schedule.svg";
import obi from "../../assets/img/2022.svg";
import top_moji from "../../assets/img/top_moji.svg";
import bottom_moji from "../../assets/img/bottom_moji.svg";
import "./top.css";
import { Link } from "react-router-dom";

function Top() {
    return (
        <body className="top_container">
            <div>
                <img src={top_center} className="top_center" />
                <Link to={"/contents"} className="top_link">
                    <img src={top_link} />
                </Link>
                <Link to={"/top_back"}>
                    <img src={schedule} className="schedule" />
                </Link>
                <img src={obi} className="obi" />
                <img src={top_moji} className="top_moji" />
                <img src={bottom_moji} className="bottom_moji" />
            </div>
        </body>
    );
}

export default Top;
