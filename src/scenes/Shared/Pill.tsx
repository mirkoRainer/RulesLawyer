import { Text, Tooltip, Layout, Button } from "@ui-kitten/components";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";


interface IProps {
  tooltip?: string;
  text: string | number;
  status?: string;
  onPress: (trait: string) => void;
}

export const Pill: React.FC<IProps> = (props): JSX.Element => {
    const [visible, setVisible] = useState(false);

    const renderChildren = () => (
        <TouchableOpacity style={styles.pill} onPress={() => setVisible(true)}>
            <Text>{props.text}</Text>
        </TouchableOpacity>
    );

    const renderTooltip = (): JSX.Element => (
        <Tooltip anchor={renderChildren} visible={visible} onBackdropPress={() => setVisible(false)}>
            {props.tooltip!}
        </Tooltip>
    );

    const handlePress = (value: any) => {
        props.onPress(value);
    };

    if (props.tooltip) return renderTooltip();
    return (
        <Layout>
            <Button status={props.status || "basic"} style={styles.pill} size='small' onPress={handlePress}>{props.text}</Button>
        </Layout>
    );
};

const styles = StyleSheet.create({
    pill: {
        alignSelf: "flex-start",
        borderColor: "#000",
        borderRadius: 5,
        borderWidth: 1,
        flexShrink: 1,
        fontSize: 12,
        marginRight: 5,
        overflow: "hidden",
        paddingLeft: 5,
        paddingRight: 5,
    },
});