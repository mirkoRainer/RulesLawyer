import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Layout, Text, Button } from "@ui-kitten/components";
import { Language } from "../../../../PF2eCoreLib/Language";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Pill } from "../../../Shared/Pill";

type Props = {
    addLanguage: (language: string) => void;
};

export const LanguageList: React.FC<Props> = (props) => {
    const [visible, setVisible] = useState(true);
    const languages = () => {
        let render: JSX.Element[] = [];
        for (const language in Language) {
            const onPress = () => {
                props.addLanguage(language);
            };
            render.push(<Pill text={language} onPress={onPress} />);
        }
        return render;
    };
    const toggleVisible = () => setVisible(!visible);
    const output = visible ? (
        <Layout style={{ flex: 1 }}>
            <Button appearance="ghost" onPress={toggleVisible}>
                Close Language List
            </Button>
            <ScrollView>
                <Layout
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        padding: 10,
                    }}
                >
                    {languages()}
                </Layout>
            </ScrollView>
        </Layout>
    ) : (
        <Button appearance="ghost" onPress={toggleVisible}>
            Show Language List
        </Button>
    );
    return output;
};

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
    language: {
        padding: 3,
        borderRadius: 5,
        borderWidth: 1,
        margin: 2,
    },
});
