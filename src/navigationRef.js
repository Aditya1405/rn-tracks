/**
 * not there is a withnavigation finction that does the same task as the function below
 * we have use that in nav link 
 * 
 */

import { NavigationActions } from 'react-navigation';
//let -- means to reassign this variable at some point of time in future
//let navigator is assigned as nav
let navigator;
/**
 * going to be called with some navigation object
 * @param {} nav -- coming from react navigation
 */
export const setNavigator = nav => {
  navigator = nav;
};
/**
 * 
 * @param {*} routeName ---list of screen declared in app.js
 * @param {*} params --- params are small information that is going to be passed around along with nav
 * example - id in blog post 
 */
export const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
};
