import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Hello, Fundebug!</p>
                    <a
                        className="App-link"
                        href="https://www.fundebug.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        免费试用
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
