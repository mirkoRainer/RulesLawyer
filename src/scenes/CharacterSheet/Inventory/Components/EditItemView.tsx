import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Item } from "../../../../PF2eCoreLib/PlayerCharacter";
import { EntireAppState } from "../../../../store/Store";

type OwnProps = {
    item: Item;
    index: number;
    inventory: Item[];
};

const EditItemView: React.FC<Props> = (props) => {
    return (
        <View>
            <Text style={styles.centered}>{props.item.name}</Text>
        </View>
    );
};

type Props = LinkStateProps & OwnProps;

interface LinkStateProps {}

const mapStateToProps = (state: EntireAppState): LinkStateProps => {
    return {};
};

export default connect(mapStateToProps, null)(EditItemView);

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
});
