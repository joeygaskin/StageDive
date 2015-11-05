'use strict';

var React = require('react-native');
var Home = require('./home');
var KanyeWest = require('./kanyewest');

var {
    StyleSheet,
    View,
    Text,
    Component,
    TextInput,
    Image,
    TouchableHighlight,
    ActivityIndicatorIOS
    } = React;




    var SignUp = React.createClass({
      homePage: function() {
        this.props.navigator.push({
          title: 'StageDive',
          component: Home
        });
      },

      render: function() {

        return (
          <Image source={{
            uri: 'https://www.polaroidcube.com/wp-content/uploads/2015/07/Justice_in_concert.jpg'
          }} style={styles.container}>
            <View style={styles.container}>
              <Text style={styles.welcome}>
                Sign-Up
              </Text>
              <View>
                <TextInput style={{
                  fontSize: 14,
                  alignSelf: 'center',
                  textAlign: 'center',
                  width: 325,
                  height: 40,
                  backgroundColor: '#fff',
                  color: "#000"
                }} placeholder='email address' placeholderTextColor="#ccc" onChangeText={(text) => this.setState({text})}/>
              </View>
              <View style={{
                padding: 10,}}>
                <TextInput style={{
                  fontSize: 14,
                  alignSelf: 'center',
                  textAlign: 'center',
                  width: 325,
                  height: 40,
                  backgroundColor: '#fff',
                  color: "#FFF"
                }} placeholder='Password' placeholderTextColor="#ccc" password={true}/>
              </View>


              <View style={{
                alignItems: 'center',
                width: 325,
                backgroundColor: '3effff'
              }}>
                <Text style={{
                  textAlign: 'center',
                  margin: 20,
                  fontSize: 14,
                  fontWeight: 'bold'
                }}>Sign-Up</Text>
              </View>
              <TouchableHighlight
              onPress={() => this.homePage()}
              underlayColor='transparent'>
              <Text style={{
                color: '3effff',
                padding: 10
              }}>Visit Homepage</Text>
              </TouchableHighlight>
            </View>
          </Image>
        );
      }
    });

    var styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: null,
      height: null,
      backgroundColor: 'transparent'
    },
    welcome: {
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 30,
      color: '#3effff'
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5
    },
    inputContainer: {
      padding: 10,
      borderWidth: 1,
      borderBottomColor: '#ccc',
      backgroundColor: 'transparent'
    },
    usrImg: {
      position: 'absolute',
      left: 15,
      top: 20,
      width: 20,
      height: 20
    },
    passImg: {
      position: 'absolute',
      left: 15,
      top: 20,
      width: 20,
      height: 20
    },
    dropdown: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ccc',
    padding: 10,
    marginBottom: 10
    }
    });

module.exports = SignUp;
