import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import CharacterName from "./CharacterMetadata/CharacterName";
import PlayerName from "./CharacterMetadata/PlayerName";
import AncestryAndHeritage from "./CharacterMetadata/AncestryAndHeritage";
import Background from "./CharacterMetadata/Background";
import Class from "./CharacterMetadata/Class";
import Level from "./CharacterMetadata/Level";
import ExperiencePoints from "./CharacterMetadata/ExperiencePoints";
import Traits from "./CharacterMetadata/Traits";
import Alignment from "./CharacterMetadata/Alignment";
import Deity from "./CharacterMetadata/Deity";

interface Props {
    characterName: string;
    playerName: string;
    ancestry: string;
    heritage: string;
    level: number;
    experiencePoints: number;
    background: string;
    pcClass: string;
    subclass: string;
    alignment: string;
    deity: string;
    traits: string[];
}

interface State {}

export default class CharacterMetadata extends Component<Props, State> {
    public static defaultProps = {};

    render() {
        return (
            <View style={styles.container}>
                <Text h3 style={styles.header}>
                    Character Metadata
                </Text>
                <View style={styles.rowContainer}>
                    <CharacterName characterName={this.props.characterName} />
                    <PlayerName playerName={this.props.playerName} />
                </View>
                <View style={styles.rowContainer}>
                    <AncestryAndHeritage
                        ancestry={this.props.ancestry}
                        heritage={this.props.heritage}
                    />
                    <View style={styles.container}>
                        <Level level={this.props.level} />
                        <ExperiencePoints
                            experiencePoints={this.props.experiencePoints}
                        />
                    </View>
                </View>
                <View style={styles.rowContainer}>
                    <Background background={this.props.background} />
                    <Class
                        pcClass={this.props.pcClass}
                        subClass={this.props.subclass}
                    />
                </View>
                <View style={styles.rowContainer}>
                    <Alignment alignment={this.props.alignment} />
                    <Deity deity={this.props.deity} />
                </View>
                <Traits traits={this.props.traits} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rowContainer: {
        flexDirection: "row",
    },
    header: {
        alignContent: "stretch",
        alignSelf: "stretch",
    },
});
