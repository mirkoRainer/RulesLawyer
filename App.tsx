import React, { Component } from "react";
import Store from "./src/store/Store";
import { Provider } from "react-redux";
import ThemeWrapper from "./src/ThemeWrapper";
import { autoSaver } from "./src/storage/autosaver";

export default class App extends Component {
    /**
     *
     */
    constructor(props: {} | Readonly<{}>) {
        super(props);
        Store.subscribe(autoSaver);
    }
    render() {
        return (
            <Provider store={Store}>
                <ThemeWrapper />
            </Provider>
        );
    }
}
