import * as ActionTypes from './ActionTypes';

export const Modules = (state = {
    isLoading: true,
    errMess: null,
    modules: []
  }, action) => {
    switch (action.type) {
  
      case ActionTypes.ADD_MODULES:
        return {
          ...state, isLoading: false, errMess: null, modules: action.payload
        }
  
  
        case ActionTypes.MODULES_LOADING:
          return {
            ...state, isLoading: true, errMess: null, modules: []
          };
  
        case ActionTypes.MODULES_FAILED:
          return {
            ...state, isLoading: false, errMess: action.payload, modules: []
          };
        default:
          return state;
    }
  };