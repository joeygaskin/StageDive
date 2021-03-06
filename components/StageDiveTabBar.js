'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Animated
} = React;

var { Icon, } = require('react-native-icons');
var deviceWidth = Dimensions.get('window').width;

var styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    backgroundColor: '#181818'
  },

  tabs: {
    height: 50,
    flexDirection: 'row',
    paddingTop: 5,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: '#111',
  },
});

var StageDiveTabBar = React.createClass({
  selectedTabIcons: [],
  unselectedTabIcons: [],

  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array
  },

  renderTabOption(name, page) {
    var isTabActive = this.props.activeTab === page;
    console.log(name);

    return (
      <TouchableOpacity key={name} onPress={() => this.props.goToPage(page)} style={[styles.tab]}>
        <Icon name={name} size={30} color='#3B5998' style={{width: 30, height: 30, position: 'absolute', top: 0, left: 20}}
              ref={(icon) => { this.selectedTabIcons[page] = icon }}/>
        <Icon name={name} size={30} color='#ccc' style={{width: 30, height: 30, position: 'absolute', top: 0, left: 20}}
              ref={(icon) => { this.unselectedTabIcons[page] = icon }}/>
      </TouchableOpacity>
    );
  },

  setAnimationValue(value) {
    var currentPage = this.props.activeTab;

    this.unselectedTabIcons.forEach((icon, i) => {
      var iconRef = icon;

      if(!icon.setNativeProps && icon !== null) {
        iconRef = icon.refs.icon_image
      }
      if (value - i >= 0 && value - i <= 1) {
        iconRef.setNativeProps({opacity: value - i});
      }
      if (i - value >= 0 &&  i - value <= 1) {
        iconRef.setNativeProps({opacity: i - value});
      }
    });
  },

  render() {
    var numberOfTabs = this.props.tabs.length;
    var tabUnderlineStyle = {
      position: 'absolute',
      width: deviceWidth / numberOfTabs,
      height: 4,
      backgroundColor: '#3effff',
      bottom: 0,
    };

    var left = this.props.scrollValue.interpolate({
      inputRange: [0, 1], outputRange: [0, deviceWidth / numberOfTabs]
    });

    return (
      <View style={styles.tabs}>
        {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
        <Animated.View style={[tabUnderlineStyle, {left}]} />
      </View>
    );
  },
});

module.exports = StageDiveTabBar;
