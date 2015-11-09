'use strict';

var React = require('react-native');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');
var Home = require('./home');
var SignUp = require('./signup');
var Video = require('react-native-video');
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

var {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  TextInput,
  Image,
  AlertIOS
  } = React;

var Login = React.createClass({
  signuplink: function() {
    this.props.navigator.push({
      title: 'Sign-Up',
      component: SignUp
    });
  },
  goHome() {
    this.props.navigator.push({
      title: "Home",
      component: Home
    });
  },

  getInitialState() {
    return {
      email: "",
      password: ""
    };
  },

  handleSubmit(event) {
    event.preventDefault();

    let username = this.state.email;
    let password = this.state.password;
    this.setState({email: '', password: ''});
    Parse.User.logIn(username, password).then(this.goHome.bind(this));

  },
  render: function() {
    return (
      <View style={styles.background}>
        <Video source={{uri: "ministri"}}
               style={styles.backgroundVideo}
               resizeMode="cover" repeat={true} muted={true}/>

        <View style={styles.backgroundOverlay} />

        <View style={styles.contentContainer}>


            <Text style={{fontWeight: 'bold', color: 'white', fontSize: 70}}>StageDive</Text>

          <Text style={{
            color: '3effff',
            padding: 5
          }}><Text style={{fontWeight:'bold'}}>Login now</Text> to experience it for yourself!</Text>

          <View style={{
            padding: 10,
            borderWidth: 1,
            borderBottomColor: 'white',
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
            }} placeholder='email address'
            placeholderTextColor="#FFF"
            value={this.state.email}
            onChangeText={(email) => this.setState({email})}
            onSubmitEditing={this.handleSubmit}/>
          </View>
          <View style={{
            padding: 10,
            borderWidth: 1,
            borderBottomColor: 'white',
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
            }} placeholder='Password'
            placeholderTextColor="#FFF"
            value={this.state.password}
            onChangeText={(password) => this.setState({password})}
            onSubmitEditing={this.handleSubmit}
            password={true} />
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
    opacity: 0.3,
    backgroundColor: '#ff0000',
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
  },
  logo: {
    position: 'absolute',

    top: 20,
    width: 344,
    height: 71
  },
});

module.exports = Login;
