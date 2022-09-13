import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Route, BrowserRouter } from "react-router-dom";
import Top from "./routes/top/top";
import Contents from "./routes/contents/contents";
import TopBack from "./routes/top_back/top_back";
import Tyui from "./routes/tyui/tyui";
import Header from "./routes/header/headermain";
import Map from "./routes/map/map";
import StampRally from "./routes/stamp_rally/stamp_rally";
import List from "./routes/list/list";
import Koutyou from "./routes/koutyou/koutyou";
import Theme from "./routes/theme/theme";
import Zenya from "./routes/zenya/zenya";
import Schedule from "./routes/schedule/schedule";
import { Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { useCallback, useState } from "react";
import GRADE1 from "./assets/data/grade1";
import { rootCertificates } from "tls";

export const has = { hasVisited: true };
const container = document.getElementById("root");
if (container) {
    const root = createRoot(container);
    root.render(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Top />} />
                <Route path="/contents" element={<Contents />} />
                <Route path="/top_back" element={<TopBack />} />
                <Route path="/tyui" element={<Tyui />} />
                <Route path="/headermain" element={<Header />} />
                <Route path="/headermain_koutyou" element={<Koutyou />} />
                <Route path="/map" element={<Map />} />
                <Route path="/stamp_rally" element={<StampRally />} />
                <Route path="/list" element={<List />} />
                <Route path="/koutyou" element={<Koutyou />} />
                <Route path="/theme" element={<Theme />} />
                <Route path="/zenya" element={<Zenya />} />
                <Route path="/schedule" element={<Schedule />} />
            </Routes>
        </BrowserRouter>,
    );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
export const classTable = [
    { classHash: "1", className: "G1A" },
    { classHash: "1", className: "G1B" },
    { classHash: "1", className: "G1C" },
    { classHash: "1", className: "G1D" },
    { classHash: "1", className: "G1E" },
    { classHash: "1", className: "G1F" },
    { classHash: "1", className: "G1G" },
    { classHash: "1", className: "G1H" },
    { classHash: "1", className: "G1I" },
    { classHash: "1", className: "G1J" },
    { classHash: "1", className: "T1A" },
    { classHash: "1", className: "T1B" },
    { classHash: "1", className: "T1C" },
    { classHash: "1", className: "T1D" },
    { classHash: "1", className: "G2A" },
    { classHash: "1", className: "G2B" },
    { classHash: "1", className: "G2C" },
    { classHash: "1", className: "G2D" },
    { classHash: "1", className: "G2E" },
    { classHash: "1", className: "G2F" },
    { classHash: "1", className: "G2G" },
    { classHash: "1", className: "G2H" },
    { classHash: "1", className: "G2I" },
    { classHash: "1", className: "G2J" },
    { classHash: "1", className: "G2K" },
    { classHash: "1", className: "T2A" },
    { classHash: "1", className: "T2B" },
    { classHash: "1", className: "T2C" },
    { classHash: "1", className: "J2A" },
    { classHash: "1", className: "J2B" },
    { classHash: "1", className: "G3F" },
    { classHash: "1", className: "G3H" },
    { classHash: "1", className: "G3J" },
    { classHash: "1", className: "G3K" },
    { classHash: "1", className: "T3A" },
    { classHash: "1", className: "T3D" },
];

export const stampTable = [
    { className: "G1A", stampIndex: 4 },
    { className: "G1B", stampIndex: 7 },
    { className: "G1C", stampIndex: 1 },
    { className: "G1D", stampIndex: 0 },
    { className: "G1E", stampIndex: 8 },
    { className: "G1F", stampIndex: 1 },
    { className: "G1G", stampIndex: 6 },
    { className: "G1H", stampIndex: 0 },
    { className: "G1I", stampIndex: 6 },
    { className: "G1J", stampIndex: 0 },
    { className: "T1A", stampIndex: 0 },
    { className: "T1B", stampIndex: 4 },
    { className: "T1C", stampIndex: 3 },
    { className: "T1D", stampIndex: 2 },
    { className: "G2A", stampIndex: 4 },
    { className: "G2B", stampIndex: 3 },
    { className: "G2C", stampIndex: 6 },
    { className: "G2D", stampIndex: 3 },
    { className: "G2E", stampIndex: 8 },
    { className: "G2F", stampIndex: 3 },
    { className: "G2G", stampIndex: 2 },
    { className: "G2H", stampIndex: 7 },
    { className: "G2I", stampIndex: 6 },
    { className: "G2J", stampIndex: 5 },
    { className: "G2K", stampIndex: 0 },
    { className: "T2A", stampIndex: 4 },
    { className: "T2B", stampIndex: 4 },
    { className: "T2C", stampIndex: 7 },
    { className: "J2A", stampIndex: 5 },
    { className: "J3B", stampIndex: 5 },
    { className: "G3F", stampIndex: 1 },
    { className: "G3H", stampIndex: 7 },
    { className: "G3K", stampIndex: 2 },
    { className: "T3A", stampIndex: 2 },
    { className: "T3D", stampIndex: 1 },
];
