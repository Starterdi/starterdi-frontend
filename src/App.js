import React from 'react';
//import axios from 'axios';

function App() {
  const VisualNav = (props) =>{
    if(props.number === "1"){
      return (
        <div className="visual_nav_item select">
          <div className="visual_nav_item_img"></div>
          <div>
            <h5 className="visual_nav_item_title">{props.title}</h5>
            <p className="visual_nav_item_subTitle">{props.subTitle}</p>
          </div>
        </div>
      );
    }else{
      return (
        <div className="visual_nav_item">
          <div className="visual_nav_item_img"></div>
          <div>
            <h5 className="visual_nav_item_title">{props.title}</h5>
            <p className="visual_nav_item_subTitle">{props.subTitle}</p>
          </div>
        </div>
      );
    }
  }

  const VisualImg = () =>{
    return (<div className="visual_img"></div>);
  }

  return(
    <div id="visual">
      <div id="visual_img">
        <VisualImg />
        <VisualImg />
        <VisualImg />
      </div>
      <div id="visual_nav">
        <button className="visual_nav_btn">&lt;</button>
        <VisualNav number="1" title="가장 핫한 스터디방은 누구?" subTitle="2021.06.04 ~ 2021.06.10"/>
        <VisualNav number="2" title="포인트 지급해드립니다!" subTitle="2021.06.07 ~ 2021.06.25"/>
        <VisualNav number="3" title="스타터디 생일 축하해~" subTitle="2021.07.02 ~ 2021.07.18"/>
        <button className="visual_nav_btn">&gt;</button>
      </div>
    </div>
  );
  
}
export default App;
