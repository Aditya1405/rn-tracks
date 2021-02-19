/**
 * page desc
 * ----------------------
 * it's just a boiler plate
 * -----------------------
 * task 1 
 * import libraries
 */
import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
// our existing map component is not reusable so we used map from react library
import MapView, { Polyline } from 'react-native-maps';
 /**
 * task 2 
 * create a fnction that returns jsx
 */
const TrackDetailScreen = ({navigation}) => {
  const { state } = useContext(TrackContext);
  //coming from track list
  const _id = navigation.getParam('_id');
  //send a track -> get its id -> check if its id == to the id fetched from track detail
  const track = state.find(t => t._id === _id);
  //starting point of the track that has been clicked i.e. its first element
  const initialCoords = track.locations[0].coords;

  return (
    <>
      <Text style={{ fontSize: 48 }}>{track.name}</Text>
      <MapView
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords
        }}
        style={styles.map}
      >
        <Polyline coordinates={track.locations.map(loc => loc.coords)} />
      </MapView>
    </>
  );
};
 /**
 * task 3
 * create a stylesheet
 */
const styles = StyleSheet.create({
  map: {
    height: 300
  }
});
 /**
 * task 4 
 * export
 */
export default TrackDetailScreen;
