import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Route, BrowserRouter } from "react-router-dom";
import Top from "./routes/top";
import Contents from "./routes/contents";
import Header from "./routes/header"
import Top_back from "./routes/top_back";
import Tyui from "./routes/tyui";
import Map from "./routes/map";
import Stamp_rally from "./routes/stamp_rally";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Top} />
        <Route exact path="/contents" component={Contents} />
        <Route exact path="/top_back" component={Top_back} />
        <Route exact path="/tyui" component={Tyui} />
        <Route exact path="/header" component={Header} />
        <Route exact path="/map" component={Map} />
        <Route exact path="/stamp_rally" component={Stamp_rally} />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
