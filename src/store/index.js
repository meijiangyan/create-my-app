import { createStore , applyMiddleware } from 'redux' ;
import reducer from '../reducer';
import ReduxThunk from 'redux-thunk';

let store = createStore(reducer,applyMiddleware(ReduxThunk));
//console.log('store.getState()=',store.getState())
export default store;