/**
 * page desc
 * ----------------------
 * uselocation hooks
 * start up the process of requesting permission to track users location 
 * do the error handling and then
 * start watching for a users change in location
 * cut pasted components from track create screen to be used here as a reusable component
 * ----------------------
 * o| decide what arguments its going to take and what it will return
 * to decide on what to return - check the return jsx of track create screen - ans - error state
 */

import { useState, useEffect } from 'react';
//for asking permission to track location library
import {Accuracy, requestPermissionsAsync, watchPositionAsync} from 'expo-location';
//shouldtrack - contain boolean value from trackcreate screen isfocused (T/f)
export default (shouldTrack, callback) => {
/**
* when permission to track location is denied we need to display an error
*  a state to rerender the error
*/
    const [err, setErr] = useState(null);
    

    
 //to ask for permission to track loc once
    useEffect(() => {
        //instead of state we use let here
        let subscriber;
        /**
   * create an async helper function
   * req. for permission inside try case
   * 
   */
        const startWatching = async () => {
            try {
                const { granted } = await requestPermissionsAsync();
                if (!granted) {
                    throw new Error('Location permission not granted');
                }
                //watch user pos and see it change overtime
                subscriber = await watchPositionAsync(
                    //1st arg
                    {
                        //more accuracy = more battery power
                        accuracy: Accuracy.BestForNavigation,
                        //update once every second (1000ms = 1sec)
                        timeInterval: 1000,
                        //update once every 10m
                        distanceInterval: 10,
                        //update wrt time or distance
                    },
                    //2nd arg - a callback fxn ; takes some location object from expo location library
                    //need to be added to dependecy library of the list
                    callback
                );
            } catch (e) {
                setErr(e);
            }
        };//close startwatching method
        //for usestate 
        if (shouldTrack) {
            startWatching();
        } else {
            if (subscriber) {
                //remove the subscriber object
                subscriber.remove();
            }
            Subscriber = null;
        }
        return () => {
            if (subscriber) {
                subscriber.remove();
            }
        };
    },//useeffect param 1 
        [shouldTrack, callback]
        //useeffect param 2
    );
/**
 * [] ->if there is an empty array then the useeffect is called only once
 * [shouldtrack] -> but if there is something else that changes then useffect will be triggered
 * everytime when that var changes
 * 
 */
    return [err];
};
