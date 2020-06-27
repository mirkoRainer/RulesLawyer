import "react-native-gesture-handler";
import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import CharacterSheet from "./src/scenes/CharacterSheet";
import { Header } from "react-native-elements";
import {NavigationContainer, StackActions} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainMenu from "./src/scenes/MainMenu";

interface Props {}

interface State {}

//https://reactnavigation.org/docs/typescript/
export type RootStackParamList = {
    MainMenu: undefined;
    CharacterSheet: undefined;
}

export default class App extends Component<Props, State> {
    render(){
        const Drawer = createDrawerNavigator<RootStackParamList>();

        return (
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="MainMenu">
                    <Drawer.Screen 
                        name="MainMenu"
                        component={MainMenu}
                        options={{ title: "Main Menu" }}
                    />
                    <Drawer.Screen 
                        name="CharacterSheet"
                        component={CharacterSheet}
                        options={{title: "Character Sheet"}}
                    />
                </Drawer.Navigator>
            </NavigationContainer>
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
