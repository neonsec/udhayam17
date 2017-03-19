import React, { Component } from 'react';
import { WebView, Linking } from 'react-native';

export default class PagefourScreen extends Component {
  render() {
    const uri = 'https://docs.google.com/forms/d/e/1FAIpQLSeEqugtqCIBfH0s-GOguA1jnc8sBIt7SE0SrwCB_WLPaPYDsw/viewform?embedded=true';
    return (
      <WebView
        ref={(ref) => { this.webview = ref; }}
        source={{ uri }}
        onNavigationStateChange={(event) => {
          if (event.url !== uri) {
            this.webview.stopLoading();
            Linking.openURL(event.url);
          }
        }}
      />
    );
  }
}
