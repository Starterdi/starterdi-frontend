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

  const VisualNavBtn = (props) =>{
    switch(props.name){
      case "left" : return(<button className="visual_nav_btn"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="35" viewBox="0 0 18 35"><path id="패스_108" data-name="패스 108" d="M21.908,35.012,7.3,20.6a4.336,4.336,0,0,1,0-6.191L21.9.012l2.092,2.064-14.6,14.4a1.445,1.445,0,0,0,0,2.064L24,32.948Z" transform="translate(-6.001 -0.012)"/></svg></button>);
      case "right" : return(<button className="visual_nav_btn"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="35" viewBox="0 0 18 35"><path id="패스_109" data-name="패스 109" d="M8.088,35.017,6,32.956l14.613-14.42a1.446,1.446,0,0,0,0-2.064L6.025,2.081,8.116.017,22.7,14.409a4.337,4.337,0,0,1,0,6.191Z" transform="translate(-6 -0.017)"/></svg></button>);
      case "list" : return(<button className="visual_nav_btn"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="31" height="31" viewBox="0 0 31 31"><defs><clipPath id="clip-path"><rect id="사각형_87" data-name="사각형 87" width="31" height="31"/></clipPath></defs><g id="그룹_24" data-name="그룹 24" clipPath="url(#clip-path)"><path id="패스_110" data-name="패스 110" d="M0,3.875V14.208H14.208V0H3.875A3.875,3.875,0,0,0,0,3.875Z" transform="translate(0)"/><path id="패스_111" data-name="패스 111" d="M23.333,0H13V14.208H27.208V3.875A3.875,3.875,0,0,0,23.333,0Z" transform="translate(3.792 0)"/><path id="패스_112" data-name="패스 112" d="M0,23.333a3.875,3.875,0,0,0,3.875,3.875H14.208V13H0Z" transform="translate(0 3.792)"/><path id="패스_113" data-name="패스 113" d="M13,27.208H23.333a3.875,3.875,0,0,0,3.875-3.875V13H13Z" transform="translate(3.792 3.792)"/></g></svg></button>);
      default : return(false);
    }
  }

  return(
    <div id="visual">
      <div id="visual_img_wrap">
        <VisualImg />
        <VisualImg />
        <VisualImg />
      </div>
      <div id="visual_nav">
        <VisualNavBtn name="left" />
        <VisualNav number="1" title="가장 핫한 스터디방은 누구?" subTitle="2021.06.04 ~ 2021.06.10"/>
        <VisualNav number="2" title="포인트 지급해드립니다!" subTitle="2021.06.07 ~ 2021.06.25"/>
        <VisualNav number="3" title="스타터디 생일 축하해~" subTitle="2021.07.02 ~ 2021.07.18"/>
        <VisualNavBtn name = "list" />
        <VisualNavBtn name="right" />
      </div>
    </div>
  );
  
}
export default App;
