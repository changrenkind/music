import * as actionTypes from './constants';
import { fromJS } from 'immutable'; // 使用fromJS把JS数据结构转换为immutable数据结构

const defaultState = fromJS({
  bannerList: [],
  recommendList: []
})