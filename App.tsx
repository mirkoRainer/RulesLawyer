import React, { Component } from "react";
import Store from "./src/store/Store";
import { Provider } from "react-redux";
import ThemeWrapper from "./src/ThemeWrapper";
import { copyDBFromBundleToDocumentDirectory } from "./src/db/db";

export default class App extends Component {
    async componentDidMount(){
        await copyDBFromBundleToDocumentDirectory().catch(err => {console.debug(err);});
    }
    render(){
        return (
            <Provider store={Store}>
                <ThemeWrapper />
            </Provider>
        );
    }
}
