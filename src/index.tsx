import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Route, BrowserRouter } from "react-router-dom";
import Top from "./routes/top";
import Contents from "./routes/contents";
import Top_back from "./routes/top_back";
import Tyui from "./routes/tyui";
import Header from "./routes/headermain";
import Header_koutyou from "./routes/headermain_koutyou";
import Map from "./routes/map";
import Stamp_rally from "./routes/stamp_rally";
import List from "./routes/list";
import Koutyou from "./routes/koutyou";
import Theme from "./routes/theme";
import Zenya from "./routes/zenya";
import Schedule from "./routes/schedule";
import { Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
if (container) {
    const root = createRoot(container);
    root.render(
        <BrowserRouter>
            <Routes>
                {/* old - v5: <Route path="/" component={Top} /> */}
                {/* new - v6: <Route path="/" element={<Top />} /> */}

                <Route path="/" element={<Top />} />
                <Route path="/contents" element={<Contents />} />
                <Route path="/top_back" element={<Top_back />} />
                <Route path="/tyui" element={<Tyui />} />
                <Route path="/headermain" element={<Header />} />
                <Route
                    path="/headermain_koutyou"
                    element={<Header_koutyou />}
                />
                <Route path="/map" element={<Map />} />
                <Route path="/stamp_rally" element={<Stamp_rally />} />
                <Route path="/list" element={<List />} />
                <Route path="/koutyou" element={<Koutyou />} />
                <Route path="/theme" element={<Theme />} />
                <Route path="/zenya" element={<Zenya />} />
                <Route path="/schedule" element={<Schedule />} />
            </Routes>
        </BrowserRouter>
    );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
