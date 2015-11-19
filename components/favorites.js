'use strict';

var React = require('react-native');


var {
    StyleSheet,
    View,
    Text,
    Component,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    } = React;


const Favorites = React.createClass({

componentWillMount() {
  store.fetchFavorites();

},

getModels() {

},

  render(){
  return(
    <h1>Favorites</h1>
    {this.state.favorites.map((f)=> <h2>{f.recipe.name}</h2>})
  );
  }
})

module.exports = Favorites;
