import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { sql } from "@databases/expo";
import { Layout, Text, Button } from "@ui-kitten/components";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootDrawerParamList } from "../RootDrawerParamList";
import { db } from "../db/db";

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
            <SafeAreaView>
                <Layout style={styles.container}>
                    <Text style={styles.text}> Main! </Text>
                    <Layout style={styles.button}>
                        <Button 
                            onPress={() => this.props.navigation.openDrawer() } 
                        >
                            {"Swipe from left side or press me"} 

                        </Button>
                        <Button 
                            onPress={this.checkDB}
                        >
                            {"Check DB"}
                        </Button>
                    </Layout>
                </Layout>
            </SafeAreaView>
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
