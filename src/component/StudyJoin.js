import React, { useState } from 'react';
import styled from 'styled-components';
import StudyJoinBackIcon from '../svg/StudyJoinBackIcon';
import { Link} from 'react-router-dom';
import StudyJoinIntroComponent from './StudyJoin-Intro';
import StudyJoinCondition from './StudyJoin-Condition';
import StudyJoinProfile from './StudyJoin-Profile';

const StudyJoinWrap = styled.div`
    width : calc(100% - 300px); 
    height : calc(100% - 7em);
    margin-top : 7em;
    padding : 3em 5em;
`;

const StudyJoinHeader = styled.div`
    width : 100%;
    > * {
        display : flex;
        justify-content : flex-start;
        align-items :center;
    }
`;

const StudyJoinHeaderTitle = styled.p`
    font-size : 1.8em;
    font-weight :bold;
    margin-left:1em;
`;

const StudyJoinBody = styled.div`
    poisition :relative;
    width : 100%;
    margin-top : 3em;
`;

const StudyJoinNav = styled.div`
    margin-bottom : 3em;
    width : 100%;
    display : flex;
    justify-content : space-between;
    align-items : center;
    > * {margin : 0 0.5em;}
`;

const StudyJoinNavItem = styled.div`
    width : 60px;
    hegiht : 60px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
`;

const StudyJoinNavItemTitle = styled.p`
    width : 100%;
    font-size : 1.2em;
    font-weight : bold;
    margin-bottom : 0.5em;
    text-align : center;
`;

const StudyJoinNaveItemCircle = styled.div`
    width : 30px;
    height : 30px;
    border-radius : 100%;
    background-color : ${(props)=>(props.flag === "success" ? "#E8A2A8" : "#F5F6F8")};
`;

const StudyJoinNavLine = styled.div`
    width : 40%;
    height : 7px;
    border-radius : 10px;
    background-color : ${(props)=>(props.flag === "success" ? "#E8A2A8" : "#F5F6F8")};
    margin-top : 2.2em;
`;

const StudyJoin = (props)=>{
    const mod = props.mod;
    const info = props.info;
    const [joinPath,setJoinPath] = useState("1");

    return(
        <StudyJoinWrap>
        {
            info ? 
            (
            <>
                <StudyJoinHeader>
                    <Link to={"/5/studyRoom/"+info.idx}>
                        <StudyJoinBackIcon mod={mod}/>
                        <StudyJoinHeaderTitle>{info.title}</StudyJoinHeaderTitle>
                    </Link>
                </StudyJoinHeader>
                <StudyJoinBody>
                    <StudyJoinNav>
                        <StudyJoinNavItem>
                            <StudyJoinNavItemTitle>소개</StudyJoinNavItemTitle>
                            <StudyJoinNaveItemCircle flag={joinPath >= 1 ? "success" : "false" } />
                        </StudyJoinNavItem>
                        <StudyJoinNavLine flag={joinPath >= 2 ? "success" : "false" } />
                        <StudyJoinNavItem>
                            <StudyJoinNavItemTitle>조건</StudyJoinNavItemTitle>
                            <StudyJoinNaveItemCircle flag={joinPath >= 2 ? "success" : "false" } />
                        </StudyJoinNavItem>
                        <StudyJoinNavLine flag={joinPath >= 3 ? "success" : "false" } />
                        <StudyJoinNavItem>
                            <StudyJoinNavItemTitle>프로필</StudyJoinNavItemTitle>
                            <StudyJoinNaveItemCircle flag={joinPath >= 3 ? "success" : "false" } />
                        </StudyJoinNavItem>
                    </StudyJoinNav>
                    {
                        joinPath === "1" ? <StudyJoinIntroComponent info={info} mod={mod} setJoinPath={setJoinPath} /> :
                        joinPath === "2" ? <StudyJoinCondition info={info} mod={mod} setJoinPath={setJoinPath} /> : 
                        <StudyJoinProfile  info={info} mod={mod} setJoinPath={setJoinPath} />
                    }
                </StudyJoinBody>
            </>
            ) 
            : ""
        }
        </StudyJoinWrap>
    );
}

export default StudyJoin;