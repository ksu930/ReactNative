import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, View, Text} from 'react-native';
import {WebView} from 'react-native-webview';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        style={styles.webview}
        source={{uri: 'https://www.google.com/'}}
      />
    </SafeAreaView>
    // <View style={styles.header}>
    //   <Text className=" text-2xl text-blue-700">Hdedddr</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 32,
    paddingHorizontal: 24,
    color: '#edc345',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  webview: {
    flex: 1,
    width: 300,
    height: 300,
  },
});

export default App;
