import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from '../application/Recommend/store'

// combineReducers组合所有的reducer的state,
// 分发 dispatch 的 Action。
export default combineReducers({
  recommend: recommendReducer
})