import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const JoinBox = styled.div`
    width:700px;
    position:absolute;
    top:10%;
    right:15%;
    padding:2em 0;
`;

const JoinTitle = styled.h1`
    line-height:1.5em;
    font-size :3em;
    margin-bottom : 1em;
`;
const JoinOtherBox = styled.div`
    margin-top : 1em;
`;

const JoinOtherLink = styled.button`
    margin : 0.7em 0;
    transition : 0.3s;
    font-size : 1.1em;
    border : none;
    padding : 1.3em;
    border-radius : 10px;
    background-color : #E8A2A8;
    color : #fff;
    cursor : pointer;
    :hover{
        opacity : 0.5;
    }

    svg {
        margin-left : 1em;
    }
`;

const JoinText = styled.p`
    font-size : 1.3em;
    margin-bottom : 3em;
`;

const SuccessJoin = (props) =>{
    const user_name = props.joinInfo.user_name;
    return(
        <JoinBox>
            <JoinTitle>스타터디 가입완료!</JoinTitle>
            <JoinText>환영합니다 {user_name}님, 스타터디 회원이 되셨습니다!<br/>로그인을 하시고 더 많은 기능을 이용하세요!</JoinText>
            <JoinOtherBox>
                <Link to='/5/login'><JoinOtherLink><span>로그인</span> 하러가기</JoinOtherLink></Link>
            </JoinOtherBox>
        </JoinBox>
    );
}

export default SuccessJoin;