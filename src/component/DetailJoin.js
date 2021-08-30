import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HumanIcon from '../svg/HumanIcon';
import LockIcon from '../svg/LockIcon';
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
        ${(props)=>(props.arrow === "left" ? "margin-right : 1em;" : "margin-left : 1em;")}
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
    transition : 0.3s;
    ${(props)=>(props.flag ? "border-color : #E8A2A8; color : #E8A2A8;" : "")}
    :hover {
        border-color : #E8A2A8;
        color : #E8A2A8;
    }
`;

const DetailJoinNext = (props,info_join_form) =>{
    
    const changePath = (link)=>{props.changePath(link)};
    const changeJoinInfo = (info,type)=>{props.changeJoinInfo(info,type);};

    const userEmail = info_join_form.current.user_email.value;
    const userBirth = info_join_form.current.user_birth.value;
    const userGender = info_join_form.current.user_gender.value;
    const userEmailReg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const date = new Date();

    if(userEmail === "" || userBirth === "" || userGender === "") return alert("값을 입력해주세요.");
    if(!userEmailReg.test(userEmail)) return alert("올바른 이메일을 입력해주세요.");
    if(date < new Date(userBirth)) return alert("올바른 생일을 입력해주세요.");

    changeJoinInfo(userEmail,"user_email");
    changeJoinInfo(userBirth,"user_birth");
    changeJoinInfo(userGender,"user_gender");

    changePath('/join/profile');
    props.history.push("/join/profile");
}

const DetailJoin = (props) =>{
    const changePath = (link)=>{props.changePath(link)};
    const joinInfo = props.joinInfo;
    const detail_join_form = useRef(null);

    const [user_email,setUserEmail] = useState(joinInfo.user_email);
    const [user_gender,setUserGender] = useState(joinInfo.user_gender);
    const [user_birth,setUserBirth] = useState(joinInfo.user_birth);

    const InputUserEmail = (e)=>{setUserEmail(e.target.value);};
    const InputUserGender = (e)=>{setUserGender(e.target.value);};
    const InputUserBirth = (e)=>{setUserBirth(e.target.value);};

    return(
        <JoinBox>
            <JoinTitle>회원가입</JoinTitle>
            <JoinForm ref={detail_join_form}>
                <JoinFormBox>
                    <HumanIcon/>
                    <JoinInput type="text" placeholder="이메일" name="user_email" value={user_email} onChange={InputUserEmail} />
                    <JoinErrorMsg></JoinErrorMsg>
                </JoinFormBox>
                <JoinFormBox>
                    <LockIcon/>
                    <JoinInputTitle>성별</JoinInputTitle>
                    <JoinInputBox>
                        <JoinInputBtn onClick={InputUserGender} flag={user_gender === "여자" ? true : false} value="여자" type='button'>여자</JoinInputBtn>
                        <JoinInputBtn onClick={InputUserGender} flag={user_gender === "남자" ? true : false} value="남자" type='button'>남자</JoinInputBtn>
                        <JoinInputBtn onClick={InputUserGender} flag={user_gender === "알리고 싶지 않아요!" ? true : false} value="알리고 싶지 않아요!" type='button'>알리고 싶지 않아요!</JoinInputBtn>
                        <input type="text" name="user_gender" hidden value={user_gender} onChange={InputUserGender} />
                    </JoinInputBox>
                    <JoinErrorMsg></JoinErrorMsg>
                </JoinFormBox>
                <JoinFormBox>
                    <HumanIcon/>
                    <JoinInputTitle>생일</JoinInputTitle>
                    <JoinInputBox>
                        <JoinInput type="date" name="user_birth" value={user_birth} onChange={InputUserBirth} />
                    </JoinInputBox>
                    <JoinErrorMsg></JoinErrorMsg>
                </JoinFormBox>
                <JoinBtn type="button" onClick={()=>{DetailJoinNext(props,detail_join_form)}}>다음</JoinBtn>
            </JoinForm>
            <JoinOtherBox>
                <JoinOtherLink  onClick={changePath.bind('link','/join/info')} arrow="left" ><Link to='/join/info'><LeftLongArrowIcon /> <span>이전</span> 단계로 돌아가기</Link></JoinOtherLink>
                <JoinOtherLink arrow="right"><Link to='/login'><span>로그인</span> 화면으로 넘어가기 <RightLongArrowIcon /></Link></JoinOtherLink>
            </JoinOtherBox>
        </JoinBox>
    );
}

export default DetailJoin;