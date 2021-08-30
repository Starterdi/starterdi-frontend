import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CameraIcon from '../svg/CameraIcon';
import basicProfile from '../image/mainCharacter.png';
import LeftLongArrowIcon from '../svg/LeftLongArrowIcon';
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
    margin-bottom : 1em;
    font-size :3em;
`;

const JoinForm = styled.div`
    margin-top : 2em;
`;

const JoinFormBox = styled.div`
    width : 450px;
    border-bottom : 3px solid #333;
    padding:1em 0.5em;
    display : flex;
    align-items : center;
    flex-wrap : wrap;
    margin : 2em 0;
    position : relative;
    transition : 0.3s;  
    svg > path{transition : 0.3s;}  
    :hover{
        border-color : #E8A2A8;
        svg > path{
            fill : #E8A2A8;
        }
    }
`;

const JoinInput = styled.input`
    border : none;
    background-color :rgba(0,0,0,0);
    width : 100%;
    margin-top : 1em;
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
    margin : 0.7em 0;
    transition : 0.3s;
    font-size : 1.1em;
    span {font-weight : bold;}
    :hover{
        opacity : 0.5;
    }

    svg {
        ${(props)=>(props.arrow === "left" ? "margin-right : 1em;" : "margin-left : 1em;")}
    }
`;

const JoinInputTitle = styled.p`
    font-size : 1.3em;
    font-weight : bold;
    width : 100%;
`;

const JoinInputBox = styled.div`
    width : 100%;
    margin-top : 2em;
`;

const JoinProfileBox = styled.div`
    width : 200px;
    height : 200px;
    border-radius : 100%;
    border : 10px solid #E8A2A8;
    position : relative;
    display:flex;
    justify-content : center;
    align-items : center;

    img {
        width : 80%;
    }
`;

const JoinProfileAddBtn = styled.button`
    position : absolute;
    width :50px;
    height : 50px;
    display : flex;
    justify-content : center;
    align-items : center;
    border : 2px solid #333;
    border-radius : 100%;
    background-color : #fff;
    bottom : 0px;
    right : 0px;
    cursor : pointer;
    transition : 0.3s;
    :hover { background-color : #ddd }
`;

const ProfileJoin = (props) =>{
    const changePath = (link)=>{props.changePath(link)};

    return(
        <JoinBox>
            <JoinTitle>회원가입</JoinTitle>
            <JoinForm>
                <JoinInputBox>
                    <JoinProfileBox>
                        <img src={basicProfile} />
                        <JoinProfileAddBtn>
                            <CameraIcon/>
                        </JoinProfileAddBtn>
                    </JoinProfileBox>
                </JoinInputBox>
                <JoinFormBox>
                    <JoinInputTitle>한줄소개</JoinInputTitle>
                    <JoinInput type="text" />
                    <JoinErrorMsg></JoinErrorMsg>
                </JoinFormBox>
                <Link to='/join/success'><JoinBtn type="button">가입완료</JoinBtn></Link>
            </JoinForm>
            <JoinOtherBox>
                <JoinOtherLink  onClick={changePath.bind('link','/join/detail')} arrow="left" ><LeftLongArrowIcon /><Link to='/join/detail'><span>이전</span> 단계로 넘어가기</Link></JoinOtherLink>                
                <JoinOtherLink arrow="right"><Link to='/login'><span>로그인</span> 화면으로 넘어가기 <RightLongArrowIcon/></Link></JoinOtherLink>
            </JoinOtherBox>
        </JoinBox>
    );
}

export default ProfileJoin;