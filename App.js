import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';
import WebViewWithHTML from './component/WebViewWithHTML';

export default class App extends React.Component {
  render() {
    return (
      <WebViewWithHTML
         url={ 'http://www.gitbook.com/explore' }
         html={
           `
            <style>
            #application > div > div.gb-page-wrapper.with-pagehead > div.gb-page-header {
              display: none
            }
            #application > div > div.gb-page-wrapper.with-pagehead > div.gb-page-footer {
              display: none
            }
            </style>
           `
         } 
      />
    );
  }
}

