import { Button, Icon, Layout, Text } from "@ui-kitten/components";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Item } from "../../../../PF2eCoreLib/PlayerCharacter";
import { EntireAppState } from "../../../../store/Store";
import { ItemView } from "./ItemView";

const OtherItemsView: React.FC<Props> = (props) => {
    const [itemsVisible, setItemsVisible] = useState(true);
    const iconName = itemsVisible ? "eye-off-outline" : "eye-outline";
    const DropDownIcon = (props: any) => <Icon {...props} name={iconName} />;
    const items: JSX.Element[] = [];
    props.otherItems.forEach((item, index) =>
        items.push(
            <ItemView
                item={item}
                index={index}
                cardStatus="success"
                key={`${item.name}:[${index}]`}
            />
        )
    );
    const toggleItemsVisible = () => setItemsVisible(!itemsVisible);
    return (
        <Layout style={{ flex: 1, margin: 10 }}>
            <Layout style={styles.dropDownContainer}>
                <Text category="h3">Other Items</Text>
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
    otherItems: Item[];
}

const mapStateToProps = (state: EntireAppState): LinkStateProps => {
    const otherItems = state.playerCharacter.inventory.items.filter(
        (i) => i.worn === false && i.readied === false
    );
    return {
        otherItems,
    };
};

export default connect(mapStateToProps, null)(OtherItemsView);

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
