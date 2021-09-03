import React,{useState} from 'react';
import styled from 'styled-components';

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
 background-color : ${(props)=>(props.mod === "light" ? "#ffffff" : "#222")}};
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
 border : 1px solid ${(props)=>(props.mod === "light" ? "#333" : "#fff")};
 border-radius : 10px;
 color : ${(props)=>(props.mod === "light" ? "#333" : "#fff")};
 font-size : 1em;
 font-weight : bold;
 background-color :rgba(0,0,0,0);
 transition : 0.3s;
 cursor : pointer;
 :hover{opacity : 0.5;}
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
