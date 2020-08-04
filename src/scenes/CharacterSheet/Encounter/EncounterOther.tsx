import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Proficiencies } from "../../../PF2eCoreLib/Proficiencies";
import { PlayerCharacter } from "../../../PF2eCoreLib/PlayerCharacter";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../store/actions/AllActionTypesAggregated";
import { startChangeClassDCProficiency } from "../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { startStringPickerModalSelection } from "../../../store/actions/Modals/ModalsActions";
import { CharacterSheetState } from "../../../store/Store";
import { connect } from "react-redux";
import ProficiencyView, { ProficiencyProps } from "../../Shared/ProficiencyView";
import { Bonus } from "../../../PF2eCoreLib/Bonus";
import { BonusType } from "../../../PF2eCoreLib/BonusTypes";
import Conditions from "./Conditions";
import { Layout, Divider } from "@ui-kitten/components";

const EncounterOther: React.FC<Props> = (props) => {

    
    return (
        <Layout style={{flex: 1}}>

            <Divider />
        </Layout>
    );
};

type Props = LinkDispatchProps & LinkStateProps;

interface LinkDispatchProps {

}

interface LinkStateProps {
    playerCharacter: PlayerCharacter;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => {
    return {

    };
};

const mapStateToProps = (
    state: CharacterSheetState): LinkStateProps => ({
    playerCharacter: state.playerCharacter,
});

export default connect(mapStateToProps, mapDispatchToProps)(EncounterOther);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 1,
    }
});