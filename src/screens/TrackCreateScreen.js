/**
 * page desc
 * ----------------------
 * it's just a boiler plate
 * ----------------------
 * o1| to display a simple map
 * import map component
 * -----------------------
 * o2| before the screen renders we want it to ask permission for location
 * if perm. denied  then throw an error
 * -startwatching()
 * -useeffect - to ask once
 * -usestate - to store error
 * -----------------------
 * o3| track user location when they walk around the globe
 * -----------------------
 * o4| get location and store it inside a state in loc_context
 * -need to change state that is inside my loc_context object 
 * -import context from loc_context
 * -extract addloc from context
 * -startwatching->watchpossync->loc->set your object
 * -----------------------
 * task 1 
 * import libraries
 * importing useEffect == to ask for permission to track loc once
 * importing useState == for storing error
 * every thing is shifted to use location
 */
import React, { useEffect, useState, useContext, useCallback }  from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
//Component of react - navigation that prevents your screen from going out of the screen
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import '../_mockLocation'
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm';
import { FontAwesome } from '@expo/vector-icons';
 /**
 * task 2 
 * create a function that returns jsx
 */
/**
 * 
 * @param {isFocused} = a prop of withnavigationfocus from react naviagation - 
 * when focused on screen - return true
 * move to another screen - return false 
 */
const TrackCreateScreen = ({ isFocused }) => {
  //get add location method from reducer
  const { state:{ recording }, addLocation } = useContext(LocationContext);
  /**
   * goal is to limit the number of times we are going to rebuild the call back function
   * see-vid254
   */
  const callback = useCallback(
    location => {
      addLocation(location, recording);
    },
    //anytime any var changes inside the array ; this callback is going to rebuild it
    // only time we want to change the callback is when state.recording changes
    [recording]
  );

  /**
   * uselocation()-takes 2 separate args
   * 1-is foucsed - type - boolean - if true -> start tracking - false -> stop tracking
   * 2-location - type function - callback - when ever user changes location
   * we do this - isFocused || recording - to let the app know when to record location
   * 1-> when trackscreen is in focus or recording is enabled 
   */
  const [err] = useLocation(isFocused || recording,callback);
  return (
    /**
     * forceInset-
     * In some cases you might need more control over which paddings are applied. 
     * For example, you can remove bottom padding by passing forceInset prop to SafeAreaView.
     */
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2 >Create a Track</Text>
      <Map />
      {err ? <Text>Please grant us location access</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = {
  title: 'Add Track',
  tabBarIcon: <FontAwesome name="plus" size={20} />
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
export default withNavigationFocus(TrackCreateScreen);

