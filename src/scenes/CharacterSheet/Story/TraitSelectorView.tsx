import { useFocusEffect } from "@react-navigation/native";
import { Layout } from "@ui-kitten/components";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { Traits } from "../../../PF2eCoreLib/Traits";
import { AppActions } from "../../../store/actions/AllActionTypesAggregated";
import { startChangePCTraits } from "../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { EntireAppState } from "../../../store/Store";
import { TraitSelector } from "../../Shared/TraitSelector";
import { StoryNavigatorHeader } from "./Components/StoryNavigatorHeader";

const TraitSelectorView: React.FC<Props> = (props) => {
    const onSelection = (traits: (keyof typeof Traits)[]) => {
        console.debug("onSelection for Trait Selector View");
        props.startChangePCTraits(traits);
        setState({});
    };
    // make sure the screen is always refreshed.
    const [state, setState] = useState({});
    useFocusEffect(
        React.useCallback(() => {
            setState({});
        }, [])
    );

    return (
        <Layout style={{ flex: 1 }}>
            <StoryNavigatorHeader title="Edit PC Traits" />;
            <ScrollView>
                <TraitSelector
                    currentTraits={props.currentTraits}
                    onSelection={onSelection}
                />
            </ScrollView>
        </Layout>
    );
};

interface LinkStateProps {
    currentTraits: (keyof typeof Traits)[];
}
interface LinkDispatchProps {
    startChangePCTraits: (newTraits: (keyof typeof Traits)[]) => void;
}

const mapStateToProps = (state: EntireAppState): LinkStateProps => ({
    currentTraits: state.playerCharacter.traits,
});
const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => {
    return {
        startChangePCTraits: bindActionCreators(startChangePCTraits, dispatch),
    };
};

type Props = LinkStateProps & LinkDispatchProps;

export default connect(mapStateToProps, mapDispatchToProps)(TraitSelectorView);
