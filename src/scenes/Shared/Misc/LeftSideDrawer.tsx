import React, { Component } from "react";
import { Layout, Text } from "@ui-kitten/components";

import { StyleSheet } from "react-native";

class LeftSideDrawer extends Component {
    render() {
        return (
            <Layout style={styles.main}>
                <Text>SideMenu</Text>
            </Layout>
        );
    }
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
    },
});
export default LeftSideDrawer;
