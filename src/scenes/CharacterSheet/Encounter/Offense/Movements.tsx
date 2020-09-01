import React, { Component } from "react";
import { StyleSheet } from "react-native";
import OtherMovements from "./OtherMovements";
import { Layout, Text } from "@ui-kitten/components";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../store/actions/AllActionTypesAggregated";
import { bindActionCreators } from "redux";
import { startNumberPickerModalSelection, startTextEditModal } from "../../../../store/actions/Modals/ModalsActions";
import { connect } from "react-redux";
import Level from "../../Story/Components/CharacterMetadata/Level";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CHANGE_SPEED } from "../../../../store/actions/PlayerCharacter/PlayerCharacterActionTypes";

const Movements: React.FC<Props> = (props) => {
    const handleSpeedTouch = () => {
        props.startPickerModal(CHANGE_SPEED, props.movements.landSpeed);
    };

    const handleOtherMovementTouch = () => {
        props.startTextEditModal();
    };

    return (
        <Layout style={styles.horizontal}>
            <TouchableOpacity style={styles.container} onPress={handleSpeedTouch}>
                <Layout style={styles.container}>
                    <Text style={styles.text} category='h6'>Speed: </Text>
                    <Text style={styles.text} category='p1'>{props.movements.landSpeed} feet</Text>
                </Layout>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleOtherMovementTouch}>
                <OtherMovements movements={props.movements} />
            </TouchableOpacity>
        </Layout>
    );
};

interface OwnProps {
    movements: MovementProps;
}

export interface MovementProps {
    landSpeed: number;
    burrowSpeed?: number;
    climbSpeed?: number;
    flySpeed?: number;
    swimSpeed?: number;
}

type Props = OwnProps & LinkDispatchProps;

interface LinkDispatchProps {
    startPickerModal: (actionType: string, speed: number) => void;
    startTextEditModal: (propertyToChange: string) => void;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: OwnProps
): LinkDispatchProps => {
    return {
        startPickerModal: bindActionCreators(startNumberPickerModalSelection, dispatch),
        startTextEditModal: bindActionCreators(startTextEditModal, dispatch)
    };
};

export default connect(null, mapDispatchToProps)(Movements);

const styles = StyleSheet.create({
    horizontal: {
        flex: 1,
        flexDirection: "row",
        alignContent: "stretch",
        alignSelf: "stretch",
        padding: 5
    },
    container: {
        flex: 1,
        padding: 2
    },
    text: {
        flex: 1,
        alignSelf: "center",
    },
    text2: {
        flex: 2,
        alignSelf: "center",
    },
});