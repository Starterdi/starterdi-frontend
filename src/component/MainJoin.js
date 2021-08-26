import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HumanIcon from '../svg/HumanIcon';
import LockIcon from '../svg/LockIcon';
import RightLongArrowIcon from '../svg/RightLongArrowIcon';

const JoinBox = styled.div`
    width:700px;
    position:absolute;
    top:10%;
    right:15%;
    padding:2em 0;
`;

const JoinTitle = styled.h1`
    line-height:1.5em;
    font-size :3em;
    margin-bottom : 1em;
`;

const JoinForm = styled.form`
    margin-top : 2em;
`;

const JoinFormBox = styled.div`
    width : 450px;
    height : 60px;
    border-bottom : 3px solid #333;
    padding:0 0.5em;
    display : flex;
    align-items : center;
    margin : 2em 0;
    position : relative;
`;

const JoinInput = styled.input`
    width : 90%;
    border : none;
    background-color :rgba(0,0,0,0);
    margin-left : 1em;
    font-size : 1.2em;
`;

const JoinBtn = styled.button`
    border : 1px solid #aaa;
    border-radius : 20px;
    padding : 1em 2.5em;
    margin : 1em 0;
    font-weight : bold;
    background-color : rgba(0,0,0,0);
    font-size : 1.4em;
    cursor : pointer;
    transition : 0.3s ;
    :hover{opacity : 0.5}
`;

const JoinErrorMsg = styled.p`
    color : #E32121;
    position : absolute;
    bottom : -2em;
`;

const JoinOtherBox = styled.div`
    margin-top : 1em;
`;

const JoinOtherLink = styled.p`
    margin : 0.7em 0
    transition : 0.3s;
    font-size : 1.1em;
    span {font-weight : bold;}
    :hover{
        opacity : 0.5;
    }

    svg {
        margin-left : 1em;
    }
`;

const MainJoin = (props) =>{
    const changePath = (link)=>{props.changePath(link)};

    return(
        <JoinBox>
            <JoinTitle>회원가입</JoinTitle>
            <JoinForm>
                <JoinFormBox>
                    <HumanIcon/>
                    <JoinInput type="text" placeholder="아이디" />
                    <JoinErrorMsg></JoinErrorMsg>
                </JoinFormBox>
                <JoinFormBox>
                    <HumanIcon/>
                    <JoinInput type="text" placeholder="이름" />
                    <JoinErrorMsg></JoinErrorMsg>
                </JoinFormBox>
                <JoinFormBox>
                    <LockIcon/>
                    <JoinInput type="password" placeholder="비밀번호" />
                    <JoinErrorMsg></JoinErrorMsg>
                </JoinFormBox>
                <JoinFormBox>
                    <LockIcon/>
                    <JoinInput type="password" placeholder="비밀번호 확인" />
                    <JoinErrorMsg></JoinErrorMsg>
                </JoinFormBox>
                <Link to='/join/info'><JoinBtn type="button" onClick={changePath.bind('link','/join/info')}>다음</JoinBtn></Link>
            </JoinForm>
            <JoinOtherBox>
                <JoinOtherLink><Link to='/login'><span>로그인</span> 화면으로 넘어가기 <RightLongArrowIcon/></Link></JoinOtherLink>
            </JoinOtherBox>
        </JoinBox>
    );
}

export default MainJoin;