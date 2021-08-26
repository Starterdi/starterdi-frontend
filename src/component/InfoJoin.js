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
    margin-bottom : 1em;
    font-size :3em;
`;

const JoinForm = styled.form`
    margin-top : 2em;
`;

const JoinFormBox = styled.div`
    width : 450px;
    border-bottom : 3px solid #333;
    padding:1em 0.5em;
    display : flex;
    align-items : center;
    flex-wrap:wrap;
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

const JoinInputTitle = styled.p`
    font-size : 1.3em;
    font-weight : bold;
    margin-left : 1em;
`;

const JoinInputBox = styled.div`
    width : 100%;
    margin-top : 2em;
`;

const JoinInputBtn = styled.button`
    border : 2px solid #333;
    border-radius : 30px;
    background-color : rgba(0,0,0,0);
    padding : 0.5em 1em;
    margin : 0 0.5em;
    font-size : 1.1em;
    cursor:pointer;
`;

const InfoJoin = (props) =>{
    const changePath = (link)=>{props.changePath(link)};

    return(
        <JoinBox>
            <JoinTitle>회원가입</JoinTitle>
            <JoinForm>
                <JoinFormBox>
                    <HumanIcon/>
                    <JoinInput type="text" placeholder="이메일" />
                    <JoinErrorMsg></JoinErrorMsg>
                </JoinFormBox>
                <JoinFormBox>
                    <LockIcon/>
                    <JoinInputTitle>성별</JoinInputTitle>
                    <JoinInputBox>
                        <JoinInputBtn type='button'>여자</JoinInputBtn>
                        <JoinInputBtn type='button'>남자</JoinInputBtn>
                        <JoinInputBtn type='button'>알리고 싶지 않아요!</JoinInputBtn>
                    </JoinInputBox>
                    <JoinErrorMsg></JoinErrorMsg>
                </JoinFormBox>
                <JoinFormBox>
                    <HumanIcon/>
                    <JoinInputTitle>생일</JoinInputTitle>
                    <JoinInputBox>
                        <JoinInput type="date" />
                    </JoinInputBox>
                    <JoinErrorMsg></JoinErrorMsg>
                </JoinFormBox>
                <Link to="/join/profile"><JoinBtn type="button" onClick={changePath.bind('link','/join/profile')}>다음</JoinBtn></Link>
            </JoinForm>
            <JoinOtherBox>
                <JoinOtherLink  onClick={changePath.bind('link','/join')}><Link to='/join'><span>이전</span> 단계로 돌아가기 <RightLongArrowIcon/></Link></JoinOtherLink>
                <JoinOtherLink><Link to='/login'><span>로그인</span> 화면으로 넘어가기 <RightLongArrowIcon/></Link></JoinOtherLink>
            </JoinOtherBox>
        </JoinBox>
    );
}

export default InfoJoin;