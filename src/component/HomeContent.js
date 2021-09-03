import React from 'react';
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
 background-color : ${(props)=>(props.mod === "light" ? "#ffffff" : "#1E1E1E")}};
 transition : 0.3s;
 color : ${(props)=>(props.mod === "light" ? "#333" : "#f5f5f5")};
 svg > path {
  fill:${(props)=>(props.mod === "light" ? "#333" : "#f5f5f5")};
  transition : 0.3s;
 }
`;

const ContentHeader = (props)=>{
  return(
    <div className="content_header">
      <ContentLeftHeader>
        <h5 className="content_title">{props.title}</h5>
        <ContentSubTitle>({props.subTitle})</ContentSubTitle>
      </ContentLeftHeader>
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

const HomeContent = (props) =>{
  const mod = props.mod;
  
  return(
    <HomeContentStyled id="content" mod={mod}>
      <ContentSection mod={mod} title="스터디방" subTitle="708" />
    </HomeContentStyled>
  );
}

export default HomeContent;
