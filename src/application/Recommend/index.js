import React, { useEffect } from 'react';
import Slider from '../../components/slider';
import { connect } from 'react-redux';
import * as actionTypes from './store/actionCreator'
import RecommendList from '../../components/list'
import styled from 'styled-components';
import style from '../../assets/global-style';
import Scroll from '../../baseUI/scroll';
import Loading from '../../baseUI/loading'
// 引入 forceCheck 方法
import { forceCheck } from 'react-lazyload';

export const Content = styled.div`
  position: fixed;
  top: 90px;
  bottom: 0;
  width: 100%;
  .before {
    position: absolute;
    top: -300px;
    height: 400px;
    width: 100%;
    background: ${style["theme-color"]};
  }
`
function Recommend(props) {
  const { bannerList, recommendList, enterLoading } = props;
  const { getBannerDataDispatch, getRecommendListDataDispatch } = props;

  useEffect(() => {
    // 如果页面有数据，则不发请求
    //immutable 数据结构中长度属性 size
    if (!bannerList.size) {
      getBannerDataDispatch();
    }
    if (!recommendList.size) {
      getRecommendListDataDispatch();
    }
  }, []); // 空数组代表着只加载一次

  const bannerListJS = bannerList ? bannerList.toJS() : [];
  const recommendListJS = recommendList ? recommendList.toJS() : [];
  // mock数据
  // const bannerList = [1, 2, 3, 4].map(item => {
  //   return { imageUrl: 'http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg' }
  // })
  // const recommendList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
  //   return {
  //     id: index,
  //     picUrl: "https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg",
  //     playCount: 17171122,
  //     name: "朴树、许巍、李健、郑钧、老狼、赵雷"
  //   }
  // });

  return (
    <Content>
      {enterLoading ? <Loading></Loading> : null}
      <Scroll className="list" onScroll={forceCheck}>
        <div>
          <Slider bannerList={bannerListJS}></Slider>
          <RecommendList recommendList={recommendListJS}></RecommendList>
        </div>
      </Scroll>
    </Content>
  )

}

// 映射Redux全局的state到组件的props上
const mapStateToProps = (state) => ({
  bannerList: state.getIn(['recommend', 'bannerList']),
  recommendList: state.getIn(['recommend', 'recommendList']),
  enterLoading: state.getIn(['recommend', 'enterLoading'])
});

// 映射Redux全局的dispatch调用方法到组件的props上
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      dispatch(actionTypes.getBannerList());
    },
    getRecommendListDataDispatch() {
      dispatch(actionTypes.getRecommendList());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Recommend));