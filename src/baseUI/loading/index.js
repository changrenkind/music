import React from 'react';
import styled, { keyframes } from 'styled-components';
import style from '../../assets/global-style';

const loading = keyframes`
  0%, 100% {
    transform: scale(0.0);
  }
  50% {
    transform: scale(1.0);
  }
`
const LoadingWrapper = styled.div`
  >div {
    position: fixed;
    z-index: 1000;
    left: 0; 
    right: 0;  
    top: 0;
    bottom: 0;
    margin: auto;
    width: 60px;
    height: 60px;
    opacity: 0.6;
    border-radius: 50%;
    background-color: ${style["theme-color"]};
    animation: ${loading} 1.4s infinite ease-in;
  }
  >div:nth-child (2) {
    animation-delay: -0.7s;
  }
`

function Loading() {
  return (
    <LoadingWrapper>
      <div></div>
      <div></div>
    </LoadingWrapper>
  );
}
//组件仅在它的 props 发生改变的时候进行重新渲染。通常来说，在组件树中 React 组件，只要有变化就会走一遍渲染流程。
//但是通过 PureComponent 和 React.memo()，我们可以仅仅让某些组件进行渲染。
//PureComponent 要依靠 class 才能使用。而 React.memo() 可以和 functional component 一起使用。
export default React.memo(Loading);