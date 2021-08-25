import React from 'react';
import styled from 'styled-components';
import loginMainCharacter from '../image/loginMainCharacter.png';
import loginAlphabetD from '../image/loginAlphabetD.png';
import loginDownWave from '../image/loginDownWave.png';
import loginUpWave from '../image/loginUpWave.png';

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

const Login = ()=>{
    return(
        <LoginPage>
            <LoginImg top="25%" left="100px" imgSize="250px"><img src={loginAlphabetD} alt="loginAlphabetD" /></LoginImg>
            <LoginImg top="15%" right="100px" imgSize="800px"><img src={loginMainCharacter} alt="loginMainCharacter"/></LoginImg>
            <LoginImg top="-15%" left="-21%"><img src={loginUpWave} alt="loginUpWave" /></LoginImg>
            <LoginImg bottom="-18%" right="-11%"><img src={loginDownWave} alt="loginDownWave" /></LoginImg>

            
        </LoginPage>
    );
}

export default Login;