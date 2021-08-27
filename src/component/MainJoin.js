import React, {useRef, useState} from 'react';
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
    font-size :3em;
    margin-bottom : 1em;
`;

const JoinForm = styled.form`
    margin-top : 2em;
`;

const JoinFormBox = styled.div`
    width : 450px;
    height : 60px;
    border-bottom : 3px solid #333;
    padding:0 0.5em;
    display : flex;
    align-items : center;
    margin : 3em 0;
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
    color : #aaa;
    position : absolute;
    bottom : -2em;
`;

const JoinOtherBox = styled.div`
    margin-top : 1em;
`;

const JoinOtherLink = styled.p`
    margin : 0.7em 0
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

const MainJoinNext = (props,main_join_form) =>{
    
    const changePath = (link)=>{props.changePath(link)};
    const changeJoinInfo = (info,type)=>{props.changeJoinInfo(info,type);};

    const userId = main_join_form.current.user_id.value;
    const userName = main_join_form.current.user_name.value;
    const userPassword = main_join_form.current.user_password.value;
    const userPasswordCheck = main_join_form.current.user_password_check.value;
    const userPasswordReg = /[`~!@#$%^&*|\\\\\\'\\";:\\/?]/gi;

    if(userId === "" || userName === "" || userPassword === "" || userPasswordCheck === "") return alert("값이 비워져있습니다");
    if(userPassword.length < 6 || !userPasswordReg.test(userPassword)) return alert("비밀번호는 6자이상, 특수문자 1개 이상을 포함해야합니다.");
    if(userPassword !== userPasswordCheck) return alert("비밀번호와 비밀번호 확인 값이 다릅니다.");

    changeJoinInfo(userId,"user_id");
    changeJoinInfo(userName,"user_name");
    changeJoinInfo(userPassword,"user_password");
    changeJoinInfo(userPasswordCheck,"user_password_check");

    changePath('/join/info');
    props.history.push("/join/info");
}

const MainJoin = (props) =>{
    const joinInfo = props.joinInfo;
    const main_join_form = useRef(null);
    const [user_id,setUserId] = useState(joinInfo.user_id);
    const [user_name,setUserName] = useState(joinInfo.user_name);
    const [user_password,setUserPassword] = useState(joinInfo.user_password);
    const InputUserId = (e) =>{setUserId(e.target.value);};
    const InputUserName = (e)=>{setUserName(e.target.value);};
    const InputUserPassword = (e)=>{setUserPassword(e.target.value);};

    console.log(joinInfo);

    return(
        <JoinBox>
            <JoinTitle>회원가입</JoinTitle>
            <JoinForm ref={main_join_form}>
                <JoinFormBox>
                    <HumanIcon/>
                    <JoinInput type="text" placeholder="아이디" name="user_id" value={user_id} onChange={InputUserId} />
                    <JoinErrorMsg></JoinErrorMsg>
                </JoinFormBox>
                <JoinFormBox>
                    <HumanIcon/>
                    <JoinInput type="text" placeholder="이름" name="user_name" value={user_name} onChange={InputUserName} />
                    <JoinErrorMsg></JoinErrorMsg>
                </JoinFormBox>
                <JoinFormBox>
                    <LockIcon/>
                    <JoinInput type="password" placeholder="비밀번호" name="user_password" value={user_password} onChange={InputUserPassword} />
                    <JoinErrorMsg>* 비밀번호는 6자이상, 특수문자 1개 이상을 포함해야합니다.</JoinErrorMsg>
                </JoinFormBox>
                <JoinFormBox>
                    <LockIcon/>
                    <JoinInput type="password" placeholder="비밀번호 확인" name="user_password_check" />
                    <JoinErrorMsg></JoinErrorMsg>
                </JoinFormBox>
                <JoinBtn type="button" onClick={()=>{MainJoinNext(props,main_join_form)}}>다음</JoinBtn>
            </JoinForm>
            <JoinOtherBox>
                <JoinOtherLink><Link to='/login'><span>로그인</span> 화면으로 넘어가기 <RightLongArrowIcon/></Link></JoinOtherLink>
            </JoinOtherBox>
        </JoinBox>
    );
}

export default MainJoin;