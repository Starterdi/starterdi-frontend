import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import LeftArrowIcon from '../svg/LeftArrowIcon';
import RightArrowIcon from '../svg/RightArrowIcon';
import ListIcon from '../svg/ListIcon';
import VisualImg1 from '../image/visual1.png';
import SearchIcon from '../svg/SearchIcon';

const VisualNavStyle = styled.div`
  background-color : ${(props)=>(props.mod === "light" ? "#fff" : "#1F1F1F")};
  transition : 0.3s;
`;

const VisualNavBtnStyled = styled.button`
  svg{
    fill:${(props)=>(props.mod === "light" ? "#000" : "#f5f5f5")};
    transition: 0.3s all;
  }

  position : absolute;
`;

const VisualImg = styled.img`
  min-width : 100%;
  min-height:100%;
`;

const VisualSearchWrap = styled.div`
  position : absolute;
  width : 40%;
  height : 50%;
  top : 50%;
  left : 50%;
  transform : translate(-50%,-50%);
  display : flex;
  justify-content : center;
  align-items : center;
  flex-direction : column;
`;

const VisualSearchTitle = styled.h5`
  color : #fff;
  font-size : 3em;
`;

const VisualSearchInput = styled.input`
  border:none;
  width : 100%;
  height : 60px;
  padding : 1em 1.5em;
  padding-right : 3em;
  font-size : 1.2em;
  margin : 2em 0;
  background-color : ${(props)=>(props.mod === "light" ? "#fff" : "#333")};
  color : ${(props)=>(props.mod === "light" ? "#333" : "#fff")};
  transition : 0.3s;
  border-radius : 50px;
  box-shadow : 0 0 10px rgba(150,150,150,0.8);
`;

const VisualSearchInputWrap = styled.div`
  width :80%;
  position :relative;
`;

const VisualSearchInputBtn = styled.button`
  position :absolute;
  top : 55px;
  right : 10px;
  border : none;
  width : 50px;
  height : 50x;
  background-color : rgba(0,0,0,0);
  cursor : pointer;
  svg * {
    transiton : 0.3s;
    fill : ${(props)=>(props.mod === "light" ? "#333" : "#fff")};
  }
`;

const VisualCateWrap = styled.div`
  width : calc(100% - 300px);
  margin-left : 100px;
  height : 80%;
  display : flex;
  justify-content : center;
  align-items : center;
`;

const VisualCateList = styled.div`
  position : ${(props)=>(props.status === "open" ? "absolute" : "relative")};
  left : 0;
  top  : 0;
  width : ${(props)=>(props.status === "open" ? "100%" : "90%")};
  background-color : ${(props)=>(props.status === "open" ? "#fff" : "rgba(0,0,0,0)")};
  height : ${(props)=>(props.status === "open" ? "200px" : "100%")};
  overflow : ${(props) => (props.status === "open" ? "visible" : "hidden")};
`;

const VisualCateListWrap = styled.div`
  position : ${(props)=>(props.status === "open" ? "relative" : "absolute")};
  top : 0;
  left : ${(props)=>(props.status === "close" ? "-"+props.size : "0")}px;
  padding : ${(props)=>(props.status === "open" ? "0em 5em" : "0")};
  display : flex;
  justify-content :flex-start;
  align-items : center;
  flex-wrap : ${(props)=>(props.status === "open" ? "wrap" : "nowrap")};
  height : 100%;
  transition : 0.3s;
`;

const VisualCateTitle = styled.p`
  width : 110px;
  margin-right : 2em;
  color : ${(props)=>(props.mod === "light" ? "#333" : "#fff")};
  font-size : 1.3em;
  font-weight : bold;
  transition : 0.3s;
`; 

