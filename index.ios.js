

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');
var Login = require('./components/login');
var Main = require('./components/main');
var Player = require('./components/player');
var Tested = require('./components/tested');
Parse.initialize("OPfwbvfJPFfTiVBkMS3lFDQk8WSeBTpRZRqZGvzz", "TwVVZeNL5IIzz53kd5N1P6wE6X8VjKyt8vuyKf8Q");


var {
  AppRegistry,
  StyleSheet,
  Navigator
  } = React;



var StageDive = React.createClass({


  render: function() {
    return (
      <Navigator
                initialRoute={{name: 'StageDive', component: Main}}
                configureScene={() => {
                    return Navigator.SceneConfigs.FloatFromRight;
                }}
                renderScene={(route, navigator) => {
                    // count the number of func calls
                    console.log(route, navigator);

                    if (route.component) {
                        return React.createElement(route.component, { navigator });
                    }
                }}
             />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1

  }
});

AppRegistry.registerComponent('StageDive', () => StageDive);
