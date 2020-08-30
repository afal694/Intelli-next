import * as ActionTypes from './ActionTypes';

export const Page = (state = { 
    page: 'api'
 }, action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_PAGE:
      console.log(action.payload);
      return {
        ...state, page: action.payload
      }
    default:
      return state;
  }
};