import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function App(): JSX.Element {
  return (
    <View style={styles.header}>
      <Text>Headedddr</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
