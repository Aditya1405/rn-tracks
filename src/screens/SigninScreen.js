/**
 * page desc
 * ----------------------
 * it's a Signin Screen
 * import - authfrom (reusable form)
 * import - navlink (reusable link)
 * now using this create your display part
 * -----------------------
 * remove the navigation bar using navigationoptions
 * ------------------------
 * bring out the form using authform
 * form ready
 * ---------------------
 * now wiring the backend
 * 
 * -------------------
 * 
 * task 1 
 * import libraries
 */
import React , { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import {NavigationEvents} from 'react-navigation'
import { Context as AuthContext } from '../context/AuthContext';
 /**
 * task 2 
 * create a function that returns jsx
 */
const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillBlur={()=>{clearErrorMessage()}}
      />
      <AuthForm
        headerText="Sign In for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={({email,password})=>(signin({email,password}))}
      />
      <NavLink
        text="Don't have an account? Sign Up instead."
        routeName="Signup"
      />
    </View>
  )
};
SigninScreen.navigationOptions=function(){
  return{
    header:function(){false}
  }
}
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
export default SigninScreen;
