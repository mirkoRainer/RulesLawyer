import React, { Component } from "react";
import {
    View,
    Text,
    Button,
    StyleSheet
} from "react-native";


class LeftSideDrawer extends Component{
    render(){
        return(
            <View style={styles.main}>
                <Text>SideMenu</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    main : {
        flex : 1,
        alignItems:"center",
        justifyContent:"center",
        fontWeight:"bold"
    }
});
export default LeftSideDrawer;
