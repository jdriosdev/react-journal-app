import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { notesReducer } from '../reducers/notesReducer';
import { uiReducer } from '../reducers/uiReducer';


//Aqui esta el core de redux, importo todos los reducers
//con combineReducers({}) los uno todos
const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  notes: notesReducer
})

const composeEnhancers = (typeof window !== 'undefined' 
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

//la union de todos mis reducers la paso a mi createStore(reducers) 

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)