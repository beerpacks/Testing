import * as ActionTypes from './ActionTypes';

export const comments = (state = { errMess: null, comments:[]}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return {...state, errMess: null, comments: action.payload};
    case ActionTypes.ADD_COMMENT:
      var tmpComment = {
        author:action.payload.author,
        comment:action.payload.comment,
        date:action.payload.date,
        dishId:action.payload.dishId,
        id:state.comments.length,
        rating:action.payload.rating              
      };
      return {...state,errMess:null,comments:state.comments.concat(tmpComment)}
    
    case ActionTypes.COMMENTS_FAILED:
      return {...state, errMess: action.payload};

    default:
      return state;
  }
};