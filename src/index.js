import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

var fundebug = require("fundebug-javascript");
fundebug.apikey =
    "f24f3b42fd3124c501961746c4768e0945edaefda04b58d84f30a1137b33be13";

// TEST01: 测试fundebug.notify接口，阔以收到报警邮件
fundebug.notify("TEST 01", "Hello, Fundebug!");

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
