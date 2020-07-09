import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Text } from "react-native-elements";
import { FeatAndAbilityEntry } from "./FeatAndAbilityEntry";

interface Props {
    ancestryFeatsAndAbilities: FeatAndAbilityEntry[];
    skillFeats: FeatAndAbilityEntry[];
    generalFeats: FeatAndAbilityEntry[];
    classFeatsAndAbilities: FeatAndAbilityEntry[];
    bonusFeats?: FeatAndAbilityEntry[];
}

interface State {}

export default class FeatsAndInventoryPage extends Component<Props, State> {
    public static defaultProps = {};
    renderItem = ({ item }: { item: FeatAndAbilityEntry }) => (
        <View style={styles.featContainer}>
            <Text style={styles.featTitle}>{item.title}: </Text>
            <Text>{item.description}</Text>
        </View>
    );
    keyExtractor = (item: FeatAndAbilityEntry) => item.title;

    render() {
        return (
            <View style={styles.container}>
                <Text h4>Ancestry Feats And Abilities</Text>
                <FlatList<FeatAndAbilityEntry>
                    keyExtractor={this.keyExtractor}
                    data={this.props.ancestryFeatsAndAbilities}
                    renderItem={this.renderItem}
                />
                <Text h4>Skill Feats</Text>
                <FlatList<FeatAndAbilityEntry>
                    keyExtractor={this.keyExtractor}
                    data={this.props.skillFeats}
                    renderItem={this.renderItem}
                />
                <Text h4>General Feats</Text>
                <FlatList<FeatAndAbilityEntry>
                    keyExtractor={this.keyExtractor}
                    data={this.props.generalFeats}
                    renderItem={this.renderItem}
                />
                <Text h4>Class Feats and Abilities</Text>
                <FlatList<FeatAndAbilityEntry>
                    keyExtractor={this.keyExtractor}
                    data={this.props.classFeatsAndAbilities}
                    renderItem={this.renderItem}
                />
                <Text h4>Bonus Feats</Text>
                <FlatList<FeatAndAbilityEntry>
                    keyExtractor={this.keyExtractor}
                    data={this.props.bonusFeats}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}

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
