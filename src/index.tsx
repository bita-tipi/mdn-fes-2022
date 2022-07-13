import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Route, BrowserRouter } from "react-router-dom";
import Top from "./routes/top";
import Contents from "./routes/contents";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Top} />
        <Route exact path="/contents" component={Contents} />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
