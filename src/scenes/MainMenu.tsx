import React, { Component } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootDrawerParamList, db } from "../../App";
import { sql } from "@databases/expo";

type MainMenuNavigationProps = DrawerNavigationProp<RootDrawerParamList, "MainMenu">;
interface Props {
    navigation: MainMenuNavigationProps;
}
interface State {}

export default class MainMenu extends Component<Props, State> {
    public static defaultProps = {};

    checkDB = () => {
        console.log("Printing out DB entries for ancestries");
        db.query(sql`SELECT * FROM ancestries`).then(e => {console.log(e);});
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> Main! </Text>
                <View style={styles.button}>
                    <Button 
                        onPress={() => this.props.navigation.openDrawer() } 
                        title={"Swipe from left side or press me"} 
                    />
                    <Button 
                        onPress={this.checkDB}
                        title={"Check DB"}
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