const VisualCateItem = styled.div`
  padding : 0 2em;
  height : 40px;
  min-width : 150px;
  cursor:pointer;
  text-align:center;
  border-radius : 20px;
  line-height : 40px;
  font-size : 1.1em;
  margin : 0 1em;
  font-weight : bold;
  color : #fff;
  background-color : ${(props)=>(props.backgroundColor)};
  transition : 0.3s;
  opacity : ${(props)=>(props.searchCate !== "" && props.flag === false ? "0.3" : "1")};
  :hover{
    opacity : 0.5;
  }
`;

const Visual = (props)=>{
  const mod = props.mod;
  const searchCate = props.searchCate;
  const getSearchWord = (val)=>{props.getSearchWord(val);}
  const getSearchCate = (val)=>{props.getSearchCate(val);}
  const [visualCateStatus,setVisualCateStatus] = useState("close");
  const cateList = [
    {
      key : "그림",
      backgroundColor : "#59AFE8"
    },
    {
      key : "크로키",
      backgroundColor : "#F46F6F"
    },
    {
      key : "수채화",
      backgroundColor : "#81D86E"
    },
    {
      key : "패턴",
      backgroundColor : "#777777"
    },
    {
      key : "배경",
      backgroundColor : "#495E81"
    },
    {
      key : "취직",
      backgroundColor : "#F49B88"
    },
    {
      key : "코딩",
      backgroundColor : "#3AB014"
    },
    {
      key : "외국어",
      backgroundColor : "#EBC30D"
    },
    {
      key : "작곡/편곡",
      backgroundColor : "#D68EFD"
    }
  ];

  const [visualNav,setVisualNav] = useState(0);
  const getVisualNavRight = ()=>{
    setVisualNav(visualNav <= 480 ? 480 - visualNav <= 150 ? 500 : visualNav+150 : 500 );
  }

  const getVisualNavLeft = ()=>{
    setVisualNav(visualNav >= 0 ? visualNav <= 150 ? 0 : visualNav-150 : 0 );
  }

  const searchInput = useRef(null);
  const VisualSearchEvent = ()=>{getSearchWord(searchInput.current.value);}
  const TransferCateArea = ()=>{setVisualCateStatus(visualCateStatus === "open" ? "close" : "open");}
  const setVisualCate = (val)=>{
    if(val === searchCate) getSearchCate("");
    else getSearchCate(val);
  }

  return(
    <div id="visual">
      <div id="visual_img_wrap">
        <VisualImg src={VisualImg1} alt="visual_img"/>
        <VisualSearchWrap>
          <VisualSearchTitle >스터디 그룹방을 찾아보세요!</VisualSearchTitle>
          <VisualSearchInputWrap>
            <VisualSearchInput  mod={mod} type="text" ref={searchInput} />
            <VisualSearchInputBtn mod={mod} onClick={VisualSearchEvent} ><SearchIcon/></VisualSearchInputBtn>
          </VisualSearchInputWrap>
        </VisualSearchWrap>
      </div>
      <VisualNavStyle id="visual_nav" mod={mod}>
        <VisualNavBtnStyled onClick={getVisualNavLeft} mod={mod} className="visual_nav_btn"><LeftArrowIcon/></VisualNavBtnStyled>
        <VisualNavBtnStyled mod={mod} onClick={TransferCateArea} className="visual_nav_btn"><ListIcon/></VisualNavBtnStyled>
        <VisualNavBtnStyled onClick={getVisualNavRight} mod={mod} className="visual_nav_btn"><RightArrowIcon/></VisualNavBtnStyled>
        <VisualCateWrap>
          <VisualCateTitle mod={mod}>카테고리</VisualCateTitle>
          <VisualCateList status={visualCateStatus}>
            <VisualCateListWrap status={visualCateStatus} size={visualNav}>
              {cateList.map(cate=>(<VisualCateItem key={cate.key} backgroundColor={cate.backgroundColor} searchCate={searchCate} flag={searchCate === cate.key} onClick={()=>{setVisualCate(cate.key)}}>{cate.key}</VisualCateItem>))}
            </VisualCateListWrap>
          </VisualCateList>
        </VisualCateWrap>
      </VisualNavStyle>
    </div>
  );
}

export default Visual;
