import React from "react";
import { StyleSheet } from "react-native";
import { Layout } from "@ui-kitten/components";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../store/actions/AllActionTypesAggregated";
import { EntireAppState } from "../../../store/Store";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { startChangeCompanion } from "../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { Companion } from "../../../PF2eCoreLib/PlayerCharacter";

const EditCompanion: React.FC<Props> = (props) => {
    return <Layout style={{ flex: 1 }}></Layout>;
};

type Props = LinkDispatchProps & LinkStateProps & {};

interface LinkDispatchProps {
    updateCompanion: (companion: Companion) => void;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => {
    return {
        updateCompanion: bindActionCreators(startChangeCompanion, dispatch),
    };
};

interface LinkStateProps {}
const mapStateToProps = (state: EntireAppState): LinkStateProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(EditCompanion);

export const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
        padding: 10,
        flex: 1,
    },
});
