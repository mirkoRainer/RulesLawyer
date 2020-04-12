import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainPage from './PlayerCharacterSheet/1_MainPage/MainPage';

const styles = StyleSheet.create({
    app: {
        flex: 1,
        paddingTop: 10,
        marginTop: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default function App() {
    return (
        <View style={styles.app}>
            <MainPage />
        </View>
    );
}
