import React from 'react';
import styled from 'styled-components';
import LeftArrowIcon from '../svg/LeftArrowIcon';
import RightArrowIcon from '../svg/RightArrowIcon';
import ListIcon from '../svg/ListIcon';

const VisualNavStyle = styled.div`
  background-color : ${(props)=>(props.mod === "light" ? "#fff" : "#1E1E1E")};
  border-bottom : 1px solid ${(props)=>(props.mod === "light" ? "#fff" : "rgba(232,162,168,0.38)")};
  transition : 0.3s;
`;

const VisualNavBtnStyled = styled.button`
  svg{
    fill:${(props)=>(props.mod === "light" ? "#000" : "#f5f5f5")};
    transition: 0.3s all;
  }

  position : absolute;
`;

const VisualNavBtn = (props) =>{
  return(<VisualNavBtnStyled mod={props.mod} className="visual_nav_btn">{props.icon}</VisualNavBtnStyled>);
}

const Visual = (props)=>{
  const mod = props.mod;

  return(
    <div id="visual">
      <div id="visual_img_wrap">
      </div>
      <VisualNavStyle id="visual_nav" mod={mod}>
        <VisualNavBtn arrow="left" mod={mod} icon={<LeftArrowIcon/>} />
        <VisualNavBtn arrow="right" mod={mod} icon={<ListIcon/>} />
        <VisualNavBtn arrow="right2" mod={mod} icon={<RightArrowIcon/>} />
      </VisualNavStyle>
    </div>
  );
}

export default Visual;
