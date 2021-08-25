import React from 'react';
import styled , { keyframes } from 'styled-components';
import mainCharacter from '../image/mainCharacter.png';
import mainCharacter2 from '../image/mainCharacter2.png';
import welcomeAlphabetA from '../image/welcomeAlphabetA.png';
import welcomeAlphabetE from '../image/welcomeAlphabetE.png';
import welcomeAlphabetR from '../image/welcomeAlphabetR.png';
import welcomeAlphabetS from '../image/welcomeAlphabetS.png';
import welcomeBorderBlueCircle from '../image/welcomeBorderBlueCircle.png';
import welcomeBorderGreenCircle from '../image/welcomeBorderGreenCircle.png';
import welcomeBorderPinkCircle from '../image/welcomeBorderPinkCircle.png';
import welcomeLargeRectangleBlue from '../image/welcomeLargeRectangleBlue.png';
import welcomeLargeRectanglePink from '../image/welcomeLargeRectanglePink.png';
import welcomeLargeRectangleYellow from '../image/welcomeLargeRectangleYellow.png';
import welcomeLargeWhiteCircle from '../image/welcomeLargeWhiteCircle.png';
import welcomeLargeYellowCircle from '../image/welcomeLargeYellowCircle.png';
import welcomeMiddleGreenCircle from '../image/welcomeMiddleGreenCircle.png';
import welcomeMiddlePinkCircle from '../image/welcomeMiddlePinkCircle.png';
import welcomeMiddleWhiteCircle from '../image/welcomeMiddleWhiteCircle.png';
import welcomeMiddlePurpleCircle from '../image/welcomeMiddlePurpleCircle.png';
import welcomeSmallBlueCircle from '../image/welcomeSmallBlueCircle.png';
import welcomeSmallDarkCircle from '../image/welcomeSmallDarkCircle.png';
import welcomeSmallPurpleCircle from '../image/welcomeSmallPurpleCircle.png';
import welcomeSmallWhiteCircle from '../image/welcomeSmallWhiteCircle.png';
import welcomeSmallYellowCircle from '../image/welcomeSmallYellowCircle.png';

const WelcomePage = styled.div`
    position:relative;
    width:100%;
    height:100%;
    background-color:#2C2E3B;
    flex-direction:column;
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
`;


const WelcomeBtn = styled.button`
    margin-top : 5em;
    width : 700px;
    padding:1em;
    border:none;
    border-radius:20px;
    background-color : #FFFFFF;
    text-align:center;
    font-weight:bold;
    cursor:pointer;
    font-size:1.7em;
    transition:0.3s;

    :hover{
        opacity:0.8;
    }
`;

const WelcomeImgAnimate = keyframes`
  0% {transform:translateY(5%);}
  50% {transform:translateY(-12%);}
  100% {transform:translateY(5%);}
`;

const WelcomeImgAnimate2 = keyframes`
    0% {transform:rotate(5deg);}
    50% {transform:rotate(-12deg);}
    100% {transform:rotate(5deg);}
`;

const WelcomeImg = styled.div`
    animation-name : ${(props)=>(props.animation ? props.animation : WelcomeImgAnimate)};
    animation-duration : 2s;
    animation-iteration-count: infinite;
    animation-delay : ${(props)=>(props.delay ? props.delay : "0s")};
    position : ${(props)=>(props.position ? props.position : "relative")};
    top:${(props)=>(props.top ? props.top : "0")};
    left:${(props)=>(props.left ? props.left : "0")};
    > img{
        transform : rotate(${(props)=>props.rotate ? props.rotate : "0"});
    }
`;

const WelcomeImgBox = styled.div`
    display:flex;
    position:relative;
`;

const WelcomeImgs = (props)=>{
    return(
        <WelcomeImg rotate={props.rotate} position={props.position} left={props.left} top={props.top} animation={props.animation} delay={props.delay}><img src={props.imgSrc} alt={props.imgAlt} /></WelcomeImg>
    );
}

