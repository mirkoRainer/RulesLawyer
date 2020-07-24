import "react-native-gesture-handler";
import React, { Component, Dispatch } from "react";
import { StyleSheet } from "react-native";
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


//https://reactnavigation.org/docs/typescript/
export type RootDrawerParamList = {
    MainMenu: undefined;
    CharacterSheet: undefined;
    ExportPDFView: undefined;
    ShareCharacterView: undefined;
    SaveView: undefined;
    OpenCharacterView: undefined;
    BugReportView: undefined;
    AboutView: undefined;
}

export default class App extends Component {
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
