var React = require('react-native');
var Parse = require('parse/react-native');
var _ = require('underscore');

var Video = require('react-native-video');

var {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
  AlertIOS,
  TouchableOpacity
} = React;


exports.framework = 'React';
exports.title = 'Geolocation';
exports.description = 'Examples of using the Geolocation API.';

exports.examples = [
  {
    title: 'navigator.geolocation',
    render: function(): ReactElement {
      return <VIP />;
    },
  }
];

var VIP = React.createClass({
  watchID: (null: ?number),

  getInitialState: function() {
    return {
      currentPosition: {},
      unlockedPasses: []
    };
  },


  componentDidMount: function() {
    navigator.geolocation.getCurrentPosition(
      (currentPosition) => this.setState({currentPosition}),
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((currentPosition) => {
      let lastPosition = this.state.currentPosition;
      if(!_.isEqual(currentPosition.coords, lastPosition.coords)) {
        this.handleLocationChange(currentPosition);
      }
      this.setState({currentPosition});
    });
  },

  componentWillUnmount: function() {
    navigator.geolocation.clearWatch(this.watchID);
  },

  handleLocationChange(position) {
    let currentGeoPoint = new Parse.GeoPoint(position.coords);
    let query = new Parse.Query("ExclusivePass");
    query.withinKilometers("location", currentGeoPoint, 1);
    query.find().then((unlockedPasses) => {
      this.setState({unlockedPasses});
    });
  },

  getMusicInitialState() {
    return {
      rate: 1,
      volume: 1,
      muted: false,
      paused: true,
      duration: 0.0,
      currentTime: 0.0,
    }
  },

  onLoad(data) {
    this.setState({duration: data.duration});
  },

  onProgress(data) {
    this.setState({currentTime: data.currentTime});
  },

  getCurrentTimePercentage() {
    if (this.state.currentTime > 0) {
      return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
    } else {
      return 0;
    }
  },



  render: function() {
    return (
      <ScrollView style={{backgroundColor: '#F5FCFF'}}>
      <TouchableOpacity onPress={() => {this.setState({paused: !this.state.paused})}}>
      {this.state.unlockedPasses.map((pass) => {
        return <Video source={{uri: pass.get('media').url()}} paused={!this.state.paused} />;
      })}


          <View>
              <View style={styles.cellContainer}>
              {this.state.unlockedPasses.map(function(pass){
                return <Image source={{uri: pass.get('image').url()}} style={styles.thumbnail} />;
              })}
                  <View style={styles.rightContainer}>
                      <Text style={styles.title}>
                      {this.state.unlockedPasses.map(function(pass){
                        return pass.get('title');})}
                      </Text>
                      <Text style={styles.author}>
                      {this.state.unlockedPasses.map(function(pass){
                        return pass.get('description');})}
                      </Text>
                  </View>
              </View>
              <View style={styles.separator} />

          </View>
</TouchableOpacity>
    </ScrollView>
    );
  }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    title: {
        fontSize: 20,
        marginBottom: 8
    },
    author: {
        color: '#656565'
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    },
    listView: {
        backgroundColor: '#F5FCFF'
    },
    cellContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 10
    },
    thumbnail: {
        width: 53,
        height: 81,
        marginRight: 10
    },
    rightContainer: {
        flex: 1
    }
});

module.exports = VIP;
