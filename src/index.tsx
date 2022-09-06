import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Route, BrowserRouter } from "react-router-dom";
import Top from "./routes/top/top";
import Contents from "./routes/contents/contents";
import Top_back from "./routes/top_back/top_back";
import Tyui from "./routes/tyui/tyui";
import Header from "./routes/header/headermain";
import Map from "./routes/map/map";
import Stamp_rally from "./routes/stamp_rally/stamp_rally";
import List from "./routes/list/list";
import Koutyou from "./routes/koutyou/koutyou";
import Theme from "./routes/theme/theme";
import Zenya from "./routes/zenya/zenya";
import Schedule from "./routes/schedule/schedule";
import { Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { useCallback, useState } from 'react'
import { AdobeFonts } from 'react-adobe-fonts'

const container = document.getElementById("root");
if (container) {
    const root = createRoot(container);
    root.render(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Top />} />
                <Route path="/contents" element={<Contents />} />
                <Route path="/top_back" element={<Top_back />} />
                <Route path="/tyui" element={<Tyui />} />
                <Route path="/headermain" element={<Header />} />
                <Route path="/headermain_koutyou" element={<Koutyou />} />
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

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const onLoading = useCallback(() => {
    setIsLoading(true)
  }, [])

  const onActive = useCallback(() => {
    setIsLoading(false)
    setIsActive(true)
  }, [])

  return (
    <div>
      <AdobeFonts kitId="euj7egy" onLoading={onLoading} onActive={onActive} />

      <div>isLoading: {isLoading ? 'true' : 'false'}</div>
      <div>isActive: {isActive ? 'true' : 'false'}</div>
    </div>
  )
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
