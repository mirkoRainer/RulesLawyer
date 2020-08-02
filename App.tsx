import "react-native-gesture-handler";
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import Store from "./src/store/Store";
import { Provider } from "react-redux";
import * as FileSystem from "expo-file-system";
import {Asset} from "expo-asset";
import connect from "@databases/expo";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { default as theme } from "./custom-theme.json";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { AppNavigator } from "./src/AppNavigator";

//https://reactnavigation.org/docs/typescript/
export type RootDrawerParamList = {
    MainMenu: undefined;
    CharacterSheet: undefined;
    Build: undefined;
    ExportPDFView: undefined;
    ShareCharacterView: undefined;
    SaveView: undefined;
    OpenCharacterView: undefined;
    BugReportView: undefined;
    AboutView: undefined;
}


async function copyDBFromBundleToDocumentDirectory() {
    const dbName = "pf2e.sqlite"; 
    const sqlDirectory = FileSystem.documentDirectory + "SQLite/";
    if (!(await FileSystem.getInfoAsync(sqlDirectory + dbName)).exists) {
        await FileSystem.makeDirectoryAsync(sqlDirectory, {intermediates: true});
        const asset = Asset.fromModule(require("./assets/pf2e.db"));
        await FileSystem.downloadAsync(asset.uri, sqlDirectory + dbName);
    }
}

export const db = connect("pf2e.sqlite");

export default class App extends Component {
    async componentDidMount(){
        await copyDBFromBundleToDocumentDirectory();
    }

    render(){

        return (
            <Provider store={Store}>
                <IconRegistry icons={EvaIconsPack} />
                <ApplicationProvider {...eva} theme={{...eva.dark, ...theme}}>
                    <AppNavigator />
                </ApplicationProvider>
            </Provider>
        );
    }
}




