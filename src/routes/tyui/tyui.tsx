import React from "react";
import kanban from "../../assets/img/tyui_kanban.svg";
import "./tyui.css";
import Header from "../header/headermain";

function Tyui() {
    return (
        <div>
            <header className="background_tyui">
                <div className="tyui">
                    <img src={kanban} className="kanban" alt="kanban" />
                </div>
            </header>
        </div>
    );
}

export default Tyui;
