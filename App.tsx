import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function App(): JSX.Element {
  return (
    <View style={styles.header}>
      <Text className=" text-2xl text-blue-700">Hdedddr</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 32,
    paddingHorizontal: 24,
    color: '#edc345',
  },
});

export default App;
