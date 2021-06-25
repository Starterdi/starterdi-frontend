import React from 'react';
import LeftArrowIcon from '../svg/LeftArrowIcon';
import RightArrowIcon from '../svg/RightArrowIcon';
import ListIcon from '../svg/ListIcon';

const VisualNav = (props) =>{
  return(
    <div className={props.className}>
      <div className="visual_nav_item_img"></div>
      <div>
        <h5 className="visual_nav_item_title">{props.title}</h5>
        <p className="visual_nav_item_subTitle">{props.subTitle}</p>
      </div>
    </div>
  );
}

const VisualImg = () =>{
  return (<div className="visual_img"></div>);
}

const VisualNavBtn = (props) =>{
  return(
    <button className="visual_nav_btn">
      {props.icon}
    </button>
  );
}

const Visual = (props)=>{
  const mod = props.mod;
  const VisualNavList = [
    {
      idx:1,
      title:"가장 핫한 스터디방은 누구?",
      subTitle:"2021.06.04 ~ 2021.06.10",
      className:"visual_nav_item select"
    },
    {
      idx:2,
      title:"포인트 지급해드립니다!",
      subTitle:"2021.06.07 ~ 2021.06.25",
      className:"visual_nav_item"
    },
    {
      idx:3,
      title:"스타터디 생일 축하해~",
      subTitle:"2021.07.02 ~ 2021.07.18",
      className:"visual_nav_item"
    }
  ]
  return(
    <div id="visual">
      <div id="visual_img_wrap">
        <VisualImg />
        <VisualImg />
        <VisualImg />
      </div>
      <div id="visual_nav">
        
        <VisualNavBtn icon={<LeftArrowIcon/>} />
        {VisualNavList.map(items=>(<VisualNav key={items.idx} title={items.title} subTitle={items.subTitle} mod={mod} className={items.className} />))}
        <VisualNavBtn icon={<RightArrowIcon/>} />
        <VisualNavBtn icon={<ListIcon/>} />
      </div>
    </div>
  );
}

export default Visual;
