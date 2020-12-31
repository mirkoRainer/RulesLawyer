import { Button, Icon, Layout, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Item } from "../../../../PF2eCoreLib/PlayerCharacter";
import { EntireAppState } from "../../../../store/Store";

const WornItemsView: React.FC<Props> = (props) => {
    const DropDownIcon = (props: any) => <Icon {...props} name="eye-outline" />;
    return (
        <Layout style={{ flex: 1 }}>
            <Layout style={styles.dropDownContainer}>
                <Text category="h3">Worn Items</Text>
                <Button appearance="ghost" accessoryLeft={DropDownIcon} />
            </Layout>
        </Layout>
    );
};

type Props = LinkStateProps;

interface LinkStateProps {
    wornItems: Item[];
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
        alignItems: "center",
        flex: 1,
        flexDirection: "row",
    },
});
