import React from 'react';
import styled from 'styled-components';
import HomeContentArrowIcon from '../svg/HomeContentArrowIcon';

const HomeContentStyled = styled.div`
 background-color : ${(props)=>(props.mod === "light" ? "#ffffff" : "#1E1E1E")}};
 transition : 0.3s;
 color : ${(props)=>(props.mod === "light" ? "#333" : "#f5f5f5")};
 svg > path {
  fill:${(props)=>(props.mod === "light" ? "#333" : "#f5f5f5")};
  transition : 0.3s;
 }
`;

const StudyItemStyled = styled.div`
 background-color : ${(props)=>(props.mod === "light" ? "#ffffff" : "#1E1E1E")};
 transition : 0.3s background-color;
`;

const studyList = [
  {title : "Study 1", subTitle : "Study 1 - sub Title "},
  {title : "Study 2", subTitle : "Study 2 - sub Title "},
  {title : "Study 3", subTitle : "Study 3 - sub Title "}
];

const StudyItem = (props) => {
  return(
    <StudyItemStyled className="study_item" mod={props.mod}>
      <div className="study_img"></div>
      <div className="study_info">
        <h5 className="study_title">{props.title}</h5>
        <p className="study_subTitle">{props.subTitle}</p>
      </div>
    </StudyItemStyled>
  );
}

const ContentHeader = (props)=>{
  return(
    <div className="content_header">
      <h5 className="content_title">{props.title}</h5>
      <HomeContentArrowIcon/>
    </div>
  );
}

const ContentSection = (props) =>{
  return(
    <section>
      <ContentHeader mod={props.mod} title={props.title} />
      <div className="content_body">
        <StudyItem title={studyList[0].title} subTitle={studyList[0].subTitle} mod={props.mod} />
      </div>
    </section>
  );
}

const HomeContent = (props) =>{
  const mod = props.mod;
  
  return(
    <HomeContentStyled id="content" mod={mod}>
      <ContentSection mod={mod} title="신규개설"/>
      <ContentSection mod={mod} title="추천스터디"/>
      <ContentSection mod={mod} title="최신 스터디 소식"/>
    </HomeContentStyled>
  );
}

export default HomeContent;
