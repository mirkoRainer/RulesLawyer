import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import CharacterName from './CharacterMetadata/CharacterName';
import PlayerName from './CharacterMetadata/PlayerName';
import AncestryAndHeritage from './CharacterMetadata/AncestryAndHeritage';
import Background from './CharacterMetadata/Background';
import Class from './CharacterMetadata/Class';
import Level from './CharacterMetadata/Level';
import ExperiencePoints from './CharacterMetadata/ExperiencePoints';
import Traits from './CharacterMetadata/Traits';
import Alignment from './CharacterMetadata/Alignment';
import Deity from './CharacterMetadata/Deity';

interface Props {}

interface State {}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    rowContainer: {
        flexDirection: 'row'
    },
    header: {
        alignContent: 'stretch',
        alignSelf: 'stretch'
    }
});

export default class CharacterMetadata extends Component<Props, State> {
    public static defaultProps = {};

    render () {
        return (
            <View style={styles.container}>
                <Text h3 style={styles.header}>
            Character Metadata
                </Text>
                <View style={styles.rowContainer}>
                    <CharacterName />
                    <PlayerName />
                </View>
                <View style={styles.rowContainer}>
                    <AncestryAndHeritage />
                    <View style={styles.container}>
                        <Level />
                        <ExperiencePoints />
                    </View>
                </View>
                <View style={styles.rowContainer}>
                    <Background />
                    <Class />
                </View>
                <View style={styles.rowContainer}>
                    <Alignment />
                    <Deity />
                </View>
                <Traits />
            </View>
        );
    }
}
