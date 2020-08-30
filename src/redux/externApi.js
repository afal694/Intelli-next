import * as ActionTypes from './ActionTypes';

export const Api = (state = {
  isLoading: true,
  errMess: null,
  collections: []
}, action) => {
  switch (action.type) {

    case ActionTypes.API_LOADING:
      return {
        ...state, isLoading: true, errMess: null, collections: []
      };

    case ActionTypes.ADD_API:
      return {
        ...state, isLoading: false, errMess: null, collections: action.payload
      }
    
    case ActionTypes.API_FAILED:
      return {
        ...state, isLoading: false, errMess: action.payload, collections: [] 
      }

    default:
      return state;
  }
};