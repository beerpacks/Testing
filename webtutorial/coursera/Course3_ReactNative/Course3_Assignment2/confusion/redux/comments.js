import * as ActionTypes from './ActionTypes';

export const comments = (state = { errMess: null, comments:[]}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return {...state, errMess: null, comments: action.payload};
    case ActionTypes.ADD_COMMENT:
      return {...state, comments: comments.concat({

        dishId:action.payload.dishId,
        rating:action.payload.rating,
        author:action.payload.author,
        comment:action.payload.comment,
        date:action.payload.date
      })};
    case ActionTypes.COMMENTS_FAILED:
      return {...state, errMess: action.payload};

    default:
      return state;
  }
};