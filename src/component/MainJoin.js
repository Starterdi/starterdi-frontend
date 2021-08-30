import React,{useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import JoinCheckedBox from '../svg/JoinCheckedBox';
import RightLongArrowIcon from '../svg/RightLongArrowIcon';
import JoinUnCheckedBox from '../svg/JoinUnCheckedBox';

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
    padding:0 0.5em;
    display : flex;
    align-items : center;
    margin : 3em 0;
    position : relative;
    transition : 0.3s;
    background-color : #F5F6F8;
    border-radius : 10px;
`;

const JoinInputTitle = styled.p`
    font-size : 1.3em;
    font-weight : bold;
    margin-left : 1em;
`;

const JoinInputLabel = styled.label`
    cursor:pointer;
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

const MainJoin = () =>{

    const [all_agree,set_all_agree] = useState(false);
    const change_all_agree = ()=>{
        set_all_agree(all_agree ? false : true);
    }


    return(
        <JoinBox>
            <JoinTitle>회원가입</JoinTitle>
            <JoinForm>
                <JoinFormBox>
                    <input type="checkbox" name="allAgree" hidden onChange={change_all_agree} />
                    <JoinInputLabel for="allAgree">{all_agree ? <JoinCheckedBox/> : <JoinUnCheckedBox/>}</JoinInputLabel>
                    <JoinInputTitle>모두 동의합니다.</JoinInputTitle>
                </JoinFormBox>
            </JoinForm>
            <JoinOtherBox>
                <JoinOtherLink><Link to='/login'><span>로그인</span> 화면으로 넘어가기 <RightLongArrowIcon/></Link></JoinOtherLink>
            </JoinOtherBox>
        </JoinBox>
    );
}

export default MainJoin;