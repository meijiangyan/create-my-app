import * as oldActionCreator from './actions.js'
import { bindActionCreators } from "redux";

export const newAction = bindActionCreators(oldActionCreator,dispatch)