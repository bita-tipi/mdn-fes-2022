import "./map.css";
import infoBackgroundImage from "../../assets/img/info.svg";
import { useRecoilValue } from "recoil";
import { modalDataState } from "../../model/atom";

export default function MapInfoModal() {
    const currentModalData = useRecoilValue(modalDataState);

    return (
        <div className="modal_container">
            <div className="hikidashi-tab"></div>
            <div className="modal">
                <div className="modal_header">
                    <p className="floor">
                        {currentModalData.floorIndex + 1 + "F"}
                    </p>
                    <span className="delimiter"></span>
                    <p className="class_name">
                        {currentModalData.classData.className}
                    </p>
                </div>
                <p className="title">asdf</p>
                <p className="description">
                    {currentModalData.classData.description}
                </p>
            </div>

            <img
                className="map_info_modal_img"
                src={infoBackgroundImage}
                alt=""
            />
        </div>
    );
}
