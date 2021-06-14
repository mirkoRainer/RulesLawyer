import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
    Button,
    Icon,
    IndexPath,
    Layout,
    Select,
    SelectItem,
    Text,
} from "@ui-kitten/components";
import {
    Armor,
    DEFAULT_ARMOR,
} from "../../../PF2eCoreLib/PlayerCharacter/Armor";

export const SelectWornArmor: React.FC<Props> = (props) => {
    const armors = props.availableArmor.sort();
    const [state, setState] = useState({
        visible: false,
    });
    const ArrowIcon = (props: any) => (
        <Icon
            {...props}
            name={
                state.visible
                    ? "arrow-ios-downward-outline"
                    : "arrow-ios-forward-outline"
            }
        />
    );
    const selectItems = armors.map((armor) => {
        return <SelectItem title={armor.name} key={armor.id.toString()} />;
    });
    return (
        <Layout style={{ flex: 1, padding: 10 }}>
            <Layout style={{ ...styles.wrapRow, paddingHorizontal: 10 }}>
                <Text category="h5" style={styles.centered}>
                    Select Worn Armor
                </Text>
                <Button
                    appearance="ghost"
                    accessoryRight={ArrowIcon}
                    onPress={() =>
                        setState({ ...state, visible: !state.visible })
                    }
                />
            </Layout>
            {state.visible ? (
                <Layout style={styles.wrapRow}>
                    <Select
                        style={styles.centered}
                        selectedIndex={
                            new IndexPath(
                                armors.findIndex(
                                    (x) => x.id === props.currentArmor.id
                                )
                            )
                        }
                        onSelect={(indexPath: IndexPath | IndexPath[]) => {
                            props.onSelect(
                                armors[(indexPath as IndexPath).row]
                            );
                        }}
                        value={props.currentArmor.name}
                    >
                        {selectItems}
                    </Select>
                </Layout>
            ) : (
                <></>
            )}
        </Layout>
    );
};

type Props = {
    availableArmor: Armor[];
    currentArmor: Armor;
    onSelect: (newArmor: Armor) => void;
};

export const styles = StyleSheet.create({
    centered: {
        textAlign: "center",
        flex: 1,
        textAlignVertical: "center",
        alignSelf: "center",
    },
    wrapRow: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    pickerLayout: {
        flex: 1,
        marginVertical: 10,
        textAlignVertical: "center",
    },
    pickerTitle: {
        flex: 1,
        textAlign: "center",
        alignContent: "center",
        textAlignVertical: "center",
        justifyContent: "center",
        marginBottom: -25,
    },
    picker: {
        flex: 1,
    },
});
