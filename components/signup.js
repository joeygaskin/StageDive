'use strict';
var React = require('react-native');
var Home = require('./home');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');

var {
    View,
    TextInput
    } = React;


    var SignUp = React.createClass({

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

        let email = this.state.email;
        let username = email
        let password = this.state.password;
        Parse.User.signUp(username, password, {email}).then((user) => {
          this.goHome();
        });
      },

      render: function() {

        return (
          <View style={{flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000'}}>

            <TextInput style={{alignSelf: 'center',
            textAlign: 'center',
            width: 300,
            color: '#3effff',
            height: 40,
            borderColor: '#3effff',
            fontWeight: 'bold',
            borderWidth: 1}} placeholder="email" placeholderTextColor={{color:"#ccc"}}
            value={this.state.email}
            onChangeText={(email) => this.setState({email})}
            onSubmitEditing={this.handleSubmit} />
            <TextInput style={{alignSelf: 'center',
              textAlign: 'center',
              width: 300,
              height: 40,
              color: '#3effff',
              borderColor: '#3effff',
              fontWeight: 'bold',
              borderWidth: 1}} placeholderTextColor={{color:"#ccc"}}
              value={this.state.password}
              onChangeText={(password) => this.setState({password})}
              placeholder="password"  onSubmitEditing={this.handleSubmit} password={true} />
          </View>
        )
      }
    });

module.exports = SignUp;
