import { Button, Icon, Layout, Text } from "@ui-kitten/components";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import {
    InventoryItem,
    Item,
} from "../../../../PF2eCoreLib/PlayerCharacter/PlayerCharacter";
import { EntireAppState } from "../../../../store/Store";
import { EyeClosedOpenIcon, EyeOpenIcon } from "../../../Shared/IconButtons";
import { ItemView } from "./ItemView";

const WornItemsView: React.FC<Props> = (props) => {
    const [itemsVisible, setItemsVisible] = useState(true);
    const DropDownIcon = itemsVisible ? EyeOpenIcon : EyeClosedOpenIcon;
    const items: JSX.Element[] = [];
    props.wornItems.forEach((item, index) =>
        items.push(
            <ItemView
                item={item}
                index={index}
                cardStatus="primary"
                key={`${item.name}:[${index}]`}
            />
        )
    );
    const toggleItemsVisible = () => setItemsVisible(!itemsVisible);
    return (
        <Layout style={{ flex: 1, margin: 10 }}>
            <Layout style={styles.dropDownContainer}>
                <Text category="h3">Worn Items</Text>
                <Button
                    appearance="ghost"
                    accessoryLeft={DropDownIcon}
                    onPress={toggleItemsVisible}
                />
            </Layout>
            <Layout>{itemsVisible ? items : undefined}</Layout>
        </Layout>
    );
};

type Props = LinkStateProps;

interface LinkStateProps {
    wornItems: InventoryItem[];
}

const mapStateToProps = (state: EntireAppState): LinkStateProps => {
    const wornItems = state.playerCharacter.inventory.items.filter(
        (i) => i.worn === true
    );
    return {
        wornItems,
    };
};

export default connect(mapStateToProps, null)(WornItemsView);

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
    dropDownContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
    },
});
