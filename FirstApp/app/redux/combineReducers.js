import { combineReducers } from 'redux';
import assemblerReducer from './reducers/assemblerReducer';

const rootReducer = combineReducers({
    assembler: assemblerReducer
})

export default rootReducer