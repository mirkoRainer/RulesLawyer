import React from "react";
import { View, Text } from "react-native";

port { Header } 

 "react-native-elements";

type Props = {};

e
ort const B
ld: React.FC<P
ps> = (props) => {
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