const Welcome = () =>{

    return(
        <WelcomePage>
            <WelcomeImgBox>
                <WelcomeImgs imgSrc={mainCharacter} alt="mainCharacter" />
                <WelcomeImgs delay="-0.5s" imgSrc={mainCharacter2} alt="mainCharacter2" />
                <WelcomeImgs rotate="10deg" position="absolute" top="-60%" left="-70%" animation={WelcomeImgAnimate2} imgSrc={welcomeAlphabetS} alt="welcomeAlphabetS" />
                <WelcomeImgs rotate="-20deg" position="absolute" top="70%" left="-40%" animation={WelcomeImgAnimate2} imgSrc={welcomeAlphabetE} alt="welcomeAlphabetE" />
                <WelcomeImgs rotate="-40deg" position="absolute" top="-70%" left="120%" animation={WelcomeImgAnimate2} imgSrc={welcomeAlphabetR} alt="welcomeAlphabetR" />
                <WelcomeImgs rotate="30deg" position="absolute" top="50%" left="110%" animation={WelcomeImgAnimate2} imgSrc={welcomeAlphabetA} alt="welcomeAlphabetA" />
                <WelcomeImgs position="absolute" top="-10%" left="118%" imgSrc={welcomeBorderBlueCircle} alt="welcomeBorderBlueCircle" />
                <WelcomeImgs position="absolute" top="60%" left="-20%" imgSrc={welcomeBorderGreenCircle} alt="welcomeBorderGreenCircle" />
                <WelcomeImgs position="absolute" top="160%" left="110%" imgSrc={welcomeBorderPinkCircle} alt="welcomeBorderPinkCircle" />
                <WelcomeImgs position="absolute" top="170%" left="-50%" imgSrc={welcomeLargeRectangleBlue} alt="welcomeLargeRectangleBlue" />
                <WelcomeImgs position="absolute" top="100%" left="-70%" imgSrc={welcomeLargeRectanglePink} alt="welcomeLargeRectanglePink" />
                <WelcomeImgs position="absolute" top="-40%" left="170%" imgSrc={welcomeLargeRectangleYellow} alt="welcomeLargeRectangleYellow" />
                <WelcomeImgs position="absolute" top="40%" left="150%" imgSrc={welcomeLargeWhiteCircle} alt="welcomeLargeWhiteCircle" />
                <WelcomeImgs position="absolute" top="-60%" left="-70%" imgSrc={welcomeLargeYellowCircle} alt="welcomeLargeYellowCircle" />
                <WelcomeImgs position="absolute" top="180%" left="70%" imgSrc={welcomeMiddleGreenCircle} alt="welcomeMiddleGreenCircle" />
                <WelcomeImgs position="absolute" top="130%" left="160%" imgSrc={welcomeMiddlePinkCircle} alt="welcomeMiddlePinkCircle" />
                <WelcomeImgs position="absolute" top="-55%" left="140%" imgSrc={welcomeMiddlePurpleCircle} alt="welcomeMiddlePurpleCircle" />
                <WelcomeImgs position="absolute" top="-25%" left="30%" imgSrc={welcomeMiddleWhiteCircle} alt="welcomeMiddleWhiteCircle" />
                <WelcomeImgs position="absolute" top="160%" left="-70%" imgSrc={welcomeSmallBlueCircle} alt="welcomeSmallBlueCircle" />
                <WelcomeImgs position="absolute" top="180%" left="0%" imgSrc={welcomeSmallDarkCircle} alt="welcomeSmallDarkCircle" />
                <WelcomeImgs position="absolute" top="-30%" left="50%" imgSrc={welcomeSmallPurpleCircle} alt="welcomeSmallPurpleCircle" />
                <WelcomeImgs position="absolute" top="120%" left="190%" imgSrc={welcomeSmallWhiteCircle} alt="welcomeSmallWhiteCircle" />
                <WelcomeImgs position="absolute" top="100%" left="50%" imgSrc={welcomeSmallYellowCircle} alt="welcomeSmallYellowCircle" />
            </WelcomeImgBox>
            <WelcomeBtn>시작하기</WelcomeBtn>
        </WelcomePage>
    )
}

export default Welcome;