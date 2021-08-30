import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';
import Wave from 'react-wavify';
import { Route} from 'react-router-dom';
import MainJoin from '../component/MainJoin';
import InfoJoin from '../component/InfoJoin';
import DetailJoin from '../component/DetailJoin';
import ProfileJoin from '../component/ProfileJoin';
import loginMainCharacter from '../image/loginMainCharacter.png';

const JoinPage = styled.div`
    position:relative;
    width:100%;
    height:100%;
    background-color:#FFFFFF;
    overflow:hidden;

    .joinWave{
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
                bottom:-25%;
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

const JoinStepBox = styled.div`
    position : absolute;
    width : 250px;
    top : 10%;
    right : 50px;
    :before {
        content : '';
        position : absolute;
        height : 350px;
        width : 5px;
        background-color : #E8A2A8;
        top : 0;
        right : 23px;
        z-index : 1;
    }
`;

const JoinStep = styled.div`
    position : relative;
    z-index : 4;
    margin : 2em 0;
    height : 70px;
    width : 100%;
    display : flex;
    align-items : center;
    justify-content : space-between;
`;

const JoinStepTitle = styled.p`
    font-size : 1.3em;
    transition : 0.3s;
    color : ${(props)=>(props.path ? "#E8A2A8" : "#333")};
    margin-left : ${(props)=>(props.path ? "0" : "1em")};
`;

const JoinStepCircle = styled.div`
    width : 50px;
    height : 50px;
    border-radius : 100%;
    border : ${(props)=>(props.path ? "8px" : "3px")} solid #E8A2A8;
    background-color : #FFF;
    margin-left : 1em;
    transition : 0.3s;
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

const Join = (props) =>{
    const WaveList = [
        {
            key:1,
            name:"joinWave",
            color:"#E8A2A8",
            height:90,
            amplitude:30,
            speed:0.7,
            points:5
        },
        {
            key:2,
            name:"joinWave second",
            color:"#E8A2A8",
            height:50,
            amplitude:50,
            speed:0.4,
            points:5
        },
        {
            key:3,
            name:"joinWave third",
            color:"#E8A2A8",
            height:50,
            amplitude:50,
            speed:0.3,
            points:5
        },
        {
            key:4,
            name:"down joinWave",
            color:"#E8A2A8",
            height:90,
            amplitude:30,
            speed:0.7,
            points:5
        },
        {
            key:5,
            name:"down joinWave second",
            color:"#E8A2A8",
            height:50,
            amplitude:50,
            speed:0.4,
            points:5
        },
        {
            key:6,
            name:"down joinWave third",
            color:"#E8A2A8",
            height:50,
            amplitude:50,
            speed:0.3,
            points:5
        },
    ];

    const [path,setPath] =  useState(props.location.pathname);
    const changePath = (link)=>{
        setPath(link);
    }

    const [joinInfo,setJoinInfo] = useState({
        user_id:"",
        user_name:"",
        user_password:"",
        user_password_check:"",
        user_email:"",
        user_gender:"",
        user_birth:"",
        user_profile:"",
        user_profile_img:""
    });

    const changeJoinInfo = (info,type)=>{
        joinInfo[type] = info;
        setJoinInfo(joinInfo);
    }

    console.log(path);

    return(
        <JoinPage>
            <LoginImg animation={WelcomeImgAnimate} top="20%" left="50px" imgSize="800px"><img src={loginMainCharacter} alt="loginMainCharacter"/></LoginImg>
            <Route path='/join' exact component={MainJoin}  />
            <Route path='/join/info' component={(props)=>(<InfoJoin joinInfo={joinInfo} changeJoinInfo={changeJoinInfo} changePath={changePath} {...props} />)} />
            <Route path='/join/detail' component={(props)=>(<DetailJoin joinInfo={joinInfo} changeJoinInfo={changeJoinInfo} changePath={changePath} {...props} />)}/>
            <Route path='/join/profile' component={(props)=>(<ProfileJoin joinInfo={joinInfo} changeJoinInfo={changeJoinInfo} changePath={changePath} {...props} />)}/>
            <JoinStepBox>
                <JoinStep>
                    <JoinStepTitle path={path === '/join' ? true : false}>Step. 1 약관동의</JoinStepTitle>
                    <JoinStepCircle path={path === '/join' ? true : false} />
                </JoinStep>
                <JoinStep>
                    <JoinStepTitle path={(path === '/join/info') || (path === '/join/detail') ? true : false}>Step. 2 회원정보</JoinStepTitle>
                    <JoinStepCircle path={(path === '/join/info') || (path === '/join/detail') ? true : false} />
                </JoinStep>
                <JoinStep>
                    <JoinStepTitle path={path === '/join/profile' ? true : false}>Step. 3 프로필</JoinStepTitle>
                    <JoinStepCircle path={path === '/join/profile' ? true : false}/>
                </JoinStep>
            </JoinStepBox>
            {WaveList.map(Options=>(<MakeWave key={Options.key} name={Options.name} color={Options.color} height={Options.height} amplitude={Options.amplitude} speed={Options.speed} points={Options.points} />))}
        </JoinPage>
    );
}

export default Join;