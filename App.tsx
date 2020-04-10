import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PlayerCharacterSheetPage1 from './PlayerCharacterSheetComponents/Page1/PlayerCharacterSheetPage1';

const styles = StyleSheet.create({
  page1: {
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
    <View style={styles.page1}>
      <PlayerCharacterSheetPage1 style={styles.page1} />
    </View>
  );
}

