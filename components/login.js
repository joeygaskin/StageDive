'use strict';

var React = require('react-native');
var SignUp = require('./signup');
var Video = require('react-native-video');
var {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  TextInput,
  Image
  } = React;

var Login = React.createClass({
  signuplink: function() {
    this.props.navigator.push({
      title: 'Sign-Up',
      component: SignUp
    });
  },
  getInitialState: function() {
    return {
      email: '',
      password: ''
      }
  },
  render: function() {
    return (
      <View style={styles.background}>
        <Video source={{uri: "moments"}}
               style={styles.backgroundVideo}
               resizeMode="cover" repeat={true} muted={true}/>
        <View style={styles.backgroundOverlay} />

        <View style={styles.contentContainer}>

          <Text style={styles.name}>
            StageDive
          </Text>
          <View>
          <Text style={{
            color: '3effff',
            padding: 5
          }}><Text style={{fontWeight:'bold'}}>Login now</Text> to experience it for yourself!</Text>
          </View>
          <View style={{
            padding: 10,
            borderWidth: 1,
            borderBottomColor: 'gray',
            borderColor: 'transparent'
          }}>
          <Image style={styles.usrImg} source={{uri: 'http://i.imgur.com/iVVVMRX.png'}}/>
            <TextInput style={{
              alignSelf: 'center',
              textAlign: 'center',
              width: 300,
              height: 40,
              borderColor: 'transparent',
              color: "#3effff",
              fontWeight: 'bold'
            }} placeholder='email address' placeholderTextColor="#FFF" onChangeText={(text) => this.setState({text})}/>
          </View>
          <View style={{
            padding: 10,
            borderWidth: 1,
            borderBottomColor: 'gray',
            borderColor: 'transparent'
          }}>
            <Image style={styles.passImg} source={{uri: 'http://i.imgur.com/ON58SIG.png'}}/>
            <TextInput style={{
              alignSelf: 'center',
              textAlign: 'center',
              width: 300,
              height: 40,
              borderColor: 'transparent',
              color: "#3effff",
              fontWeight: 'bold'
            }} placeholder='Password' placeholderTextColor="#FFF" password={true}/>
          </View>

          <View style={{
            marginTop: 20,
            alignItems: 'center',
            width: 325,
            backgroundColor: '3effff'
          }}>
            <Text style={{
              textAlign: 'center',
              margin: 20,
              fontSize: 14,
              fontWeight: 'bold'
            }}>Sign In</Text>
          </View>
          <TouchableHighlight
          onPress={() => this.signuplink()}
          underlayColor='transparent'
          >
          <Text style={{
            color: '#fff',
            padding: 3
          }}>Don't have an account? <Text style={{fontWeight:'bold'}}>Sign Up</Text></Text>
          </TouchableHighlight>
          </View>
        </View>


  );
}
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  backgroundOverlay: {
    opacity: 0.7,
    backgroundColor: '#333',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  loginContainer: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    margin: 10,
    opacity: 0.8,
  },
  aboutButtonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#efefef',
    opacity: 0.8,
  },
  contentContainer: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    alignSelf: 'center',
  },
  name: {
    fontSize: 42,
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 10,
    backgroundColor: 'transparent',
    left: 0,
    right: 0,
  },
  aboutTitle: {
    fontSize: 20,
    marginBottom: 10,
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
  }
});

module.exports = Login;
