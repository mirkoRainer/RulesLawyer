import React from "react";
import { View, Text } from "react-native";
import { Header } from "react-native-elements";

type Props = {};

export const Build: React.FC<Props> = (props) => {
    return(
        <View>
            <Header
                leftComponent={{ icon: "menu", color: "#eee", onPress: toggleNavigation }}
                centerComponent={{
                    text: headerText(),
                    style: { color: "#eee" },
                }}
                rightComponent={{icon: "build", color: "#eee"}}
            />
            <Text>Build Page</Text>
        </View>
    );
};
