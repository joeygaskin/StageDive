/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @see https://github.com/gcanti/tcomb-form-native
*/

var React = require('react-native');
var t = require('tcomb-form-native')
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');


Parse.initialize("OPfwbvfJPFfTiVBkMS3lFDQk8WSeBTpRZRqZGvzz", "TwVVZeNL5IIzz53kd5N1P6wE6X8VjKyt8vuyKf8Q");

var {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  Text,
  View,
  DatePickerIOS,
} = React;

var Form = t.form.Form;

// here we are: define your domain model
var Person = t.struct({
  name: t.Str,              // a required string
  email: t.Str,  // an optional string
  age: t.Num,               // a required number
  rememberMe: t.Bool,        // a boolean
  birthDate: t.maybe(t.Dat) // a date field
});

var options = {
  fields: {
    birthDate : {
      mode:"date",
    }
  }
}; // optional rendering options (see documentation)

var VideoPlayer = React.createClass({

  getDefaultProps: function () {
    return {
      date: new Date(),
    };
  },


  getInitialState: function() {
    return {
      date: this.props.date,
    };
  },

  handleSubmit: function () {
    // call getValue() to get the values of the form
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      alert(JSON.stringify(value)); // value here is an instance of Person
    }
  },

  render: function() {
    return (

        <View style={styles.container}>
          {/* display */}
          <Form onSubmitEditing={this.handleSubmit}
            ref="form"
            type={Person}
            options={options}
            value={{
              birthDate : this.props.date
            }}
            />
          <TouchableHighlight style={styles.button} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableHighlight>
        </View>

    );
  }
});

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

module.exports = VideoPlayer;
