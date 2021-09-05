import React,{useState} from 'react';
import styled from 'styled-components';
import FillterIcon from '../svg/FillterIcon';
import HomeToggleBackground from '../svg/HomeToggleBackground';
import HomeToggle from '../svg/HomeToggle';

const ContentLeftHeader = styled.div`
  display : flex;
  align-items: center;
  justify-content : center;
  padding : 0 1em;
`;

const ContentSubTitle = styled.p`
  color : #aaa;
  font-weight :bold;
`;

const HomeContentStyled = styled.div`
 background-color : ${(props)=>(props.mod === "light" ? "#ffffff" : "#1F1F1F")}};
 transition : 0.3s;
 color : ${(props)=>(props.mod === "light" ? "#333" : "#f5f5f5")};
 svg > path {
  fill:${(props)=>(props.mod === "light" ? "#333" : "#f5f5f5")};
  transition : 0.3s;
 }
`;

const ContentSort = styled.div`
 display : flex;
 justify-content : flex-start;
 align-items : center;
 margin-left : 2em
`;

const ContentSortItem = styled.button`
  transition : 0.3s all;
 font-weight : bold;
 color : ${(props)=>(props.mod === "light" ? "#333" : "#fff")};
 border : none;
 background-color : rgba(0,0,0,0);
 margin : 0 1em;
 cursor : pointer;
 font-size : 1.2em;
 border-bottom : 3px solid ${(props)=>(props.select ? "#E8A2A8" : "rgba(0,0,0,0)" )};
`;

const ContentRightHeader = styled.div`
 display : flex;
 justify-content : flex-end;
 align-items : center;
 height : 100%;
`;

const MakeStudyBtn = styled.button`
 padding : 0.5em 2em;
 border : 1px solid ${(props)=>(props.mod === "light" ? "#cbcbcb" : "#fff")};
 border-radius : 10px;
 color : ${(props)=>(props.mod === "light" ? "#333" : "#fff")};
 font-size : 1em;
 font-weight : bold;
 background-color :rgba(0,0,0,0);
 transition : 0.3s;
 cursor : pointer;
 :hover{opacity : 0.5;}
`;

const HomeFillterBtn = styled.button`
 border : 1px solid ${(props)=>(props.mod === "light" ? "#cbcbcb" : "#fff")};
 border-radius : 7px;
 padding : 0.7em;
 background-color : rgba(0,0,0,0);
 cursor : pointer;
 display : flex;
 justify-content : center;
 align-items : center;
 margin : 0 1em;
 transition : 0.3s;
 :hover{
   opacity : 0.5;
 }
`;

const HomeSortInput = styled.select`
 width : 170px;
 border-radius : 10px;
 cursor : pointer;
 padding : 0.5em;
 border : 1px solid ${(props)=>(props.mod === "light" ? "#cbcbcb" : "#fff")};
 background-color : rgba(0,0,0,0);
`;

const HomeSortOption = styled.option`

`;

const HomeFindToggle = styled.div`
 margin : 0 1em;
 display : flex;
 justify-content:center;
 align-items : center;
`;

const HomeFindToggleTitle = styled.p`
 margin-right : 0.5em;
`;

const HomeFindToggleWrap = styled.div`
 position : relative;
 display : flex;
 justify-content:center;
 align-items :center;
 > svg{cursor : pointer;}
 > svg:last-child{
   position:absolute;
   left : 3px;
   top : 3px;
 }
`;

const HomeContent = (props) =>{
  const mod = props.mod;
  const [contentSection,setContentSection] = useState("전체");
  const getContentSection = (val)=>{
    setContentSection(val.target.innerText);
  }

  const ContentHeader = (props)=>{
    const mod = props.mod;
    return(
      <div className="content_header">
        <ContentLeftHeader>
          <h5 className="content_title">{props.title}</h5>
          <ContentSubTitle>({props.subTitle})</ContentSubTitle>
          
          <ContentSort>
            <ContentSortItem select={contentSection === "전체"} onClick={getContentSection.bind("전체")} mod={mod}>전체</ContentSortItem>
            <ContentSortItem select={contentSection === "최신순"} onClick={getContentSection.bind("최신순")} mod={mod}>최신순</ContentSortItem>
            <ContentSortItem select={contentSection === "인기순"} onClick={getContentSection.bind("인기순")} mod={mod}>인기순</ContentSortItem>
            <ContentSortItem select={contentSection === "조회순"} onClick={getContentSection.bind("조회순")} mod={mod}>조회순</ContentSortItem>
          </ContentSort>
        </ContentLeftHeader>
        <ContentRightHeader>
          <HomeFindToggle>
            <HomeFindToggleTitle>조건에 맞는 스터디방 찾기</HomeFindToggleTitle>
            <HomeFindToggleWrap>
              <HomeToggleBackground/>
              <HomeToggle/>
            </HomeFindToggleWrap>
          </HomeFindToggle>
          <HomeSortInput mod={mod}>
            <HomeSortOption>정렬 : Name</HomeSortOption>
          </HomeSortInput>
          <HomeFillterBtn mod={mod} ><FillterIcon mod={mod} /></HomeFillterBtn>
          <MakeStudyBtn mod={mod}>방 만들기</MakeStudyBtn>
        </ContentRightHeader>
      </div>
    );
  }

  const ContentSection = (props) =>{
    return(
      <section>
        <ContentHeader mod={props.mod} title={props.title} subTitle={props.subTitle} />
        <div className="content_body">
        </div>
      </section>
    );
  }
  
  return(
    <HomeContentStyled id="content" mod={mod}>
      <ContentSection mod={mod} title="스터디방" subTitle="708" />
    </HomeContentStyled>
  );
}

export default HomeContent;
