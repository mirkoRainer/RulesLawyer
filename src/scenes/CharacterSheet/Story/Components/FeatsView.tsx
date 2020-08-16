import React from "react";
import {StyleSheet, FlatList } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { FeatAndAbilityEntry } from "./FeatAndAbilityEntry";
import { connect } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
import { AppState } from "../../../../store/Store";


const FeatsView: React.FC<Props> = (props) => {
    const renderItem = ({ item }: { item: FeatAndAbilityEntry }) => (
        <Layout style={styles.featContainer}>
            <Text style={styles.featTitle}>{item.title}: </Text>
            <Text>{item.description}</Text>
        </Layout>
    );
    const keyExtractor = (item: FeatAndAbilityEntry) => item.title;
    
    return (
        <Layout style={styles.container}>
            <ScrollView>
                <Text category='h4'>Ancestry Feats And Abilities</Text>
                <FlatList<FeatAndAbilityEntry>
                    keyExtractor={keyExtractor}
                    data={props.ancestryFeatsAndAbilities}
                    renderItem={renderItem}
                />
                <Text category='h4'>Skill Feats</Text>
                <FlatList<FeatAndAbilityEntry>
                    keyExtractor={keyExtractor}
                    data={props.skillFeats}
                    renderItem={renderItem}
                />
                <Text category='h4'>General Feats</Text>
                <FlatList<FeatAndAbilityEntry>
                    keyExtractor={keyExtractor}
                    data={props.generalFeats}
                    renderItem={renderItem}
                />
                <Text category='h4'>Class Feats and Abilities</Text>
                <FlatList<FeatAndAbilityEntry>
                    keyExtractor={keyExtractor}
                    data={props.classFeatsAndAbilities}
                    renderItem={renderItem}
                />
                <Text category='h4'>Bonus Feats</Text>
                <FlatList<FeatAndAbilityEntry>
                    keyExtractor={keyExtractor}
                    data={props.bonusFeats}
                    renderItem={renderItem}
                />
            </ScrollView>
        </Layout>
    );
};

type Props = LinkStateProps;


interface LinkStateProps {
    ancestryFeatsAndAbilities: FeatAndAbilityEntry[];
    skillFeats: FeatAndAbilityEntry[];
    generalFeats: FeatAndAbilityEntry[];
    classFeatsAndAbilities: FeatAndAbilityEntry[];
    bonusFeats?: FeatAndAbilityEntry[];
}

const mapStateToProps = (
    state: AppState,
): LinkStateProps => ({
    ancestryFeatsAndAbilities: state.playerCharacter.ancestryFeatsAndAbilities,
    skillFeats: state.playerCharacter.skillFeats,
    generalFeats: state.playerCharacter.generalFeats,
    classFeatsAndAbilities: state.playerCharacter.classFeatsAndAbilities,
    bonusFeats: state.playerCharacter.bonusFeats
});

export default connect(mapStateToProps, null)(FeatsView);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 2,
        alignSelf: "stretch",
        alignContent: "stretch",
    },
    featContainer: { flex: 1, flexDirection: "row" },
    featTitle: { fontWeight: "bold" },
});
