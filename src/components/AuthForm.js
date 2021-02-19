import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
//importing pre styled elements from react-native-elements
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  //usestate to control input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //<></> this is a fragment tag

  return (
    <>
      <Spacer>
        <Text h3>{headerText} </Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={(newvalue)=>{setEmail(newvalue)}}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        //hide password
        secureTextEntry={true}
        label="Password"
        value={password}
        onChangeText={(newpass)=>{setPassword(newpass)}}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15
  }
});

export default AuthForm;
