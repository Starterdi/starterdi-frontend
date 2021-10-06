import React from 'react';
import styled from 'styled-components';

const StudyJoinContent = styled.div`
    width : 100%;
    padding : 2em 1em;
    display : flex;
    justfiy-content: space-between;
    align-items:flex-start;
`;

const StudyJoinProfileWrap = styled.div`
    width : 400px;
    height : 450px;
    border-radius : 10px;
    overflow : hidden;
    > img {
        width : 100%;
        min-height : 100%;
    }
`;

const StudyJoinIntro = styled.pre`
    width : calc(80% - 400px);
    padding : 2em 0;
    margin-left : 5em;
    font-size : 1.3em;
    font-weight : bold;
    overflow : auto;
    ::-webkit-scrollbar{
        width : 8px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #333;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color : rgba(0,0,0,0.3);
    }
`;

const StudyJoinButtonBox = styled.div`
    display : flex;
    justify-content : flex-end;
    align-items: center;
    width : 100%;
    margin-top : 2em;
    position : absolute;
    bottom : 6em;
    right : 4em;
`;

const StudyJoinButton = styled.button`
    width : 120px;
    height : 50px;
    border-radius : 10px;
    background-color : #E8A2A8;
    color : #fff;
    font-size : 1.1em;
    border : none;
    cursor : pointer;
    transition : 0.3s;
    :hover{
        opacity : 0.5;
    }
`;

const StudyJoinIntroComponent = (props)=>{
    const info = props.info;
    const mod = props.mod;
    const setJoinPath = (value)=>{props.setJoinPath(value);}

    const NextComponent=()=>{setJoinPath("2");}
    return(
        <>
            <StudyJoinContent mod={mod}>
                <StudyJoinProfileWrap>
                    <img src={"../upload/"+info.profile_img} alt="스터디 가입하기 프로필 사진" />
                </StudyJoinProfileWrap>
                <StudyJoinIntro>{info.join_intro}</StudyJoinIntro>
            </StudyJoinContent>
            <StudyJoinButtonBox>
                <StudyJoinButton onClick={NextComponent}>다음</StudyJoinButton>
            </StudyJoinButtonBox>
        </>
    );
}

export default StudyJoinIntroComponent;