import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { Traits } from "../../PF2eCoreLib/Traits";
import { EntireAppState } from "../../store/Store";
import TraitSelector from "./TraitSelector";

const TraitSelectorView: React.FC<Props> = (props) => {
    const onSelection = (traits: (keyof typeof Traits)[]) => {
        console.debug("onSelection for Trait Selector");
    };

    return (
        <Layout style={{ flex: 1 }}>
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
type Props = LinkStateProps;

const mapStateToProps = (state: EntireAppState): LinkStateProps => ({
    currentTraits: state.playerCharacter.traits,
});

export default connect(mapStateToProps, null)(TraitSelectorView);
