import React, { useReducer } from 'react';
/**
 * defaultValue = some default state{with method like add/delete/edit} that is going to be exported
 * like in blog post
 */
export default (reducer, actions, defaultValue) => {

  const Context = React.createContext();

  const Provider = ({ children }) => {
    //declare reducer
    const [state, dispatch] = useReducer(reducer, defaultValue);

    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
