import { Card, Layout, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, TouchableOpacityProps } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import {
    Armor,
    Item,
    Shield,
    Weapon,
} from "../../../../PF2eCoreLib/PlayerCharacter";
import { AppActions } from "../../../../store/actions/AllActionTypesAggregated";
import { startChangeItem } from "../../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { EntireAppState } from "../../../../store/Store";

type OwnProps = {
    item: Item;
    index: number;
};

const EditItemView: React.FC<Props> = (props) => {
    return (
        <Layout>
            <Text>{props.item.name}</Text>
        </Layout>
    );
};

type Props = LinkStateProps & OwnProps;

interface LinkStateProps {}

const mapStateToProps = (state: EntireAppState): LinkStateProps => {
    return {};
};

interface LinkDispatchProps {
    updateInventoryItem: (item: Item | Weapon | Shield | Armor) => void;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => {
    return {
        updateInventoryItem: bindActionCreators(startChangeItem, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditItemView);

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
});
