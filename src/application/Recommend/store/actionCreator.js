import * as actionTypes from './constants';
import { fromJS } from 'immutable';
import { getBannerRequest, getRecommendListRequest } from '../../../api/request';

// banner的action
export const changeBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  data: fromJS(data)
})

// list的action
export const changeRecommendList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data: fromJS(data)
})

// loading的action
export const changeEnterLoading = (data) => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data
});

export const getBannerList = () => {
  return (dispatch) => {
    getBannerRequest().then(data => {
      dispatch(changeBannerList(data.banners));
    }).catch(() => {
      console.log('轮播图数据传输错误');
    })
  }
}

// 另外在获取推荐歌单后，应把 loading 状态改为 false
export const getRecommendList = () => {
  return (dispatch) => {
    getRecommendListRequest().then(data => {
      dispatch(changeRecommendList(data.result));
      dispatch(changeEnterLoading(false));
    }).catch(() => {
      console.log('推荐歌单数据传输错误');
    })
  }
}
// export