import React from "react";
import { StyleSheet } from "react-native";
import { Button, Divider, Layout, Text } from "@ui-kitten/components";
import {
    CompanionsStackParamList,
    MainCompanionNavigationProps,
} from "./CompanionsNavigator";
import { Companion } from "../../../PF2eCoreLib/PlayerCharacter";
import { EntireAppState } from "../../../store/Store";
import { connect } from "react-redux";
import { PropsService } from "@ui-kitten/components/devsupport";
import { CompanionView } from "./Companion";
import { ScrollView } from "react-native-gesture-handler";

type OwnProps = {
    navigation: MainCompanionNavigationProps;
};

const Companions: React.FC<Props> = ({ navigation, companions, level }) => {
    let render: JSX.Element[] = [];
    companions.forEach((x, index) => {
        render.push(
            <CompanionView
                companion={x}
                index={index}
                key={index}
                level={level}
            />
        );
    });
    return (
        <Layout style={{ flex: 1 }}>
            <Text style={styles.centered} category="h5">
                Companions
            </Text>
            <Divider />
            <ScrollView>{render}</ScrollView>
        </Layout>
    );
};

type Props = LinkDispatchProps & LinkStateProps & OwnProps;

interface LinkDispatchProps {}

interface LinkStateProps {
    companions: Companion[];
    level: number;
}

const mapDispatchToProps = (): LinkDispatchProps => {
    return {};
};

const mapStateToProps = (state: EntireAppState): LinkStateProps => ({
    level: state.playerCharacter.level,
    companions: state.playerCharacter.companions,
});

export default connect(mapStateToProps, mapDispatchToProps)(Companions);

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
});
