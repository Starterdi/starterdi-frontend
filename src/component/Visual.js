import React from 'react';
import styled from 'styled-components';
import LeftArrowIcon from '../svg/LeftArrowIcon';
import RightArrowIcon from '../svg/RightArrowIcon';
import ListIcon from '../svg/ListIcon';

const VisualNavStyle = styled.div`
  background-color : ${(props)=>(props.mod === "light" ? "#fff" : "#1E1E1E")};
  box-shadow : 10px 0 20px ${(props)=>(props.mod === "light" ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0)")};
  border-bottom : 1px solid ${(props)=>(props.mod === "light" ? "#fff" : "rgba(232,162,168,0.38)")};
  transition : 0.3s;
`;

const VisualNavItem = styled.div`
  background-color : ${(props)=>(props.mod === "light" ? "#fff" : "#1E1E1E")};
  &.select{
    .visual_nav_item_img{border-color : ${(props)=>(props.mod === "light" ? "#333" : "#f5f5f5")}}
    h5{color: ${(props)=>(props.mod === "light" ? "#333333" : "#f5f5f5")};}
    p{color: ${(props)=>(props.mod === "light" ? "#555" : "#ddd")};}
  }
`;

const VisualNavItemTitle = styled.h5`
  font-weight: bold;
  font-size: 1.2em;
  color: ${(props)=>(props.mod === "light" ? "#888" : "#aaa")};
  transition: 0.3s all;
`;

const VisualNavItemSubTitle = styled.p`
  font-size: 0.9em;
  color: ${(props)=>(props.mod === "light" ? "#888" : "#aaa")};
  transition: 0.3s all;
`;

const VisualNavBtnStyled = styled.button`
  svg{
    fill:${(props)=>(props.mod === "light" ? "#000" : "#f5f5f5")};
    transition: 0.3s all;
  }
`;

const VisualNav = (props) =>{
  return(
    <VisualNavItem className={props.className} mod={props.mod}>
      <div className="visual_nav_item_img"></div>
      <div>
        <VisualNavItemTitle mod={props.mod} className="visual_nav_item_title">{props.title}</VisualNavItemTitle>
        <VisualNavItemSubTitle  mod={props.mod} className="visual_nav_item_subTitle">{props.subTitle}</VisualNavItemSubTitle>
      </div>
    </VisualNavItem>
  );
}

const VisualImg = () =>{
  return (<div className="visual_img"></div>);
}

const VisualNavBtn = (props) =>{
  return(<VisualNavBtnStyled mod={props.mod} className="visual_nav_btn">{props.icon}</VisualNavBtnStyled>);
}

const Visual = (props)=>{
  const mod = props.mod;
  const VisualNavList = [
    {
      idx:1,
      title:"가장 핫한 스터디방은 누구?",
      subTitle:"2021.06.04 ~ 2021.06.10",
      className:"visual_nav_item select",
      img:""
    },
    {
      idx:2,
      title:"포인트 지급해드립니다!",
      subTitle:"2021.06.07 ~ 2021.06.25",
      className:"visual_nav_item",
      img:""
    },
    {
      idx:3,
      title:"스타터디 생일 축하해~",
      subTitle:"2021.07.02 ~ 2021.07.18",
      className:"visual_nav_item",
      img:""
    }
  ]

  return(
    <div id="visual">
      <div id="visual_img_wrap">
        {VisualNavList.map(items=>(<VisualImg key={items.idx} src={items.img} />))}
      </div>
      <VisualNavStyle id="visual_nav" mod={mod}>
        <VisualNavBtn  mod={mod} icon={<LeftArrowIcon/>} />

        {VisualNavList.map(items=>(<VisualNav key={items.idx} title={items.title} subTitle={items.subTitle} mod={mod} className={items.className} />))}

        <VisualNavBtn  mod={mod} icon={<RightArrowIcon/>} />
        <VisualNavBtn  mod={mod} icon={<ListIcon/>} />
      </VisualNavStyle>
    </div>
  );
}

export default Visual;
