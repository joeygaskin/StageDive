'use strict';

var React = require('react-native');
var Player = require('./player');

var {
    StyleSheet,
    View,
    Text,
    Component,
    TouchableHighlight,
    Image,
    ListView
    } = React;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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



exports.framework = 'React';
exports.title = 'Geolocation';
exports.description = 'Examples of using the Geolocation API.';

exports.examples = [
  {
    title: 'navigator.geolocation',
    render: function(): ReactElement {
      return <Pass />;
    },
  }
];



var Pass = React.createClass({

  constructor(props) {
      super(props);

      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      return {
        dataSource: ds.cloneWithRows(['row 1', 'row 2']),
      };
    },
    

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



    render() {

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderPass.bind(this)}
                style={styles.listView}
                />
        );
    },

    renderPass(pass) {

        return (
            <TouchableHighlight onPress={() => {this.setState({paused: !this.state.paused})}}  underlayColor='#dddddd'>
                <View>
                    <View style={styles.cellContainer}>
                    {this.state.unlockedPasses.map(function(pass){
                      return <Image source={{uri: pass.get('image').url()}} style={styles.thumbnail} />;
                    })}
                        <View style={styles.rightContainer}>
                            <Text style={styles.title}>
                            {this.state.unlockedPasses.map(function(pass){
                              return this.pass.get('title');
                            })}
                            </Text>
                            <Text style={styles.author}>
                            {this.state.unlockedPasses.map(function(pass){
                              return this.pass.get('title');
                            })}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableHighlight>
        );
    },

    showUnlockedPass(pass) {

        this.props.navigator.push({
            title: StageDive,
            component: Player

        });
    }

});

module.exports = Pass;
