import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

var fundebug = require("fundebug-javascript");
fundebug.apikey = "API-KEY";

// require("fundebug-revideo");

// fundebug.test();

// var a = [];
// console.log(a[0].b);

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        // 将报错发送到Fundebug
        fundebug.notifyError(error, {
            metaData: {
                info: info
            }
        });
    }

    render() {
        if (this.state.hasError) {
            return null;
            // 也可以在出错的component处展示出错信息
            // return <h1>出错了!</h1>;
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
