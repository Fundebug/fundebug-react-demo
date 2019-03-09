import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

var fundebug = require("fundebug-javascript");
require("fundebug-revideo");
fundebug.apikey =
    "f24f3b42fd3124c501961746c4768e0945edaefda04b58d84f30a1137b33be13";

// TEST01: 测试fundebug.notify接口，阔以收到报警邮件
// fundebug.notify("TEST 01", "Hello, Fundebug!");

setTimeout(function() {
    fundebug.test();
}, 5000);

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        // 将component中的报错发送到Fundebug
        fundebug.notifyError(error, {
            metaData: {
                info: info
            }
        });
    }

    render() {
        if (this.state.hasError) {
            return null;
            // Note: 也可以在出错的component处展示出错信息，返回自定义的结果。
        }
        return this.props.children;
    }
}

ReactDOM.render(
    <ErrorBoundary>
        {" "}
        <App />{" "}
    </ErrorBoundary>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
