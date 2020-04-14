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
        flex: 1,
    },
    header: {
        alignContent: 'center',
        alignSelf: 'center',
    },
});

export default class CharacterMetadata extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text h3 style={styles.header}>
                    Character Metadata
                </Text>
                <CharacterName />
                <PlayerName />
                <AncestryAndHeritage />
                <Background />
                <Class />
                <Level />
                <ExperiencePoints />
                <Alignment />
                <Traits />
                <Deity />
            </View>
        );
    }
}
