import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HumanIcon from '../svg/HumanIcon';
import LockIcon from '../svg/LockIcon';
import RightLongArrowIcon from '../svg/RightLongArrowIcon';

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

const LoginInput = styled.input`
    border:none;
    background-color:rgba(0,0,0,0);
    margin-left : 1em;
    width : 90%;
    font-size : 1.1em;
`;

const LoginArea = styled.div`
    background-color:#f2f2f2;
    width : 100%;
    padding : 1em;
    border-radius : 10px;
    display : flex;
    align-items:center;
    margin-bottom:1em;
    > svg{
        width :25px;
    }
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
    :hover{opacity : 0.5}
`;

const LoginOtherBox = styled.div`
    margin-top : 1em;
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

const MainLogin = () =>{
    return(
        <LoginBox>
            <LoginTitle>스타터디에 오신것을<br/>환영합니다!</LoginTitle>
            <form>
                <LoginArea>
                    <HumanIcon/>
                    <LoginInput type="text" placeholder="아이디" />
                </LoginArea>
                <LoginArea>
                    <LockIcon/>
                    <LoginInput type="password" placeholder="비밀번호" />
                </LoginArea>
                <LoginBtn>로그인</LoginBtn>
            </form>
            <LoginOtherBox>
                <LoginOtherLink><Link to="/login/find">아이디 / 비밀번호 찾기<RightLongArrowIcon/></Link></LoginOtherLink>
                <LoginOtherLink><Link to="/login/other">다른 <span>로그인 하기</span><RightLongArrowIcon/></Link></LoginOtherLink>
                <LoginOtherLink><Link to="/join">아직 계정이 없으신가요? <span>회원가입</span><RightLongArrowIcon/></Link></LoginOtherLink>
            </LoginOtherBox>
        </LoginBox>
    );
}

export default MainLogin;