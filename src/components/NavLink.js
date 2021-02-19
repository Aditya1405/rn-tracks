/**
 * page desc
 * ----------------------
 * ------------------------
 * what does it do?
 * it basically creates a nav link that is going to be reused over and over again
 * just tell it where to navigate and what text to display
 * props - text , navigate
 * ---------------------------
 * why this page ?
 * its a reusable component
 * to be used anywhere by any component
 * -----------------------
 *
 * -------------------------
 * task 1 
 * import libraries
 */
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Spacer from './Spacer';
/**
 * Navlink - It's useful when you cannot pass the navigation prop into the component directly
 * similar to navigation ref.js
 */
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, text, routeName }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Spacer>
        <Text style={styles.link}>{text}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: 'blue'
  }
});

export default withNavigation(NavLink);
