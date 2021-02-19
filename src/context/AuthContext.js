import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';
/**
 * 
 * @param {*} state - we have 2 states (1)=>token (2)=>errormessage
 * @param {*} action - adderror --> modifies error ; 
 *                     signup --> modifies token + error
 */
const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signup':
      /**
       * return{...state,token:action.payload};
       * when a user signs up zero out the error message
       */
      return { errorMessage: '', token: action.payload };
    case 'clear_error_message':
      //add new error msg on top of stack
      return { ...state,errorMessage:''}
    case 'signout':
      return { token: null, errorMessage: '' };
    default:
      return state;
  }
};
//================================================
const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'signup', payload: token });
    navigate('TrackList');
  } else {
    navigate('Signup');
  }
};
//=================================================
const clearErrorMessage = dispatch => () =>{
  dispatch({type:'clear_error_message'});
}
const signup = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signup', payload: response.data.token });
    navigate('TrackList');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign up'
    });
  }
};
// dispatch for signin and sign up is same
const signin = dispatch => async ({ email, password }) => {
    // Try to signin
    // Handle success by updating state
    // Handle failure by showing error message (somehow)
  try{
    const response = await trackerApi.post('/signin', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signup', payload: response.data.token });
    navigate('TrackList');
  }catch(err){
    dispatch({
      type:'add_error',
      payload:'something went wrong with sign in'
    })
  }
};

const signout = dispatch => async () => {
  // somehow sign out!!
  //unset token
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout' });
  navigate('loginFlow');
};
/**
 * the destructure array below that needs to be exported here calls a method createdatacontext()
 * createdatacontext() - 3 params - (reducer, actions, defaultValue)
 * reducer - 
 */
export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: '' }
);
