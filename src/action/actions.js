import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from '../actionType';

export default function addTodo(text) {
  return dispatch=>{
    console.log('dispatch=',dispatch)
    setTimeout(
      ()=>{
        dispatch({ type: ADD_TODO, text })
      }
      ,2000) 
  } 
 // setTimeout(() => {
  //   return { 
  //     type: ADD_TODO, 
  //     text 
  //   }
  // }, 1000);
  // return (dispatch) => {
  //   setTimeout(() => {
  //     dispatch({ type: ADD_TODO, text })
  //   }, 1000);
  // }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}
