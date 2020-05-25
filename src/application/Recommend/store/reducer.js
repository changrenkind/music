import * as actionTypes from './constants';
import { fromJS } from 'immutable'; // 使用fromJS把JS数据结构转换为immutable数据结构

const defaultState = fromJS({
  enterLoading: true,
  bannerList: [],
  recommendList: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_BANNER:
      return state.set('bannerList', action.data);
    case actionTypes.CHANGE_RECOMMEND_LIST:
      return state.set('recommendList', action.data);
    case actionTypes.CHANGE_ENTER_LOADING:
      return state.set('enterLoading', action.data);
    default:
      return state;
  }
}