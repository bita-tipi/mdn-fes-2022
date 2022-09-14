import React from "react";
import "./index.css";
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
import { RecoilRoot } from "recoil";

export const has = { hasVisited: true };
const container = document.getElementById("root");
if (container) {
    const root = createRoot(container);
    root.render(
        <RecoilRoot>
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
            </BrowserRouter>
        </RecoilRoot>,
    );
}
