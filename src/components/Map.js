/**
 * page desc
 * ----------------------
 * Map
 * ---
 * to use this you must install a library mention below --
 * library---npx expo-cli install react-native-maps---
 * -----------------------
 * o| we want to get access to a piece of info inside our map component
 * -usecontext to get method
 * -import context from loc_context 
 * -----------------------
 *  o|to show a positon indicator
 *   |- import cirlce from react native maps
 *   |- encase it inside map
 * -----------------------
 * task 1 
 * import libraries
 */
import React, { useContext } from 'react';
import {StyleSheet, ActivityIndicator, Text } from 'react-native';
import { Context as LocationContext } from '../context/LocationContext';
/**
 * polyline - a react component that shows an actual line drawn on the map
 */
import MapView, { Polyline, Circle } from 'react-native-maps';

const Map = () => {
    //destructring state since we have 3 of them
  const { state: { currentLocation, locations} } = useContext(LocationContext);
    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
    }
    /**
     * //test data for the line
     * let points = [];
     * for (let i = 0; i < 20; i++) {
     * if (i % 2 === 0) {
     * points.push({
     * latitude: 37.33233 + i * 0.001,
     * longitude: -122.03121 + i * 0.001
     * });
     * } else {
     * points.push({
     * latitude: 37.33233 - i * 0.002,
     * longitude: -122.03121 + i * 0.001
     * });
     * }
     * }
     */
  //----------------------------------
  return (
      /**
       * initial region - what location to show on the map when it is first rendered on the device
       * 4 different props
       * latitude and longitude are the coordinates
       * latitudedelta and longitudedelta are zoom levels
       */
    <MapView
      style={styles.map}
      //shows what the map should show when it is first rendered on screen
      initialRegion={{
          //stores lat. and long.
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
      /**
      //if you want the map to track the user around then add second prop
      region={{
          //whenever updated the map will automatically update itself recenter on the user and re zoom to user's curr loc
          //stores lat. and long.
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
            }}
       */
      >
        <Circle
            //get current lat. long. from the state
            center={currentLocation.coords}
            //specify size of the circle
            radius={30}
            // border color
            strokeColor="rgba(158, 158, 255, 1.0)"
            // color inside
            fillColor="rgba(158, 158, 255, 0.3)"
        />
        <Polyline 
            coordinates={locations.map(loc => loc.coords)} 
        />
    </MapView>
  );
  //in order to draw a line we need to get coordinates of the stored points and pass it inside polyline
  /**
   * location is an object array 
   * in order to iterate through that array we use location.map
   * we pass in a temp variable to extract just the coordinates
   * remember location is a state which contains loc added by react library
   */
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default Map;
