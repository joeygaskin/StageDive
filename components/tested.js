/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');
var KanyeWest = require('./kanyewest');
var TaylorSwift = require('./taylorswift');
var ScrollableTabView = require('react-native-scrollable-tab-view');

Parse.initialize(
  "OPfwbvfJPFfTiVBkMS3lFDQk8WSeBTpRZRqZGvzz",
 "TwVVZeNL5IIzz53kd5N1P6wE6X8VjKyt8vuyKf8Q");

var {
  AppRegistry,
  Component,
  Image,
  Navigator,
  StyleSheet,
  TabBarIOS,
  Text,
  TextInput,
  TouchableHighlight,
  View
} = React;



class Tested extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'featured'
        };
    }

    render() {
        return (

            <ScrollableTabView selectedTab={this.state.selectedTab} >
                <TabBarIOS.Item style={{color: '#fff'}}
                    selected={this.state.selectedTab === 'featured'}
                    systemIcon='featured'
                    onPress={() => {
                        this.setState({
                            selectedTab: 'featured'
                        });
                    }}>
                    <TaylorSwift/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'search'}
                    systemIcon='search'
                    onPress={() => {
                        this.setState({
                            selectedTab: 'search'
                        });
                    }}>
                    <KanyeWest/>
                </TabBarIOS.Item>
            </ScrollableTabView>

        );
    }
}

module.exports = Tested;
