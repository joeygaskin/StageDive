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
    TouchableHighlight,
    TouchableOpacity,
    ScrollView
    } = React;


    var OneDirection = React.createClass({
      jumpBack: function() {
        this.props.navigator.jumpBack();
      },

      getInitialState() {
        return {
          rate: 1,
          volume: 1,
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
        <ScrollView contentContainerStyle={styles.container}>


        <View style={{borderWidth: 1, borderTopColor: '#222'}}>
        <Image style={{width: width, height: 300, backgroundColor: '#000'}}
        source={{uri: 'http://img3.wikia.nocookie.net/__cb20150403055828/onedirection/images/2/24/One_Direction_without_Zayn_-_B%26W.png'}}>
        <Image style={{ position: 'absolute', top: 80, left: 30, width: 125, height: 125, borderWidth: 1, borderColor: '#ccc'}}
        source={{uri: 'http://www.ontheroadagain1d.com/assets/images/background-phone.jpg'}}/>
        <TouchableOpacity
        onPress={() => this.jumpBack()}
        underlayColor='transparent'
        ><Image style={{position: 'absolute', top: 10, left: 15, width: 50, height: 25,
        opacity: .5, backgroundColor: 'transparent'}} source={{uri: 'http://files.parsetfss.com/08cff63e-1bd2-416f-9e60-7421877d5185/tfss-1f2d1d01-9356-4583-853c-a9bf4e6d9ea5-backbtnw.png'}} />
        </TouchableOpacity>
        <View style={styles.text3}>
        <Text style={{
        alignText: 'center',
        color: '#3effff',
        fontWeight: 'bold',
        fontSize: 18}}>One Direction</Text>
        </View>
        <View style={styles.text4}>
        <Text style={{
        alignText: 'center',
        color: '#3effff',
        fontWeight: 'bold',
        fontSize: 14}}>On The Road Again Tour</Text></View>
        <TouchableHighlight style={{position: 'absolute', top:260, left:30, width: 125, backgroundColor: '#3effff',
         borderColor:'#3effff', borderWidth: 1, borderRadius: 4, underlayColor:'transparent'}}>
        <Text style={{padding: 5, color:'#000', fontWeight: 'bold', fontSize: 11, alignText: 'center'}}>+ Add to Favorites</Text>
        </TouchableHighlight>
        </Image>
        </View>
        <View style={{flex: 1, backgroundColor: '#141414', width: width, height: height}}>
        <View style={{marginBottom: 250}}>
          <Text style={{paddingTop: 10, marginLeft:30, fontSize:18, fontWeight:'bold', color: '#3effff'}}>The Show</Text>
          <Text style={{paddingTop: 15, paddingRight: 40, paddingLeft: 40, fontSize:12, color: '#fff'}}>
          The <Text style={{fontWeight: 'bold'}}>On the Road Again Tour</Text> is the fourth headlining concert tour by English-Irish boy band <Text style={{fontWeight: 'bold'}}>One Direction</Text>.
           It promoted the band's fourth studio album, <Text style={{fontWeight: 'bold', fontStyle: 'italic'}}>Four</Text>. The tour began on 7 February 2015 in Sydney, Australia
            and ended on 31 October 2015 in Sheffield, England. On 19 March 2015, it was announced that group member
             <Text style={{fontWeight: 'bold'}}> Zayn Malik</Text> would be taking a hiatus from the tour due to stress. Malik later announced his departure
              from the group six days later. His last performance with the group was the 18 March show in Hong Kong.
          </Text>
          <View style={{position:'absolute', top: 415, marginLeft:140 }}>
          <Text style={{color:'#333', fontWeight: 'bold', fontSize: 10}}>(click box to play or pause)</Text>
          </View>
        </View>

            <TouchableOpacity style={styles.outerfullScreen} onPress={() => {this.setState({paused: !this.state.paused})}}>
              <Video source={{uri: "http://files.parsetfss.com/08cff63e-1bd2-416f-9e60-7421877d5185/tfss-4f106a08-0e5a-43d8-9482-a158ff482635-ontheroadagain.mp4"}}
                     style={styles.fullScreen}
                     rate={this.state.rate}
                     paused={!this.state.paused}
                     volume={this.state.volume}
                     muted={this.state.muted}
                     resizeMode={this.state.resizeMode}
                     onLoad={this.onLoad}
                     onProgress={this.onProgress}
                     onEnd={this.onEnd}
                     repeat={true} />
            </TouchableOpacity>

            <View style={styles.controls}>
              <View style={styles.generalControls}>
                <View style={styles.rateControl}>

                </View>




              </View>

              <View style={styles.trackingControls}>
                <View style={styles.progress}>
                  <View style={[styles.innerProgressCompleted, {flex: flexCompleted}]} />
                  <View style={[styles.innerProgressRemaining, {flex: flexRemaining}]} />
                </View>
              </View>
            </View>

        <View style={{paddingBottom: 60}}><Text style={{marginLeft:30, marginBottom: 10, fontSize:18, fontWeight:'bold', color: '#3effff'}}>Tour Dates</Text>
        <View style={{paddingRight:50, paddingLeft:50,flexDirection: 'row'}}>
          <Text style={{paddingRight:70, paddingBottom:5, paddingTop:5, color: '#3effff', fontWeight: 'bold', fontSize: 12}}>Date</Text>
          <Text style={{paddingRight:30, paddingLeft:30, paddingBottom:5, paddingTop:5, color: '#3effff', fontWeight: 'bold', fontSize: 12}}>Location</Text>
          <Text style={{paddingRight:30, paddingLeft:30, paddingBottom:5, paddingTop:5, color: '#3effff', fontWeight: 'bold', fontSize: 12}}>Tickets</Text>
        </View>
        <View style={{paddingRight:50, paddingLeft:50,flexDirection: 'row'}}>
          <Text style={{paddingRight:30, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>October 19, 2013</Text>
          <Text style={{paddingRight:50, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>Seattle, WA</Text>
          <TouchableHighlight style={{backgroundColor: '#3effff', borderColor:'#3effff', borderWidth: 1, borderRadius: 2, underlayColor:'transparent'}}>
          <Text style={{fontWeight:'bold', color: '#000', fontSize: 12, padding: 2}}>Buy Ticket</Text></TouchableHighlight>
        </View>
        <View style={{paddingRight:50, paddingLeft:50,flexDirection: 'row'}}>
          <Text style={{paddingRight:30, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>October 22, 2013</Text>
          <Text style={{paddingRight:39, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>San Jose, CA</Text>
          <TouchableHighlight style={{backgroundColor: '#3effff', borderColor:'#3effff', borderWidth: 1, borderRadius: 2, underlayColor:'transparent'}}>
          <Text style={{fontWeight:'bold', color: '#000', fontSize: 12, padding: 2}}>Buy Ticket</Text></TouchableHighlight>
        </View>
        <View style={{paddingRight:50, paddingLeft:50,flexDirection: 'row'}}>
          <Text style={{paddingRight:30, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>October 23, 2013</Text>
          <Text style={{paddingRight:44, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>Oakland, CA</Text>
          <TouchableHighlight style={{backgroundColor: '#3effff', borderColor:'#3effff', borderWidth: 1, borderRadius: 2, underlayColor:'transparent'}}>
          <Text style={{fontWeight:'bold', color: '#000', fontSize: 12, padding: 2}}>Buy Ticket</Text></TouchableHighlight>
        </View>
        <View style={{paddingRight:50, paddingLeft:50,flexDirection: 'row'}}>
          <Text style={{paddingRight:30, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>October 25, 2013</Text>
          <Text style={{paddingRight:30, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>Las Vegas, WA</Text>
          <TouchableHighlight style={{backgroundColor: '#3effff', borderColor:'#3effff', borderWidth: 1, borderRadius: 2, underlayColor:'transparent'}}>
          <Text style={{fontWeight:'bold', color: '#000', fontSize: 12, padding: 2}}>Buy Ticket</Text></TouchableHighlight>
        </View>
        <View style={{paddingRight:50, paddingLeft:50,flexDirection: 'row'}}>
          <Text style={{paddingRight:30, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>October 26, 2013</Text>
          <Text style={{paddingRight:22, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>Los Angeles, CA</Text>
          <TouchableHighlight style={{backgroundColor: '#3effff', borderColor:'#3effff', borderWidth: 1, borderRadius: 2, underlayColor:'transparent'}}>
          <Text style={{fontWeight:'bold', color: '#000', fontSize: 12, padding: 2}}>Buy Ticket</Text></TouchableHighlight>
        </View>
        <View style={{paddingRight:50, paddingLeft:50,flexDirection: 'row'}}>
          <Text style={{paddingRight:30, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>October 28, 2013</Text>
          <Text style={{paddingRight:22, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>Los Angeles, CA</Text>
          <TouchableHighlight style={{backgroundColor: '#3effff', borderColor:'#3effff', borderWidth: 1, borderRadius: 2, underlayColor:'transparent'}}>
          <Text style={{fontWeight:'bold', color: '#000', fontSize: 12, padding: 2}}>Buy Ticket</Text></TouchableHighlight>
        </View>
        <View style={{paddingRight:50, paddingLeft:50,flexDirection: 'row'}}>
          <Text style={{paddingRight:32, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>October 31, 2013</Text>
          <Text style={{paddingRight:32, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>Vancouver, BC</Text>
          <TouchableHighlight style={{backgroundColor: '#3effff', borderColor:'#3effff', borderWidth: 1, borderRadius: 2, underlayColor:'transparent'}}>
          <Text style={{fontWeight:'bold', color: '#000', fontSize: 12, padding: 2}}>Buy Ticket</Text></TouchableHighlight>
        </View>
        <View style={{paddingRight:50, paddingLeft:50,flexDirection: 'row'}}>
          <Text style={{paddingRight:26, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>November 5, 2013</Text>
          <Text style={{paddingRight:20, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>Minneapolis, MN</Text>
          <TouchableHighlight style={{backgroundColor: '#3effff', borderColor:'#3effff', borderWidth: 1, borderRadius: 2, underlayColor:'transparent'}}>
          <Text style={{fontWeight:'bold', color: '#000', fontSize: 12, padding: 2}}>Buy Ticket</Text></TouchableHighlight>
        </View>
        <View style={{paddingRight:50, paddingLeft:50,flexDirection: 'row'}}>
          <Text style={{paddingRight:26, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>November 8, 2013</Text>
          <Text style={{paddingRight:32, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>Columbus, OH</Text>
          <TouchableHighlight style={{backgroundColor: '#3effff', borderColor:'#3effff', borderWidth: 1, borderRadius: 2, underlayColor:'transparent'}}>
          <Text style={{fontWeight:'bold', color: '#000', fontSize: 12, padding: 2}}>Buy Ticket</Text></TouchableHighlight>
        </View>
        <View style={{paddingRight:50, paddingLeft:50,flexDirection: 'row'}}>
          <Text style={{paddingRight:23, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>November 17, 2013</Text>
          <Text style={{paddingRight:47, paddingBottom:5, paddingTop:5, color: '#fff', fontSize: 12}}>Boston, MA</Text>
          <TouchableHighlight style={{backgroundColor: '#3effff', borderColor:'#3effff', borderWidth: 1, borderRadius: 2, underlayColor:'transparent'}}>
          <Text style={{fontWeight:'bold', color: '#000', fontSize: 12, padding: 2}}>Buy Ticket</Text></TouchableHighlight>
        </View>
        </View>
        </View>
      </ScrollView>

      );
    }
  });


    var styles = StyleSheet.create({
    container: {

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
      width: 150
    },
    text4: {
      position: 'absolute',
      backgroundColor: 'transparent',
      top: 230,
      left: 30,
      color: '#fff',
      width: 170
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
    fullScreen: {
      position: 'absolute',
      width: 300,
      height: 200,
      top: 105,
      borderWidth: 1,
      borderColor: '#3effff',
      marginLeft:28
    },
    outerfullScreen: {
      position: 'absolute',
      top: 105,
      marginLeft:28
    },
    controls: {
      backgroundColor: "transparent",
      borderRadius: 5,
      position: 'absolute',
      bottom:340,
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
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
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



module.exports = OneDirection;
