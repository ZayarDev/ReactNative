/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {SafeAreaView, ScrollView, View, Text, StyleSheet, Image, FlatList} from 'react-native';

const data = [
  {
    day: 'Monday',
    icon: require('./icons/cloud.png'),
    color: '#596859',
    temperature: '20 °C',
    temperatureMiddle: '21.5 °C',
    temperatureLower: '22 °C',
  },
  {
    day: 'Tuesday',
    icon: require('./icons/cloud.png'),
    color: '#7469CF',
    temperature: '27 °C',
    temperatureMiddle: '26.5 °C',
    temperatureLower: '28 °C',
  },
  {
    day: 'Wednesday',
    icon: require('./icons/cloud.png'),
    color: '#A5E87E',
    temperature: '24 °C',
    temperatureMiddle: '25.5 °C',
    temperatureLower: '25 °C',
  },
  {
    day: 'Thursday',
    icon: require('./icons/cloud.png'),
    color: '#C5D88E',
    temperature: '26 °C',
    temperatureMiddle: '25 °C',
    temperatureLower: '24.5 °C',
  },
  {
    day: 'Friday',
    icon: require('./icons/cloud.png'),
    color: '#C8F8AE',
    temperature: '23 °C',
    temperatureMiddle: '23.5 °C',
    temperatureLower: '23 °C',
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };
  }
  render() {
    const style = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'column',
      },
      navigationBarView: {
        flex: 0.06,
        backgroundColor: '#5BCFF7',
      },
      upperView: {
        flex: 0.4,
        backgroundColor: 'white',
      },
      subUpperView: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#5BCFF7',
        marginLeft: 15,
        marginTop: 25,
        marginRight: 15,
        marginBottom: 25,
        borderRadius: 20,
      },
      lowerView: {
        flex: 0.54,
        backgroundColor: 'white',
      },
    });
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#5BCFF7'}}>
        <View style={style.container}>
          <View style={style.navigationBarView}>
            <View style={{flex: 1, flexDirection: 'row-reverse', alignContent: 'center'}}>
              <View style={{flex: 0.45, alignSelf: 'center', marginBottom: 10, marginRight: 15}}>
                <Image
                  style={{width: 20, height: 20, alignSelf: 'flex-end'}}
                  source={require('./icons/search.png')}
                />
              </View>
              <View style={{alignSelf: 'center', marginBottom: 10}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>
                  Search City
                </Text>
              </View>
            </View>
          </View>
          <View style={style.upperView}>
            <View style={style.subUpperView}>
              <View style={{flex: 0.1, justifyContent: 'center', marginTop: 10}}>
                <Text style={{alignSelf: 'center', fontSize: 14, fontWeight: 'bold', color: 'white'}}> Current Weather</Text>
              </View>
              <View style={{flex: 0.3, justifyContent: 'center', marginTop: 10}}>
                <Text style={{alignSelf: 'center', fontSize: 50, fontWeight: 'bold', color: 'white'}}> 23 °C</Text>
              </View>
              <View style={{flex: 0.1, justifyContent: 'center', marginTop: 10}}>
                <Text style={{alignSelf: 'center', fontSize: 16, fontWeight: 'bold', color: 'white'}}> Few Clouds</Text>
              </View>
              <View style={{flex: 0.5, flexDirection: 'row', marginTop: 5}}>
                <View style={{flex: 0.6, justifyContent: 'center'}}>
                  <Text style={{alignSelf: 'flex-start', marginLeft: 20, fontSize: 13, fontWeight: 'bold', color: 'white'}}> Humidity 83%</Text>
                  <Text style={{alignSelf: 'flex-start', marginLeft: 20, marginTop: 7, fontSize: 13, fontWeight: 'bold', color: 'white'}}> Wind 1km/hr</Text>
                </View>
                <View style={{flex: 0.4, justifyContent: 'center'}}>
                  <Image
                    style={{width: 50, height: 50, alignSelf: 'center'}}
                    source={require('./icons/cloud.png')}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={style.lowerView}>
            <View style={{justifyContent: 'center', marginTop: 10}}>
              <Text style={{alignSelf: 'center', fontSize: 14, fontWeight: 'bold', color: 'black'}}> Focus 5 days weather</Text>
            </View>
            <View style={{flex: 0.6, marginLeft: 15, marginTop: 20}}>
              <FlatList horizontal={true}
                data={this.state.data}
                renderItem={({item: rowData}) => {
                  return <FocusWeatherCard item={rowData} />;
                }}
                keyExtractor={(item, index) => index}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

function FocusWeatherCard({item}) {
  const style = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      borderRadius: 15,
      width: 125,
      marginLeft: 6,
    },
  });
  return (
    <View style={[style.container, {backgroundColor: item.color}]}>
      <View style={{flex: 0.2, justifyContent: 'center', marginTop: 5}}>
        <Text style={{alignSelf: 'center', fontSize: 14, fontWeight: 'bold', color: 'white'}}> {item.day}</Text>
      </View>
      <View style={{flex: 0.35, justifyContent: 'center', marginTop: 5}}>
        <Image style={{width: 50, height: 60, alignSelf: 'center'}} source={item.icon}
        />
      </View>
      <View style={{flex: 0.1, justifyContent: 'center', marginTop: 5}}>
        <Text style={{alignSelf: 'center', fontSize: 14, fontWeight: 'bold', color: 'white'}}> {item.temperature}</Text>
      </View>
      <View style={{flex: 0.1, justifyContent: 'center', marginTop: 5}}>
        <Text style={{alignSelf: 'center', fontSize: 13, fontWeight: 'bold', color: 'white'}}> {item.temperatureMiddle}</Text>
      </View>
      <View style={{flex: 0.25, justifyContent: 'flex-end', marginTop: 5, marginBottom: 10}}>
        <Text style={{alignSelf: 'center', fontSize: 12, fontWeight: 'bold', color: 'white'}}> {item.temperatureLower}</Text>
      </View>
    </View>
  );
}

export default App;
