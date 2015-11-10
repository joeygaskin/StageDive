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


    var KanyeWest = React.createClass({
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
        source={{uri: 'http://cdn.defjam.com/wp-content/uploads/2013/09/BTey1lRCAAACbdO.jpg_large-828x1024.jpg'}}>
        <Image style={{ position: 'absolute', top: 80, left: 30, width: 125, height: 125, borderWidth: 1, borderColor: '#ccc'}}
        source={{uri: 'https://consequenceofsound.files.wordpress.com/2013/09/kanye-yeezus2.jpg'}}/>
        <View style={styles.text3}>
          <Text style={{
          alignText: 'center',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 18}}>Kanye West</Text>
          </View>
          <View style={styles.text4}>
          <Text style={{
          alignText: 'center',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 14}}>The YEEZUS Tour</Text></View>
        <TouchableHighlight style={{position: 'absolute', top:260, left:30, width: 125, backgroundColor: '#3effff',
         borderColor:'#3effff', borderWidth: 1, borderRadius: 4, underlayColor:'transparent'}}>
        <Text style={{padding: 5, color:'#000', fontWeight: 'bold', fontSize: 11, alignText: 'center'}}>+ Add to Favorites</Text>
        </TouchableHighlight>
        </Image>
        </View>
        <View style={{flex: 1, backgroundColor: '#141414', width: width, height: height}}>
        <View style={{marginBottom: 230}}>
          <Text style={{paddingTop: 10, marginLeft:30, fontSize:18, fontWeight:'bold', color: '#3effff'}}>The Show</Text>
          <Text style={{paddingTop: 15, paddingRight: 40, paddingLeft: 40, fontSize:12, color: '#fff'}}>
            <Text style={{fontWeight: 'bold'}}>The Yeezus Tour</Text> was a concert tour by American
            rapper <Text style={{fontWeight: 'bold'}}>Kanye West.</Text>
             The venture served as West's first solo concert tour in five years and
              <Text style={{fontWeight: 'bold'}}> A Tribe Called Quest</Text>,
              <Text style={{fontWeight: 'bold'}}>Travi$ Scott</Text>, <Text style={{fontWeight: 'bold'}}>Pusha T</Text>,
               and <Text style={{fontWeight: 'bold'}}>Kendrick Lamar</Text>,
              served as opening acts on select dates. The tour is in support of West's
              sixth solo studio album, <Text style={{fontWeight: 'bold'}}>Yeezus</Text>.</Text>
          </View>
          <View style={{position:'absolute', top: 355, marginLeft:140 }}>
          <Text style={{color:'#333', fontWeight: 'bold', fontSize: 10}}>(click box to play or pause)</Text>
          </View>


            <TouchableOpacity style={styles.outerfullScreen} onPress={() => {this.setState({paused: !this.state.paused})}}>
              <Video source={{uri: "http://r1---sn-5uaezns7.googlevideo.com/videoplayback?initcwndbps=876250&id=o-ABEsGiphdhrTlKzDnmHkvyoVfs8V02ql2rbP-ZuKKzlZ&sparams=dur%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cnh%2Cpl%2Cratebypass%2Csource%2Cupn%2Cexpire&ip=75.136.106.197&key=yt6&upn=B8EvaV645fI&pl=19&expire=1447148038&nh=IgpwcjAxLmF0bDAxKgkxMjcuMC4wLjE&lmt=1427885921586047&signature=6C1E54D166AAF568542D24784A16F8FDF20AA5BC.DAF85EAB19C4543B0643ED19AAC62A269E0007C3&ipbits=0&mime=video%2Fmp4&itag=22&sver=3&mt=1447126373&mv=m&ms=au&dur=15.023&ratebypass=yes&source=youtube&mm=31&mn=sn-5uaezns7&title=Taylor%20Swift%27s%20The%201989%20World%20Tour"}}
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
    fullScreen: {
      position: 'absolute',
      width: 300,
      height: 200,
      top: 75,
      borderWidth: 1,
      borderColor: '#333',
      marginLeft:28
    },
    outerfullScreen: {
      position: 'absolute',
      top: 75,
      marginLeft:28
    },
    controls: {
      backgroundColor: "transparent",
      borderRadius: 5,
      position: 'absolute',
      bottom:400,
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



module.exports = KanyeWest;
