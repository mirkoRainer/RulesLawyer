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


//https://reactnavigation.org/docs/typescript/
export type RootDrawerParamList = {
    MainMenu: undefined;
    CharacterSheet: undefined;
    ExportPDFView: undefined;
    ShareCharacter: undefined;
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
                            options={{ title: "Main Menu" }}
                        />
                        <Drawer.Screen
                            name="ExportPDFView"
                            component={ExportPDFView}
                            options={{title: "Export PDF"}}
                        />
                        <Drawer.Screen 
                            name="CharacterSheet"
                            component={CharacterSheet}
                            options={{title: "Character Sheet"}}
                        />
                        <Drawer.Screen
                            name="ShareCharacter"
                            component={ShareCharacterScreen}
                            options={{title: "Share Your Build"}}
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
