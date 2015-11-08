/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');
var Login = require('./components/login');
var Home = require('./components/home');
var VideoPlayer = require('./components/videoplayer');

Parse.initialize("OPfwbvfJPFfTiVBkMS3lFDQk8WSeBTpRZRqZGvzz", "TwVVZeNL5IIzz53kd5N1P6wE6X8VjKyt8vuyKf8Q");


var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
  } = React;

var StageDive = React.createClass({


  render: function() {
    return (
      <NavigatorIOS
        barTintColor='#1a1919'
        translucent='true'
        titleTextColor="#FFFFFF"
        tintColor="#FFFFFF"
        style={styles.container}
        initialRoute={{
          title: 'StageDive',
          component: VideoPlayer
        }}/>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1

  }
});

AppRegistry.registerComponent('StageDive', () => StageDive);
