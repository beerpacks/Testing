import * as ActionTypes from './ActionTypes';

export const comment = (state = { showModal:false, dishId:'',rating:3,author:'', comment:''}, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_FORM:
      return {...state, showModal:action.payload};
    case ActionTypes.SET_DISHID:
      return {...state, dishId:action.payload};
    case ActionTypes.SET_RATING:
        return {...state, rating:action.payload};
    default:
      return state;
  }
};