import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../App";
import MainMenu from "./scenes/MainMenu";
import Build from "./scenes/CharacterBuild/Build";
import CharacterSheet from "./scenes/CharacterSheet/CharacterSheet";
import SaveView from "./scenes/SaveView";
import OpenCharacterView from "./scenes/OpenCharacterView";
import BugReportView from "./scenes/BugReportView";
import AboutView from "./scenes/AboutView";

type Props = {};

export const AppNavigator: React.FC<Props> = (props) => {
    const Drawer = createDrawerNavigator<RootDrawerParamList>();

    return(
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
    );
};

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center"
    }
});