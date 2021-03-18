import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { Companion } from "../../../PF2eCoreLib/PlayerCharacter";
import { connect } from "react-redux";
import { EntireAppState } from "../../../store/Store";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../store/actions/AllActionTypesAggregated";
import { CompanionView } from "./CompanionView";
import { ScrollView } from "react-native-gesture-handler";

const Companions: React.FC<Props> = (props) => {
    const render: JSX.Element[] =
        props.companions.length > 0
            ? props.companions.map<JSX.Element>((companion, index) => {
                  return (
                      <CompanionView
                          companion={companion}
                          key={index}
                          index={index}
                          level={props.level}
                      />
                  );
              })
            : [];
    return (
        <Layout style={{ flex: 1 }}>
            <Text style={styles.centered}>Companions</Text>
            <ScrollView>{render}</ScrollView>
        </Layout>
    );
};

interface OwnProps {}

type Props = LinkDispatchProps & LinkStateProps & {};
interface LinkDispatchProps {}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: OwnProps
): LinkDispatchProps => {
    return {};
};

interface LinkStateProps {
    companions: Companion[];
    level: number;
}
const mapStateToProps = (state: EntireAppState): LinkStateProps => ({
    companions: state.playerCharacter.companions,
    level: state.playerCharacter.level,
});

export default connect(mapStateToProps, mapDispatchToProps)(Companions);

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
});