import "react-native-gesture-handler";
import React, { Component, Dispatch } from "react";
import { StyleSheet, Button } from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainMenu from "./src/scenes/MainMenu";
import CharacterSheet from "./src/scenes/CharacterSheet/CharacterSheet";
import Store from "./src/store/Store";
import { Provider } from "react-redux";
import ExportPDFView from "./src/scenes/ExportPDFView";
import ShareCharacterScreen from "./src/scenes/ShareCharacterScreen";
import SaveView from "./src/scenes/SaveView";
import OpenCharacterView from "./src/scenes/OpenCharacterView";
import BugReportView from "./src/scenes/BugReportView";
import AboutView from "./src/scenes/AboutView";
import Build from "./src/scenes/Build/Build";
import * as FileSystem from "expo-file-system";
import {Asset} from "expo-asset";
import connect, { sql } from "@databases/expo";

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
        const Drawer = createDrawerNavigator<RootDrawerParamList>();

        return (
            <Provider store={Store}>
                <NavigationContainer>
                    <Drawer.Navigator initialRouteName="CharacterSheet">
                        <Drawer.Screen 
                            name="MainMenu"
                            component={MainMenu}
                            options={{
                                title: "Main Menu"
                            }}
                        />
                        {/* 
                        Not implemented yet
                        <Drawer.Screen
                            name="ExportPDFView"
                            component={ExportPDFView}
                            options={{title: "Export PDF"}}
                        /> 
                        */}
                        <Drawer.Screen 
                            name="Build"
                            component={Build}
                            options={{ title: "Build Character" }}
                        />
                        <Drawer.Screen 
                            name="CharacterSheet"
                            component={CharacterSheet}
                            // options={}
                        />
                        {/* 
                        Not implemented yet
                        <Drawer.Screen
                            name="ShareCharacterView"
                            component={ShareCharacterScreen}
                            options={{title: "Share Your Build"}}
                        /> */}
                        <Drawer.Screen
                            name="SaveView"
                            component={SaveView}
                            options={{title: "Save As"}}
                        />
                        <Drawer.Screen
                            name="OpenCharacterView"
                            component={OpenCharacterView}
                            options={{title: "Load Character"}}
                        />
                        <Drawer.Screen
                            name="BugReportView"
                            component={BugReportView}
                            options={{title: "Bug Report"}}
                        />
                        <Drawer.Screen
                            name="AboutView"
                            component={AboutView}
                            options={{title: "About"}}
                        />
                    </Drawer.Navigator>
                </NavigationContainer>
            </Provider>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
