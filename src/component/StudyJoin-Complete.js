import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import JoyCharacter from '../image/JoyCharacter.png';
import LineStar from '../svg/LineStar';
import FullStar from '../svg/FullStar';

const StudyJoinCompleteWrap = styled.div`
    position : relative;
    width : 100%;
    display : flex;
    justify-content : flex-start;
    align-items : center;
    flex-direction : column;
    > svg{position : absolute;}
    > .lineStar{
        :first-child{
            top: 120px;
            left : 39%;
        }

        :nth-child(2){
            top : 250px;
            left : 58%;
        }

        > path{
            transition : 0.3s;
            fill : ${(props)=>(props.mod === "light" ? "#000" : "#fff")};
        }
    }

    > .fullStar{
        :nth-child(3){
            top : 170px;
            left : 60%;
        }

        :nth-child(4){
            width : 15px;
            top : 230px;
            left : 41%;
        }
    }
`;

const StudyJoinCompleteTitle = styled.p`
    font-size : 2em;
    font-weight :bold;
    text-align : center;
    color : ${(props)=>(props.mod === "light" ? "#333" : "#fff")};
    margin-bottom : 2em;
    transition : 0.3s;
    `;

const StudyJoinChara = styled.img`
    width : 250px;
`;

const StudyJoinCompleteText = styled.p`
    margin-top : 2em;
    text-align : center;
    font-size : 1.5em;
    color : ${(props)=>(props.mod === "light" ? "#333" : "#fff")};
    transition : 0.3s;
    > span{
        font-weight : bold;
    }
    `;

const StudyJoinCompleteButton = styled.button`
    padding : 1em 3em;
    background-color : #E8A2A8;
    border : none;
    color : #fff;
    font-size : 1.3em;
    border-radius : 10px;
    cursor : pointer;
    margin-top : 2em;
    transition : 0.3s;
    :hover {
        opacity : 0.5;
    }
`;

const StudyJoinComplete = (props)=>{
    const mod = props.mod;
    const info = props.info;
    return(
        <StudyJoinCompleteWrap mod={mod}>
            <LineStar className="lineStar"/>
            <LineStar className="lineStar"/>
            <FullStar className="fullStar"/>
            <FullStar className="fullStar"/>

            <StudyJoinCompleteTitle mod={mod}>가입 완료</StudyJoinCompleteTitle>
            <StudyJoinChara src={JoyCharacter} alt="가입 완료" />
            <StudyJoinCompleteText mod={mod}><span>{info.title}</span>에 가입을 완료하셨습니다! 당신도 스터디원!<br />이제 활동 시작해볼까요~?</StudyJoinCompleteText>
            <Link to={"/5/studyRoom/"+info.idx}><StudyJoinCompleteButton>활동하러 가기</StudyJoinCompleteButton></Link>
        </StudyJoinCompleteWrap>
    );
}

export default StudyJoinComplete;