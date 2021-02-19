/**
 * page desc
 * ----------------------
 * Map
 * ---
 * to use this you must install a library mention below --
 * library---npx expo-cli install react-native-maps---
 * -----------------------
 * task 1 
 * import libraries
 */
import React from 'react';
import { StyleSheet } from 'react-native';
/**
 * polyline - a react component that shows an actual line drawn on the map
 */
import MapView from 'react-native-maps';

const M = () => {


    return (
        /**
         * initial region - what location to show on the map when it is first rendered on the device
         * 4 different props
         * latitude and longitude are the coordinates
         * latitudedelta and longitudedelta are zoom levels
         */
        <MapView/>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default M;
