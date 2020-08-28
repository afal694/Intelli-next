import * as ActionTypes from './ActionTypes';

export const Modules = (state = { modules: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_MODULES:
        console.log("llegó a  ADD_MODULES");
      return {
        ...state, modules: action.payload
      }
    default:
      return state;
  }
};