import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import RightLongArrowIcon from '../svg/RightLongArrowIcon';
import GoogleIcon from '../svg/GoogleIcon';
import LockIcon from '../svg/LockIcon';

const LoginBox = styled.div`
    width:600px;
    position:absolute;
    top:20%;
    left:15%;
    padding:3em 5em;
`;

const LoginTitle = styled.h1`
    line-height:1.8em;
    font-size:3em;
    font-weight:bold;
    margin-bottom : 1em;
`;

const LoginBtn = styled.button`
    border : 1px solid #aaa;
    border-radius : 20px;
    padding : 1em 2.5em;
    margin : 1em 0;
    font-weight : bold;
    background-color : rgba(0,0,0,0);
    font-size : 1.4em;
    cursor : pointer;
    transition : 0.3s ;
    width : 100%;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    :hover{opacity : 0.5}
    >svg{margin-right:1em;}
`;

const LoginOtherBox = styled.div`
    margin : 3em 0;
`;

const LoginOtherLink = styled.p`
    margin : 0.7em 0;
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

const OtherLoginBox = styled.div`
`;

const OtherLogin = () =>{
    return(
        <LoginBox>
            <LoginTitle>스타터디에 오신것을<br/>환영합니다!</LoginTitle>
            <OtherLoginBox>
                <LoginBtn><GoogleIcon/><span>구글 로그인</span></LoginBtn>
                <LoginBtn><LockIcon/><span>카카오톡 로그인</span></LoginBtn>
            </OtherLoginBox>

            <LoginOtherBox>
                <LoginOtherLink><Link to="/login">스타터디 로그인 하기<RightLongArrowIcon/></Link></LoginOtherLink>
                <LoginOtherLink><Link to="/join">아직 계정이 없으신가요? <span>회원가입</span><RightLongArrowIcon/></Link></LoginOtherLink>
            </LoginOtherBox>
        </LoginBox>
    );
}

export default OtherLogin;