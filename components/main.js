'use strict';

var React = require('react-native');
var Carousel = require('react-native-looped-carousel');
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');


var VideoPlayer = require('./videoplayer')
var Video = require('react-native-video');
var ScrollableTabView = require('react-native-scrollable-tab-view');
var Icon = require('react-native-vector-icons/Ionicons');
var StageDiveTabBar = require('./StageDiveTabBar');
var CustomTabBar = require('./customtabbar');
var VIP = require('./vip');
var { Icon, } = require('react-native-icons');
var Home = require('./home');
var Coldplay = require('./coldplay');
var FallOutBoyWiz = require('./falloutboywiz');
var SamSmith = require('./samsmith');

var {
    StyleSheet,
    View,
    Text,
    Component,
    Image,
    TouchableHighlight,
    Navigator,
    TabBarIOS,
    ScrollView
    } = React;


  var Main = React.createClass({
    render() {
      return (
        <ScrollableTabView>
          <Navigator
                    initialRoute={{name: 'StageDive', component: Home}}
                    configureScene={() => {
                        return Navigator.SceneConfigs.FloatFromRight;
                    }}
                    renderScene={(route, navigator) => {
                        // count the number of func calls
                        // console.log(route, navigator);

                        if (route.component) {
                            return React.createElement(route.component, { navigator });
                        }
                    }}
                 tabLabel="StageDive"/>

               <VIP tabLabel="VIP Access"/>
    
        </ScrollableTabView>
      );
    }
  });

    var styles = StyleSheet.create({
    container: {
      flex: 1,

      alignItems: 'center',
      width: null,
      height: null,
      backgroundColor: '#000'
    },
    navigation: {
      backgroundColor: '#000',
      height:50,
      width: 800,
      marginTop: 14
    },
    text1: {
      position: 'absolute',
      backgroundColor: '#000',
      top: 150,
      right: 15
    },
    text2: {
      position: 'absolute',
      backgroundColor: '#000',
      top: 170,
      right: 15
    },
    text3: {
      position: 'absolute',
      backgroundColor: '#000',
      top: 100,
      left: 15
    },
    text4: {
      position: 'absolute',
      backgroundColor: '#000',
      top: 120,
      left: 15
    },
    text5: {
      position: 'absolute',
      backgroundColor: '#000',
      top: 50,
      right: 15
    },
    text6: {
      position: 'absolute',
      backgroundColor: '#000',
      top: 70,
      right: 15
    },
    beer: {
      width: 15,
      height: 15,
      color: '#887700'
    },
  });

module.exports = Main;
