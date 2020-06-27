import React, { Component } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { DrawerNavigationProp } from "@react-navigation/drawer";

type MainMenuNavigationProps = DrawerNavigationProp<RootStackParamList, "MainMenu">;
interface Props {
    navigation: MainMenuNavigationProps;
}
interface State {}

export default class MainMenu extends Component<Props, State> {
    public static defaultProps = {};

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> Main! </Text>
                <View style={styles.button}>
                    <Button 
                        onPress={() => this.props.navigation.openDrawer() } 
                        title={"Swipe from left side or press me"} 
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 1,
    },
    text: {
        flex: 1,
        alignSelf: "auto"
    },
    button: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
});
