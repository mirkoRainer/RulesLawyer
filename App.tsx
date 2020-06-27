import "react-native-gesture-handler";
import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import CharacterSheet from "./src/PlayerCharacterSheet/CharacterSheet";
import { Header } from "react-native-elements";
import {NavigationContainer, StackActions} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainMenu from "./src/MainMenu";

interface Props {}

interface State {}

//https://reactnavigation.org/docs/typescript/
export type RootStackParamList = {
    MainMenu: undefined;
    CharacterSheet: undefined;
}

export default class App extends Component<Props, State> {
    render(){
        const Stack = createStackNavigator<RootStackParamList>();

        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="MainMenu">
                    <Stack.Screen 
                        name="MainMenu"
                        component={MainMenu}
                        options={{ title: "Main Menu" }}
                    />
                    <Stack.Screen 
                        name="CharacterSheet"
                        component={CharacterSheet}
                        options={{title: "Character Sheet"}}
                    />
                </Stack.Navigator>
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
