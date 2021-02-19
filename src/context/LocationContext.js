/**
 * page desc
 * ----------------------
 * location context
 * ---
 * o| how to disable location tracking when user leaves trackcreate screen
 */
import createDataContext from './createDataContext';
//declare a reducer function
/**
 * 3 states = recording, locations, current location
 * recording - stores flag (y/n)
 * @param {*} state 
 * @param {*} action 
 */ 
const locationReducer = (state, action) => {
    switch (action.type) {
        case 'add_current_location':
            return { ...state, currentLocation: action.payload };
        case 'start_recording':
            return { ...state, recording: true };
        case 'stop_recording':
            return { ...state, recording: false };
            //[...state.locations, action.payload] means - copy existing data and add a new one over it
        case 'add_location':
            return { ...state, locations: [...state.locations, action.payload] };
        case 'change_name':
            return { ...state, name: action.payload };
        case 'reset':
            return { ...state, name: '', locations: [] };
        default:
            return state;
    }
};
/**
 * ability to tell whether or not we are recording
 * recording is to take the user updates and store them some how
 * @param {a} dispatch 
 */
const changeName = dispatch => name => {
    dispatch({ type: 'change_name', payload: name });
};
// a function to start recording
const startRecording = dispatch => () => { dispatch({ type: 'start_recording' });};
// a function to stop recording
const stopRecording = dispatch => () => { dispatch({ type: 'stop_recording' }); };
// a function to add location
const addLocation = dispatch => (location, recording) => {
    console.log('hi there!')
    dispatch({ type: 'add_current_location', payload: location });
    if (recording) {
        dispatch({ type: 'add_location', payload: location });
    }  
};
//reset track
const reset = dispatch => () => {
    dispatch({ type: 'reset' });
};

export const { Context, Provider } = createDataContext(
    locationReducer,
    { startRecording, stopRecording, addLocation, changeName },
    { name: '', recording: false, locations: [], currentLocation: null }
);
//then import this file in app.js
//wrap over authprovider