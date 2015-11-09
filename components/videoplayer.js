var React = require('react-native');
var Parse = require('parse/react-native');
var _ = require('underscore');

var Video = require('react-native-video');

var {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} = React;


exports.framework = 'React';
exports.title = 'Geolocation';
exports.description = 'Examples of using the Geolocation API.';

exports.examples = [
  {
    title: 'navigator.geolocation',
    render: function(): ReactElement {
      return <VideoPlayer />;
    },
  }
];

var VideoPlayer = React.createClass({
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

  render: function() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <Text>
          <Text style={styles.title}>Current position: </Text>
          {JSON.stringify(this.state.currentPosition)}
        </Text>

        <View>
          <Text style={styles.title}>Unlocked Passes: </Text>
            {this.state.unlockedPasses.map(function(pass){
              return <Video source={{uri: pass.get('media').url()}} volume={1.0} />;
            })}

        </View>

      </View>
    </ScrollView>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    marginTop: 200
  },
  title: {
    fontWeight: '500',
  },
});

module.exports = VideoPlayer;

//if the current posistion is different from the last position call this query function
