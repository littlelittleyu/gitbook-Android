import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://www.gitbook.com/explore'}}
        style={{marginTop: 20}}
      />
    );
  }
}

