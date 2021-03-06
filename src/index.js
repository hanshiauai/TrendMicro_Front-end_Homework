import '@babel/polyfill';
import React from "react";
import ReactDOM from "react-dom";
import Root from "./containers/Root.js";
import {store} from "./store";

ReactDOM.render(
    <Root store={store} />,
    document.getElementById('container')
)
