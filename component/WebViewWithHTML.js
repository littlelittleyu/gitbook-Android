import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';
import PropTypes from "prop-types";

export class WebViewHTML extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: ''
    };
  }

  componentDidMount() {
    fetch(this.props.url)
      .then((response) => response.text())
      .then((text) => {
        this.setState({response: text});
      });
  }

  render() {
    const { url, html } = this.props;
    return (
      <WebView
        source={{html: html + this.state.response, baseUrl: url}}
        style={{marginTop: 20}}
      />);
    }
}

WebViewHTML.propTypes = {
  url: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired
}

export default WebViewHTML;