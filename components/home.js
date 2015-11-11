// <Video source={{uri: "otrvideo"}}
//  rate={1.0}
//  volume={1.0}
//  muted={true}
//  paused={false}
//  resizeMode="contain"
//  repeat={true}
//  onLoadStart={this.loadStart}
//  onLoad={this.setDuration}
//  onProgress={this.setTime}
//  onEnd={this.onEnd}
//  onError={this.videoError}
//  style={{width:300, height:200}} />
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
    TouchableHighlight
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
      render: function() {

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
        <View style={styles.moreshows}>
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
  });



module.exports = Home;
