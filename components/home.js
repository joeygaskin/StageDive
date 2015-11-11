
'use strict';

var React = require('react-native');
var Carousel = require('react-native-looped-carousel');
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var KanyeWest = require('./kanyewest');
var TaylorSwift = require('./taylorswift');
var Video = require('react-native-video');
var JAYZandBeyonce = require('./jayzbeyonce');


var {
    StyleSheet,
    View,
    Text,
    Component,
    Image,
    TouchableHighlight,
    TouchableOpacity
    } = React;


    var Home = React.createClass({

      kanyeWest: function() {
        this.props.navigator.push({
          title: 'Kanye West : The YEEZUS Tour',
          component: KanyeWest
        });
      },
      taylorSwift: function() {
        this.props.navigator.push({
          title: 'Taylor Swift : The 1989 Tour',
          component: TaylorSwift
        });
      },
      jayzBeyonce: function() {
        this.props.navigator.push({
          title: 'JAY-Z & Beyonce : On The Run Tour',
          component: JAYZandBeyonce
        });
      },

      getInitialState() {
        return {
          rate: 1,
          volume: 0,
          muted: false,
          resizeMode: 'cover',
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

      renderRateControl(rate) {
        var isSelected = (this.state.rate == rate);

        return (
          <TouchableOpacity onPress={() => { this.setState({rate: rate}) }}>
            <Text style={[styles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
              {rate}x
            </Text>
          </TouchableOpacity>
        )
      },

      renderResizeModeControl(resizeMode) {
        var isSelected = (this.state.resizeMode == resizeMode);

        return (
          <TouchableOpacity onPress={() => { this.setState({resizeMode: resizeMode}) }}>
            <Text style={[styles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
              {resizeMode}
            </Text>
          </TouchableOpacity>
        )
      },

      renderVolumeControl(volume) {
        var isSelected = (this.state.volume == volume);

        return (
          <TouchableOpacity onPress={() => { this.setState({volume: volume}) }}>
            <Text style={[styles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
              {volume * 100}%
            </Text>
          </TouchableOpacity>
        )
      },

      render: function() {
        var flexCompleted = this.getCurrentTimePercentage() * 100;
        var flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;
        return (
        <View style={styles.container}>
        <Carousel delay={7000} style={{width: width, height: 250, borderWidth: 1, borderBottomColor: '#3effff'}}>
          <TouchableHighlight
          onPress={() => this.jayzBeyonce()}
          underlayColor='transparent'>
          <Image source={{uri: 'http://static.parkwoodent.netdna-cdn.com/wp-content/uploads/2014/07/RH_SEATTLE_SHOW-6243.jpg'}}
          style={{width: width, height: 250}}>
          <View style={styles.text1}>
          <Text style={{
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 18}}>JAY-Z & BEYONCE</Text>
          </View>
          <View style={styles.text2}>
          <Text style={{
          color: '#3effff',
          fontWeight: 'bold',
          fontSize: 28}}>ON THE RUN TOUR</Text></View>
          </Image>
          </TouchableHighlight>
          <TouchableHighlight
          onPress={() => this.kanyeWest()}
          underlayColor='transparent'>
          <Image source={{uri: 'http://illsocietymag.com/wp-content/uploads/2014/12/4.jpg'}}
          style={{width: width, height: 300}}>
          <View style={styles.text3}>
          <Text style={{
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 18}}>Kanye West</Text>
          </View>
          <View style={styles.text4}>
          <Text style={{
          color: '#3effff',
          fontWeight: 'bold',
          fontSize: 28}}>THE 'YEEZUS' TOUR</Text></View>
          </Image>
          </TouchableHighlight>
          <TouchableHighlight
          onPress={() => this.taylorSwift()}
          underlayColor='transparent'>
          <Image source={{uri: 'http://24h-img.24hstatic.com/upload/4-2015/images/2015-10-19/1445247423-1445229024-taylor-swift-2.jpg'}}
          style={{width: width, height: 450}}>
          <View style={styles.text5}>
          <Text style={{
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 18}}>Taylor Swift</Text>
          </View>
          <View style={styles.text6}>
          <Text style={{
          color: '#3effff',
          fontWeight: 'bold',
          fontSize: 28}}>THE 1989 TOUR</Text></View>
          </Image>
        </TouchableHighlight>
        </Carousel>
        <View style={{backgroundColor: '#000', flexDirection: 'row',
          width: width, height: 130}}>
          <Image style={{width: 167, height: 130, position:'absolute', left:20}} source={{uri: 'sam'}}/>
          <View style={{position: 'absolute', right:0}}>
            <TouchableOpacity onPress={() => {this.setState({paused: !this.state.paused})}}>
              <Video source={{uri: 'latch'}}
                     style={styles.fullScreen}
                     rate={this.state.rate}
                     paused={this.state.paused}
                     volume={this.state.volume}
                     muted={this.state.muted}
                     resizeMode={this.state.resizeMode}
                     onLoad={this.onLoad}
                     onProgress={this.onProgress}
                     onEnd={this.onEnd}
                     repeat={true} />
            </TouchableOpacity>
            <View style={styles.volumeControl}>
              {this.renderVolumeControl(0)}
              {this.renderVolumeControl(1)}
              {this.renderVolumeControl(1.5)}
            </View>
          </View>
        </View>
        <View style={{backgroundColor: '#000', flexDirection: 'row',
          width: width, height: 130, borderWidth: 1, borderTopColor: '#111'}}>
          <Image source={{uri:'zummer'}}  style={{width: 278, height: 130}}/>
        </View>





      </View>
        );
      }
  });

    var styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      width: null,
      height: null,
      backgroundColor: '#000'
    },
    navigation: {
      backgroundColor: '#000',

      width: 800,
      marginTop: 0
    },
    text1: {
      position: 'absolute',
      backgroundColor: '#000',
      top: 150,
      right: 15
    },
    text2: {
      position: 'absolute',
      backgroundColor: '#000',
      top: 170,
      right: 15
    },
    text3: {
      position: 'absolute',
      backgroundColor: '#000',
      top: 100,
      left: 15
    },
    text4: {
      position: 'absolute',
      backgroundColor: '#000',
      top: 120,
      left: 15
    },
    text5: {
      position: 'absolute',
      backgroundColor: '#000',
      top: 110,
      right: 15
    },
    text6: {
      position: 'absolute',
      backgroundColor: '#000',
      top: 130,
      right: 15
    },
    fullScreen: {
      width: 230,
      height: 130
    },
    controls: {
      backgroundColor: "transparent",
      borderRadius: 5,
      position: 'absolute',
      bottom:370,
      left: 70,
      right: 70,
    },
    progress: {
      flex: 1,
      flexDirection: 'row',
      borderRadius: 3,
      overflow: 'hidden',
    },
    innerProgressCompleted: {
      height: 20,
      backgroundColor: '#cccccc',
    },
    innerProgressRemaining: {
      height: 20,
      backgroundColor: '#2C2C2C',
    },
    generalControls: {
      flex: 1,
      flexDirection: 'row',
      borderRadius: 4,
      overflow: 'hidden',
      paddingBottom: 10,
    },
    rateControl: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    volumeControl: {
      position: 'absolute',
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      right: 8,
      top: 110
    },
    resizeModeControl: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    controlOption: {
      alignSelf: 'center',
      fontSize: 11,
      color: "white",
      paddingLeft: 2,
      paddingRight: 2,
      lineHeight: 12,
    },
  });




module.exports = Home;
