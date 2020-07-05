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
import { AbilityScoreArray } from "../../Shared/PF2eCoreLib/AbilityScores";
import { Proficiencies } from "../../Shared/PF2eCoreLib/Proficiencies";

export interface CharacterMetadataProps {
    characterName: string;
    playerName: string;
    ancestry: string;
    heritage: string;
    level: number;
    experiencePoints: number;
    background: string;
    pcClass: string;
    subclass: string;
    classKeyAbility: keyof AbilityScoreArray;
    classProficiency: Proficiencies;
    alignment: string;
    deity: string;
    traits: string[];
}

interface Props {
    characterMetadata: CharacterMetadataProps;
}

interface State {}

export default class CharacterMetadata extends Component<Props, State> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <CharacterName
                        characterName={
                            this.props.characterMetadata.characterName
                        }
                    />
                    <PlayerName
                        playerName={this.props.characterMetadata.playerName}
                    />
                </View>
                <View style={styles.rowContainer}>
                    <AncestryAndHeritage
                        ancestry={this.props.characterMetadata.ancestry}
                        heritage={this.props.characterMetadata.heritage}
                    />
                    <View style={styles.container}>
                        <Level level={this.props.characterMetadata.level} />
                        <ExperiencePoints
                            experiencePoints={
                                this.props.characterMetadata.experiencePoints
                            }
                        />
                    </View>
                </View>
                <View style={styles.rowContainer}>
                    <Background
                        background={this.props.characterMetadata.background}
                    />
                    <Class
                        name={this.props.characterMetadata.pcClass}
                        subClass={this.props.characterMetadata.subclass}
                        keyAbility={
                            this.props.characterMetadata.classKeyAbility
                        }
                        proficiency={
                            this.props.characterMetadata.classProficiency
                        }
                    />
                </View>
                <View style={styles.rowContainer}>
                    <Alignment
                        alignment={this.props.characterMetadata.alignment}
                    />
                    <Deity deity={this.props.characterMetadata.deity} />
                </View>
                <Traits traits={this.props.characterMetadata.traits} />
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
