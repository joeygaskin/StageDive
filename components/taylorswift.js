'use strict';

var React = require('react-native');
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var Video = require('react-native-video');

var {
    StyleSheet,
    View,
    Text,
    Component,
    Image,
    TouchableHighlight
    } = React;


    var TaylorSwift = React.createClass({


      render: function() {

        return (
        <View style={styles.container}>


        <View style={{borderWidth: 1, borderTopColor: '#222'}}>
        <Image style={{width: width, height: 300}}
        source={{uri: 'http://static1.squarespace.com/static/54245dc1e4b0cee499909324/54329343e4b00d226ec86d54/54579adee4b07aecc2890781/1415371745268/?format=1500w'}}>
        <Image style={{ position: 'absolute', top: 80, left: 30, width: 125, height: 125, borderWidth: 1, borderColor: '#3effff'}}
        source={{uri: 'https://pbs.twimg.com/profile_images/505200807503867904/osJXmYRl.jpeg'}}/>
        <View style={styles.text3}>
        <Text style={{
        alignText: 'center',
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18}}>Taylor Swift</Text>
        </View>
        <View style={styles.text4}>
        <Text style={{
        alignText: 'center',
        color: '#000',
        fontWeight: 'bold',
        fontSize: 14}}>The 1989 Tour</Text></View>
        <TouchableHighlight style={{position: 'absolute', top:260, left:30, width: 125, backgroundColor: '#3effff',
         borderColor:'#3effff', borderWidth: 1, borderRadius: 4, underlayColor:'transparent'}}>
        <Text style={{padding: 5, color:'#000', fontWeight: 'bold', fontSize: 11, alignText: 'center'}}>+ Add to Favorites</Text>
        </TouchableHighlight>
        </Image>
        </View>
        <View style={{flex: 1, backgroundColor: '#141414', width: width, height: height}}>
        <View>
          <Text style={{marginLeft:30, fontSize:18, fontWeight:'bold', color: '#fff'}}>The Show</Text>
          <Text style={{paddingTop: 15, paddingRight: 40, paddingLeft: 40, fontSize:12, color: '#fff'}}>
          <Text style={{fontWeight: 'bold'}}>The Yeezus Tour</Text> was a concert tour by American
          rapper <Text style={{fontWeight: 'bold'}}>Kanye West.</Text>
           The venture served as West's first solo concert tour in five years and
            <Text style={{fontWeight: 'bold'}}>A Tribe Called Quest</Text>,
            <Text style={{fontWeight: 'bold'}}>Travi$ Scott</Text>, <Text style={{fontWeight: 'bold'}}>Pusha T</Text>,
             and <Text style={{fontWeight: 'bold'}}>Kendrick Lamar</Text>,
            served as opening acts on select dates. The tour is in support of West's
            sixth solo studio album, <Text style={{fontWeight: 'bold'}}>Yeezus</Text>.</Text>
            <Video source={{uri: "http://r1---sn-5uaezns7.googlevideo.com/videoplayback?source=youtube&sparams=dur%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cnh%2Cpl%2Cratebypass%2Csource%2Cupn%2Cexpire&ipbits=0&itag=18&ip=75.136.106.197&mm=31&mv=m&mt=1447018089&ms=au&pl=19&id=o-AI1P7xng-N-29J0KTmwmTKVwloEcmiSNfGfQ0TtSX7X1&expire=1447039767&upn=UhaQk-_SkjA&key=yt6&mime=video%2Fmp4&initcwndbps=957500&signature=6F346534B6BD4D0A6FC8D4BC091F04B4C4C3675E.D51AD7DC82563FD129628CED576C6193A30BD7DD&ratebypass=yes&nh=IgpwcjAyLmF0bDAxKgkxMjcuMC4wLjE&sver=3&mn=sn-5uaezns7&lmt=1427885887834923&dur=15.023&title=Taylor%20Swift%27s%20The%201989%20World%20Tour"}}
             rate={1.0}
             volume={1.0}
             muted={false}
             paused={true}
             resizeMode="contain"
             repeat={true}
             onLoadStart={this.loadStart}
             onLoad={this.setDuration}
             onProgress={this.setTime}
             onEnd={this.onEnd}
             onError={this.videoError}
             style={{width:300, height:200}} />
      </View>

        <View><Text style={{marginLeft:30, fontSize:18, fontWeight:'bold', color: '#fff'}}>Tour Dates</Text>
        <View style={{paddingRight:45, paddingLeft:45,flexDirection: 'row'}}>
          <Text style={{paddingRight:70, paddingBottom:5, paddingTop:5, color: '#3effff', fontWeight: 'bold', fontSize: 12}}>Date</Text>
          <Text style={{paddingRight:30, paddingLeft:30, paddingBottom:5, paddingTop:5, color: '#3effff', fontWeight: 'bold', fontSize: 12}}>Location</Text>
          <Text style={{paddingRight:30, paddingLeft:13, paddingBottom:5, paddingTop:5, color: '#3effff', fontWeight: 'bold', fontSize: 12}}>Tickets</Text>
        </View>
        <View style={{paddingRight:45, paddingLeft:45,flexDirection: 'row'}}>
          <Text style={{paddingRight:30, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>October 19, 2013</Text>
          <Text style={{paddingRight:30, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>Seattle, WA</Text>
          <TouchableHighlight style={{backgroundColor: '#3effff', borderColor:'#3effff', borderWidth: 1, borderRadius: 2, underlayColor:'transparent'}}>
          <Text style={{fontWeight:'bold', color: '#000', fontSize: 12, padding: 2}}>Buy Ticket</Text></TouchableHighlight>
        </View>
        <View style={{paddingRight:45, paddingLeft:45,flexDirection: 'row'}}>
          <Text style={{paddingRight:30, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>October 19, 2013</Text>
          <Text style={{paddingRight:30, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>Seattle, WA</Text>
          <TouchableHighlight style={{backgroundColor: '#3effff', borderColor:'#3effff', borderWidth: 1, borderRadius: 2, underlayColor:'transparent'}}>
          <Text style={{fontWeight:'bold', color: '#000', fontSize: 12, padding: 2}}>Buy Ticket</Text></TouchableHighlight>
        </View>
        <View style={{paddingRight:45, paddingLeft:45,flexDirection: 'row'}}>
          <Text style={{paddingRight:30, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>October 19, 2013</Text>
          <Text style={{paddingRight:30, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>Seattle, WA</Text>
          <TouchableHighlight style={{backgroundColor: '#3effff', borderColor:'#3effff', borderWidth: 1, borderRadius: 2, underlayColor:'transparent'}}>
          <Text style={{fontWeight:'bold', color: '#000', fontSize: 12, padding: 2}}>Buy Ticket</Text></TouchableHighlight>
        </View>
        <View style={{paddingRight:45, paddingLeft:45,flexDirection: 'row'}}>
          <Text style={{paddingRight:30, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>October 19, 2013</Text>
          <Text style={{paddingRight:30, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>Seattle, WA</Text>
          <TouchableHighlight style={{backgroundColor: '#3effff', borderColor:'#3effff', borderWidth: 1, borderRadius: 2, underlayColor:'transparent'}}>
          <Text style={{fontWeight:'bold', color: '#000', fontSize: 12, padding: 2}}>Buy Ticket</Text></TouchableHighlight>
        </View>
        <View style={{paddingRight:45, paddingLeft:45,flexDirection: 'row'}}>
          <Text style={{paddingRight:30, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>October 19, 2013</Text>
          <Text style={{paddingRight:30, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>Seattle, WA</Text>
          <TouchableHighlight style={{backgroundColor: '#3effff', borderColor:'#3effff', borderWidth: 1, borderRadius: 2, underlayColor:'transparent'}}>
          <Text style={{fontWeight:'bold', color: '#000', fontSize: 12, padding: 2}}>Buy Ticket</Text></TouchableHighlight>
        </View>
        <View style={{paddingRight:45, paddingLeft:45,flexDirection: 'row'}}>
          <Text style={{paddingRight:30, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>October 19, 2013</Text>
          <Text style={{paddingRight:30, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>Seattle, WA</Text>
          <TouchableHighlight style={{backgroundColor: '#3effff', borderColor:'#3effff', borderWidth: 1, borderRadius: 2, underlayColor:'transparent'}}>
          <Text style={{fontWeight:'bold', color: '#000', fontSize: 12, padding: 2}}>Buy Ticket</Text></TouchableHighlight>
        </View>
        <View style={{paddingRight:45, paddingLeft:45,flexDirection: 'row'}}>
          <Text style={{paddingRight:30, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>October 19, 2013</Text>
          <Text style={{paddingRight:30, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>Seattle, WA</Text>
          <TouchableHighlight style={{backgroundColor: '#3effff', borderColor:'#3effff', borderWidth: 1, borderRadius: 2, underlayColor:'transparent'}}>
          <Text style={{fontWeight:'bold', color: '#000', fontSize: 12, padding: 2}}>Buy Ticket</Text></TouchableHighlight>
        </View>
        <View style={{paddingRight:45, paddingLeft:45,flexDirection: 'row'}}>
          <Text style={{paddingRight:30, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>October 19, 2013</Text>
          <Text style={{paddingRight:30, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>Seattle, WA</Text>
          <TouchableHighlight style={{backgroundColor: '#3effff', borderColor:'#3effff', borderWidth: 1, borderRadius: 2, underlayColor:'transparent'}}>
          <Text style={{fontWeight:'bold', color: '#000', fontSize: 12, padding: 2}}>Buy Ticket</Text></TouchableHighlight>
        </View>
        <View style={{paddingRight:45, paddingLeft:45,flexDirection: 'row'}}>
          <Text style={{paddingRight:30, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>October 19, 2013</Text>
          <Text style={{paddingRight:30, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>Seattle, WA</Text>
          <TouchableHighlight style={{backgroundColor: '#3effff', borderColor:'#3effff', borderWidth: 1, borderRadius: 2, underlayColor:'transparent'}}>
          <Text style={{fontWeight:'bold', color: '#000', fontSize: 12, padding: 2}}>Buy Ticket</Text></TouchableHighlight>
        </View>
        <View style={{paddingRight:45, paddingLeft:45,flexDirection: 'row'}}>
          <Text style={{paddingRight:30, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>October 19, 2013</Text>
          <Text style={{paddingRight:30, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>Seattle, WA</Text>
          <TouchableHighlight style={{backgroundColor: '#3effff', borderColor:'#3effff', borderWidth: 1, borderRadius: 2, underlayColor:'transparent'}}>
          <Text style={{fontWeight:'bold', color: '#000', fontSize: 12, padding: 2}}>Buy Ticket</Text></TouchableHighlight>
        </View>
        </View>
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
      backgroundColor: 'transparent',
      top: 210,
      left: 30,
      color: '#fff',
      width: 125
    },
    text4: {
      position: 'absolute',
      backgroundColor: 'transparent',
      top: 230,
      left: 30,
      color: '#fff',
      width: 125
    },
    text5: {
      position: 'absolute',
      backgroundColor: '#000',
      top: 50,
      right: 15
    },
    text6: {
      position: 'absolute',
      backgroundColor: '#000',
      top: 70,
      right: 15
    },
  });



module.exports = TaylorSwift;
