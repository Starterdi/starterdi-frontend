import React from 'react';
import styled from 'styled-components';
import loginMainCharacter from '../image/loginMainCharacter.png';
import loginAlphabetD from '../image/loginAlphabetD.png';
import loginDownWave from '../image/loginDownWave.png';
import loginUpWave from '../image/loginUpWave.png';
import HumanIcon from '../svg/HumanIcon';
import LockIcon from '../svg/LockIcon';

const LoginPage = styled.div`
    position:relative;
    width:100%;
    height:100%;
    background-color:#FFFFFF;
    overflow:hidden;
`;

const LoginImg = styled.div`
    position : absolute;
    top : ${(props)=>(props.top ? props.top : "auto")};
    right : ${(props)=>(props.right ? props.right : "auto")};
    left : ${(props)=>(props.left ? props.left : "auto")};
    bottom : ${(props)=>(props.bottom ? props.bottom : "auto")};
    > img{
        width : ${(props)=>(props.imgSize ? props.imgSize : "auto")};
    }
`;

const LoginBox = styled.div`
    width:40%;
    height:60%;
    position:absolute;
    top:20%;
    left:10%;
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
    font-weight : bold;
`;

const LoginArea = styled.div`
    background-color:#EEEEEE;
    width : 70%;
    padding : 1em;
    border-radius : 10px;
    display : flex;
    align-items:center;
    margin-bottom:1em;
    > svg{
        width :25px;
    }
`;

const Login = ()=>{
    return(
        <LoginPage>
            <LoginImg top="25%" left="100px" imgSize="250px"><img src={loginAlphabetD} alt="loginAlphabetD" /></LoginImg>
            <LoginImg top="15%" right="100px" imgSize="800px"><img src={loginMainCharacter} alt="loginMainCharacter"/></LoginImg>
            <LoginImg top="-15%" left="-21%"><img src={loginUpWave} alt="loginUpWave" /></LoginImg>
            <LoginImg bottom="-18%" right="-11%"><img src={loginDownWave} alt="loginDownWave" /></LoginImg>

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
                </form>
            </LoginBox>            
        </LoginPage>
    );
}

export default Login;