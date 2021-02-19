/**
* page desc
* ----------------------
* it's just a boiler plate
* -----------------------
* task 1 
* import libraries
*/
import React from 'react'
import {Text, View, StyleSheet, Button} from 'react-native'
/**
* task 2 
* create a fnction that returns jsx
*/
const TrackListScreen = function({navigation}){
   return(
       <View>
           <Text>TrackListScreen</Text>
           <Button
                title={"Go to Track Detail"}
                onPress={function(){
                    navigation.navigate("TrackDetail")
                }}
            />
       </View>
   )
}
/**
* task 3
* create a stylesheet
*/
const style = StyleSheet.create({

})
/**
* task 4 
* export
*/
export default TrackListScreen