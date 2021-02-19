import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
    const {
        state: { name, recording, locations },
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();


    return (
        <>
            <Spacer>
                <Input
                    value={name}
                    onChangeText={changeName}
                    placeholder="Enter name"
                />
            </Spacer>
            {recording 
                ? (<Button title="Stop" onPress={stopRecording} />) 
                : (<Button title="Start Recording" onPress={startRecording} /> )
            }
            <Spacer>
                {!recording && locations.length 
                    ? (<Button title="Save Recording" onPress={saveTrack} />) 
                    : null
                }
            </Spacer>
        </>
    );
    /**
     * if not recording and have some number of locations then show a button element
     * new task to save your list of tracks to backend api in addition how to fetch all those
     * and show them on track list screen
     * two ways 
     * either add more methods to location context to fetch data 
     * or
     * create a new track context to 
     */
};

export default TrackForm;
