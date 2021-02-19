/**
* page desc
* ----------------------
* it's just a boiler plate
* -----------------------
* task 1 
* import libraries
*/
import React, { useContext } from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
//pre styled list element from react native elements
import { ListItem } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';
/**
* task 2 
* create a fnction that returns jsx
*/
const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);
  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks} />
      <FlatList
        data={state}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('TrackDetail', { _id: item._id })
              }
            >
              <Text>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
        //ListItem chevron is a styling thing that adds this symbol '>' to a list view
      />
    </>
  );
};

TrackListScreen.navigationOptions = {
  title: 'Tracks'
};
/**
* task 3
* create a stylesheet
*/
const styles = StyleSheet.create({});
/**
* task 4 
* export
*/
export default TrackListScreen;
