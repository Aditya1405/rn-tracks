/**
 * page desc
 * ----------------------
 * sign up  screen - this will allow new users to sign in
 * -----------------------
 * React- It is an open-source, front end, JavaScript library for building user interfaces or UI components.
 * React-native - A framework for building native apps using React
 *                If you need to develop an app for both iOS and Android, React Native is the best tool out there. 
 *                It can reduce the codebase by about 95%, saving you time and money
 * state- it allows you to create components that are dynamic and interactive
 * Hooks- let you use state and other React features without writing a class.
 * useState- it is a Hook that allows you to have state variables in functional components.
 * useContext-  only lets you read the context and subscribe to its changes
 * -------------------------
 * task 1 
 * import libraries
 */
import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
//importing pre styled elements from react-native-elements
import { Text, Input, Button } from 'react-native-elements';
//for adding space -- its a styling page that provides space btw components nothing more
import Spacer from '../components/Spacer';
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

//===============
/**
 * You can listen to various events emitted by React Navigation to get notified of certain events, 
 * and in some cases, override the default action. 
 */
import {NavigationEvents} from 'react-navigation'
import { Context as AuthContext } from '../context/AuthContext';
 /**
 * task 2 
 * create a fnction that returns jsx
 */
const SignupScreen = ({ navigation }) => {

  const { state, signup, clearErrorMessage, tryLocalSignin } = useContext(AuthContext);
  console.log(state)
  //empty array depicts that we want to call this only one
  //useEffect(()=>{tryLocalSignin()},[])
  /**
   * ----------deleted------------
   * //usestate to control input
   * const [email, setEmail] = useState('');
   * const [password, setPassword] = useState('');
   * ----------deleted------------
   */
  return (
    <View style={styles.container}>
      <NavigationEvents
      //This event is emitted when the screen goes out of focus 
        onWillBlur={()=>{clearErrorMessage()}}
      />
      <AuthForm
        headerText="Sign Up for Tracker" 
        errorMessage={state.errorMessage} 
        submitButtonText="Sign Up"
        onSubmit={({email,password})=>{signup({email,password})}}
      />
      <NavLink
        routeName="Signin"
        text="Already have an account? Sign in instead."
      />
    </View>
  );
};
/**
 * {state.errorMessage?<Text>{state.errorMessage}</Text>:null} 
 * this command is written above button 
 * means - 
 * if state.errormessage has a value than return text 
 * else show nothing
 */
//navigationbar
SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};
 /**
 * task 3
 * create a stylesheet
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  }
});
 /**
 * task 4 
 * export
 */
export default SignupScreen;
