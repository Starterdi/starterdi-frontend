import React from 'react';
import styled, {keyframes} from 'styled-components';
import Wave from 'react-wavify';
import { Route } from 'react-router-dom';
import loginMainCharacter from '../image/loginMainCharacter.png';
import loginAlphabetD from '../image/loginAlphabetD.png';
import MainLogin from '../component/MainLogin';
import OtherLogin from '../component/OtherLogin';


const LoginPage = styled.div`
    position:relative;
    width:100%;
    height:100%;
    background-color:#FFFFFF;
    overflow:hidden;

    .loginWave{
        position:absolute;
        transform :rotate(145deg);
        height:400px;
        width:200px;
        left : -20%;
        top:-33%;
        opacity : 0.2;

        &.second{
            opacity:0.3;
            left:-20%;
            top:-40%;
        }

        &.third{
            opacity : 0.8;
            left:-30%;
            top:-25%;
            transform :rotate(155deg);
        }

        &.down{
            transform:rotate(-30deg);
            top:auto;
            bottom:-10%;
            left : auto;
            right : -30%;

            &.second{
                opacity:0.3;
                right:-20%;
                bottom:-30%;
            }
    
            &.third{
                opacity : 0.8;
                right:-30%;
                bottom:-20%;
                transform :rotate(-25deg);
            }
        }
    }
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

    animation-name : ${(props)=>(props.animation ? props.animation : "")};
    animation-duration : 2s;
    animation-iteration-count: infinite;
    animation-delay : ${(props)=>(props.delay ? props.delay : "0s")};
`;

const WelcomeImgAnimate = keyframes`
  0% {transform:translateY(0%);}
  50% {transform:translateY(-2%);}
  100% {transform:translateY(0%);}
`;

const MakeWave = (props) =>{
    return(
        <Wave className={props.name} fill={props.color} paused={false} options={{
            height:props.height,
            amplitude:props.amplitude,
            speed:props.speed,
            points:props.points,
        }} />
    );
}

const Login = ()=>{
    const WaveList = [
        {
            key:1,
            name:"loginWave",
            color:"#E8A2A8",
            height:90,
            amplitude:30,
            speed:0.7,
            points:5
        },
        {
            key:2,
            name:"loginWave second",
            color:"#E8A2A8",
            height:50,
            amplitude:50,
            speed:0.4,
            points:5
        },
        {
            key:3,
            name:"loginWave third",
            color:"#E8A2A8",
            height:50,
            amplitude:50,
            speed:0.3,
            points:5
        },
        {
            key:4,
            name:"down loginWave",
            color:"#E8A2A8",
            height:90,
            amplitude:30,
            speed:0.7,
            points:5
        },
        {
            key:5,
            name:"down loginWave second",
            color:"#E8A2A8",
            height:50,
            amplitude:50,
            speed:0.4,
            points:5
        },
        {
            key:6,
            name:"down loginWave third",
            color:"#E8A2A8",
            height:50,
            amplitude:50,
            speed:0.3,
            points:5
        },
    ];

    return(
        <LoginPage>
            <LoginImg delay="-0.3s" animation={WelcomeImgAnimate} top="30%" left="100px" imgSize="250px"><img src={loginAlphabetD} alt="loginAlphabetD" /></LoginImg>
            <LoginImg delay="-0.8s" animation={WelcomeImgAnimate} top="20%" right="200px" imgSize="800px"><img src={loginMainCharacter} alt="loginMainCharacter"/></LoginImg>

            <Route path='/5/login' exact component={MainLogin} />
            <Route path='/5/login/other' exact component={OtherLogin} />

            {WaveList.map(Options=>(<MakeWave key={Options.key} name={Options.name} color={Options.color} height={Options.height} amplitude={Options.amplitude} speed={Options.speed} points={Options.points} />))}
        </LoginPage>
    );
}

export default Login;