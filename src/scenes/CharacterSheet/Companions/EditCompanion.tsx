import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../store/actions/AllActionTypesAggregated";
import { EntireAppState } from "../../../store/Store";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { startChangeCompanion } from "../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { Companion } from "../../../PF2eCoreLib/PlayerCharacter";
import {
    CompanionsStackParamList,
    EditCompanionNavigationProps,
} from "./CompanionsNavigator";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { EditAbilityScores } from "../../Shared/Components/EditAbilityScores";

const EditCompanion: React.FC<Props> = (props) => {
    const [companion, setCompanion] = useState(props.companion);
    return (
        <Layout style={{ flex: 1 }}>
            <ScrollView>
                <Text>{props.companion.name}</Text>
                <EditAbilityScores
                    abilityScores={companion.abilityScores}
                    scoreRanges={Array.from(new Array(30), (x, i) => i + 1)}
                    onSelect={() => {}}
                />
            </ScrollView>
        </Layout>
    );
};

type Props = LinkDispatchProps & LinkStateProps & OwnProps;

interface OwnProps {
    route: RouteProp<CompanionsStackParamList, "EditCompanionView">;
    navigation: EditCompanionNavigationProps;
}

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

interface LinkStateProps {
    companion: Companion;
}
const mapStateToProps = (
    state: EntireAppState,
    ownProps: OwnProps
): LinkStateProps => {
    const companion = state.playerCharacter.companions.find(
        (companion) =>
            companion.metaData.id.toString() ===
            ownProps.route.params.companionGuid
    );
    if (!companion) {
        ownProps.navigation.goBack();
    }
    return {
        companion: companion!,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCompanion);

export const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
        padding: 10,
        flex: 1,
    },
});
