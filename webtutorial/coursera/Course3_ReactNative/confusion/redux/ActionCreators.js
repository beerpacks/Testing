import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';

export const fetchComments= () => (dispatch) => {
    return fetch(baseUrl + 'comments')
    .then(response => {
        if(response.ok){
            return response;
        }else{
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error =>{
        var errorMess = new Error(error.message);
        throw errorMess;
    }).then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentFailed(error.message)));
}

export const commentFailed = (errMess) => ({
    type:ActionTypes.COMMENTS_FAILED,
    payload:errMess
});

export const addComments= (comments) =>({
    type:ActionTypes.ADD_COMMENTS,
    payload:comments
});

export const fetchDishes= () => (dispatch) => {
    dispatch(dishesLoading());

    return fetch(baseUrl + 'dishes')
    .then(response => {
        if(response.ok){
            return response;
        }else{
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },error =>{
        var errorMess = new Error(error.message);
        throw errorMess;
    }).then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
}

export const dishesLoading = () => ({
    type:ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errMess) => ({
    type:ActionTypes.DISHES_FAILED,
    payload:errMess
});

export const addDishes= (dishes) =>({
    type:ActionTypes.ADD_DISHES,
    payload:dishes
});

export const fetchPromotions= () => (dispatch) => {
    dispatch(promotionsLoading());

    return fetch(baseUrl + 'promotions')
    .then(response => {
        if(response.ok){
            return response;
        }else{
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },error =>{
        var errorMess = new Error(error.message);
        throw errorMess;
    }).then(response => response.json())
    .then(dishes => dispatch(addPromotions(promotions)))
    .catch(error => dispatch(promotionsFailed(error.message)));
}

export const promotionsLoading = () => ({
    type:ActionTypes.PROMOS_LOADING
});

export const promotionsFailed = (errMess) => ({
    type:ActionTypes.PROMOS_FAILED,
    payload:errMess
});

export const addPromotions= (promotions) =>({
    type:ActionTypes.ADD_PROMOS,
    payload:promotions
});

export const fetchLeaders= () => (dispatch) => {
    dispatch(leadersLoading());

    return fetch(baseUrl + 'leaders')
    .then(response => {
        if(response.ok){
            return response;
        }else{
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },error =>{
        var errorMess = new Error(error.message);
        throw errorMess;
    }).then(response => response.json())
    .then(dishes => dispatch(addLeaders(leaders)))
    .catch(error => dispatch(leadersFailed(error.message)));
}

export const leadersLoading = () => ({
    type:ActionTypes.LEADERS_LOADING
});

export const leadersFailed = (errMess) => ({
    type:ActionTypes.LEADERS_FAILED,
    payload:errMess
});

export const addLeaders= (leaders) =>({
    type:ActionTypes.ADD_LEADERS,
    payload:leaders
});