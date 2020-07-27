import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Text } from "react-native-elements";
import { FeatAndAbilityEntry } from "./FeatAndAbilityEntry";
import { connect } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
import { CharacterSheetState } from "../../../../store/Store";


const FeatsView: React.FC<Props> = (props) => {
    const renderItem = ({ item }: { item: FeatAndAbilityEntry }) => (
        <View style={styles.featContainer}>
            <Text style={styles.featTitle}>{item.title}: </Text>
            <Text>{item.description}</Text>
        </View>
    );
    const keyExtractor = (item: FeatAndAbilityEntry) => item.title;
    
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text h4>Ancestry Feats And Abilities</Text>
                <FlatList<FeatAndAbilityEntry>
                    keyExtractor={keyExtractor}
                    data={props.ancestryFeatsAndAbilities}
                    renderItem={renderItem}
                />
                <Text h4>Skill Feats</Text>
                <FlatList<FeatAndAbilityEntry>
                    keyExtractor={keyExtractor}
                    data={props.skillFeats}
                    renderItem={renderItem}
                />
                <Text h4>General Feats</Text>
                <FlatList<FeatAndAbilityEntry>
                    keyExtractor={keyExtractor}
                    data={props.generalFeats}
                    renderItem={renderItem}
                />
                <Text h4>Class Feats and Abilities</Text>
                <FlatList<FeatAndAbilityEntry>
                    keyExtractor={keyExtractor}
                    data={props.classFeatsAndAbilities}
                    renderItem={renderItem}
                />
                <Text h4>Bonus Feats</Text>
                <FlatList<FeatAndAbilityEntry>
                    keyExtractor={keyExtractor}
                    data={props.bonusFeats}
                    renderItem={renderItem}
                />
            </ScrollView>
        </View>
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
    state: CharacterSheetState,
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
