import React, {useEffect,useState} from 'react';
import styled , { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
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

    transition : opacity 0.3s;
    opacity : ${(props)=>(props.hover ? 0.1 : 1)};
`;

const WelcomeImgBox = styled.div`
    display:flex;
    position:relative;
`;

const WelcomeImgs = (props)=>{
    return(
        <WelcomeImg hover={props.hover} rotate={props.rotate} position={props.position} left={props.left} top={props.top} animation={props.animation} delay={props.delay}><img src={props.imgSrc} alt={props.imgAlt} /></WelcomeImg>
    );
}

const Welcome = () =>{
    const WelcomeImgList = [
        {
            key:mainCharacter,
            delay:"0s",
            position:"relative",
            top:"0",
            left:"0",
            rotate:"0deg",
            animation:""
        },
        {
            key:mainCharacter2,
            delay:"-0.5s",
            position:"relative",
            top:"0",
            left:"0",
            rotate:"0deg",
            animation:""
        },
        {
            key:welcomeAlphabetA,
            delay:"0s",
            position:"absolute",
            top:"50%",
            left:"110%",
            rotate:"30deg",
            animation:WelcomeImgAnimate2
        },
        {
            key:welcomeAlphabetR,
            delay:"0s",
            position:"absolute",
            top:"-70%",
            left:"120%",
            rotate:"-40deg",
            animation:WelcomeImgAnimate2
        },
        {
            key:welcomeAlphabetS,
            delay:"0s",
            position:"absolute",
            top:"-60%",
            left:"-70%",
            rotate:"10deg",
            animation:WelcomeImgAnimate2
        },
        {
            key:welcomeAlphabetE,
            delay:"0s",
            position:"absolute",
            top:"70%",
            left:"-40%",
            rotate:"-20deg",
            animation:WelcomeImgAnimate2
        },
        {
            key:welcomeBorderBlueCircle,
            delay:"0s",
            position:"absolute",
            top:"-10%",
            left:"118%",
            rotate:"0deg",
            animation:WelcomeImgAnimate
        },
        {
            key:welcomeBorderGreenCircle,
            delay:"0s",
            position:"absolute",
            top:"60%",
            left:"-20%",
            rotate:"0deg",
            animation:WelcomeImgAnimate
        },
        {
            key:welcomeBorderPinkCircle,
            delay:"0s",
            position:"absolute",
            top:"160%",
            left:"110%",
            rotate:"0deg",
            animation:WelcomeImgAnimate
        },
        {
            key:welcomeLargeRectangleBlue,
            delay:"0s",
            position:"absolute",
            top:"170%",
            left:"-50%",
            rotate:"0deg",
            animation:WelcomeImgAnimate
        },
        {
            key:welcomeLargeRectanglePink,
            delay:"0s",
            position:"absolute",
            top:"100%",
            left:"-70%",
            rotate:"0deg",
            animation:WelcomeImgAnimate
        },
        {
            key:welcomeLargeRectangleYellow,
            delay:"0s",
            position:"absolute",
            top:"-40%",
            left:"170%",
            rotate:"0deg",
            animation:WelcomeImgAnimate
        },
        {
            key:welcomeLargeWhiteCircle,
            delay:"0s",
            position:"absolute",
            top:"40%",
            left:"150%",
            rotate:"0deg",
            animation:WelcomeImgAnimate
        },
        {
            key:welcomeLargeYellowCircle,
            delay:"0s",
            position:"absolute",
            top:"-60%",
            left:"-70%",
            rotate:"0deg",
            animation:WelcomeImgAnimate
        },
        {
            key:welcomeMiddleGreenCircle,
            delay:"0s",
            position:"absolute",
            top:"180%",
            left:"70%",
            rotate:"0deg",
            animation:WelcomeImgAnimate
        },
        {
            key:welcomeMiddlePinkCircle,
            delay:"0s",
            position:"absolute",
            top:"130%",
            left:"160%",
            rotate:"0deg",
            animation:WelcomeImgAnimate
        },
        {
            key:welcomeMiddlePurpleCircle,
            delay:"0s",
            position:"absolute",
            top:"-55%",
            left:"140%",
            rotate:"0deg",
            animation:WelcomeImgAnimate
        },
        {
            key:welcomeMiddleWhiteCircle,
            delay:"0s",
            position:"absolute",
            top:"-25%",
            left:"30%",
            rotate:"0deg",
            animation:WelcomeImgAnimate
        },
        {
            key:welcomeSmallBlueCircle,
            delay:"0s",
            position:"absolute",
            top:"160%",
            left:"-70%",
            rotate:"0deg",
            animation:WelcomeImgAnimate
        },
        {
            key:welcomeSmallDarkCircle,
            delay:"0s",
            position:"absolute",
            top:"180%",
            left:"0%",
            rotate:"0deg",
            animation:WelcomeImgAnimate
        },
        {
            key:welcomeSmallPurpleCircle,
            delay:"0s",
            position:"absolute",
            top:"-30%",
            left:"50%",
            rotate:"0deg",
            animation:WelcomeImgAnimate
        },
        {
            key:welcomeSmallWhiteCircle,
            delay:"0s",
            position:"absolute",
            top:"120%",
            left:"190%",
            rotate:"0deg",
            animation:WelcomeImgAnimate
        },
        {
            key:welcomeSmallYellowCircle,
            delay:"0s",
            position:"absolute",
            top:"100%",
            left:"50%",
            rotate:"0deg",
            animation:WelcomeImgAnimate
        },
    ]

    const [hover,setHover] = useState(0);
    const HoverEffect = () =>{
        setHover(hover ? false : true);
    }

    useEffect(()=>{

    });

    return(
        <WelcomePage>
            <WelcomeImgBox>
                {WelcomeImgList.map(Img=>(<WelcomeImgs rotate={Img.rotate} delay={Img.delay} position={Img.position} top={Img.top} left={Img.left} animation={Img.animation} imgSrc={Img.key} alt={Img.key} hover={hover} />))}
            </WelcomeImgBox>
            <Link to="/5/login"><WelcomeBtn onMouseOver={HoverEffect} onMouseOut={HoverEffect}>시작하기</WelcomeBtn></Link>
        </WelcomePage>
    )
}

export default Welcome;