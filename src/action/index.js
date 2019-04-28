import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from '../actionType';
import * as oldActionCreator from './actions.js'
import { bindActionCreators } from "redux";

export const newAction = bindActionCreators(oldActionCreator,dispatch)