import React,{useRef,useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import JoinAllCheckedBox from '../svg/JoinAllCheckedBox';
import RightLongArrowIcon from '../svg/RightLongArrowIcon';
import JoinCheckedBox from '../svg/JoinCheckedBox';

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
    margin : 2em 0;
    display : flex;
    align-items : center;
    position : relative;
    transition : 0.3s;
    background-color : #F5F6F8;
    border-radius : 10px;

    &.mainCheck {
        background-color : rgba(0,0,0,0);
        margin : 0;
        p {
            color : #5E5E5E;
            font-size : 1em;
        }
    }
`;

const JoinInputTitle = styled.p`
    font-size : 1.3em;
    font-weight : bold;
    margin-left : 1em;
`;

const JoinInputLabel = styled.label`
    cursor:pointer;
    display : flex;
    align-items : center;
    margin-left : 0.5em;
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

const MainJoin = (props) =>{
    const changePath = (link)=>{props.changePath(link)};
    const main_join_form = useRef(null);
    const [all_agree,set_all_agree] = useState(false);
    const [info_agree,set_info_agree] = useState(false);
    const [use_agree,set_use_agree] = useState(false);
    const [send_agree,set_send_agree] = useState(false);
    const change_all_agree = ()=>{MainCheckEvent("all");}
    const change_info_agree = ()=>{MainCheckEvent("info");}
    const change_use_agree = ()=>{MainCheckEvent("use");}
    const change_send_agree = ()=>{MainCheckEvent("send");}

    const MainCheckEvent = (type)=>{
        const all = main_join_form.current.allAgree.checked;
        const info = main_join_form.current.infoAgree.checked;
        const use = main_join_form.current.useAgree.checked;
        const send = main_join_form.current.sendAgree.checked;

        if(type === "all"){
            set_all_agree(all ? false : true);
            set_info_agree(all ? false : true);
            set_use_agree(all ? false : true);
            set_send_agree(all ? false : true);
        }else{
            switch(type){
                case "info" : 
                    set_all_agree(use && send && !info);
                    set_info_agree(info ? false : true);
                    break;

                case "use" : 
                    set_all_agree(info && send && !use);
                    set_use_agree(use ? false : true);
                    break;

                case "send" : 
                    set_all_agree(info && use && !send);
                    set_send_agree(send ? false : true);
                    break;
                
                default : break;
            }
        }
    }

    const MainJoinNext = (props)=>{
        if(!all_agree) return alert("필수 항목에 동의해주세요.");
        changePath("/join/info");
        props.history.push("/join/info");
    }

    return(
        <JoinBox>
            <JoinTitle>회원가입</JoinTitle>
            <JoinForm ref={main_join_form}>
                <JoinFormBox>
                    <JoinInputLabel htmlFor="allAgree" onClick={change_all_agree}>
                        <JoinAllCheckedBox checked={all_agree} />
                    </JoinInputLabel>
                    <input type="checkbox" name="allAgree" hidden checked={all_agree} onChange={change_info_agree} />
                    <JoinInputTitle>모두 동의합니다.</JoinInputTitle>
                </JoinFormBox>
                <div>
                    <JoinFormBox className="mainCheck">
                        <JoinInputLabel htmlFor="infoAgree" onClick={change_info_agree}>
                            <JoinCheckedBox checked={info_agree} />
                        </JoinInputLabel>
                        <input type="checkbox" name="infoAgree" hidden checked={info_agree} onChange={change_info_agree} />
                        <JoinInputTitle>개인정보 수집 및 이용동의 (필수)</JoinInputTitle>
                    </JoinFormBox>
                    <JoinFormBox className="mainCheck">
                        <JoinInputLabel htmlFor="useAgree" onClick={change_use_agree}>
                            <JoinCheckedBox checked={use_agree} />
                        </JoinInputLabel>
                        <input type="checkbox" name="useAgree" hidden checked={use_agree} onChange={change_use_agree} />
                        <JoinInputTitle>스타터디 이용약관 (필수)</JoinInputTitle>
                    </JoinFormBox>
                    <JoinFormBox className="mainCheck">
                        <JoinInputLabel htmlFor="sendAgree" onClick={change_send_agree}>
                            <JoinCheckedBox checked={send_agree} />
                        </JoinInputLabel>
                        <input type="checkbox" name="sendAgree" hidden checked={send_agree} onChange={change_send_agree} />
                        <JoinInputTitle>프로모션 등 정보수신 (필수)</JoinInputTitle>
                    </JoinFormBox>
                </div>
                <JoinBtn type="button" onClick={()=>{MainJoinNext(props)}}>다음</JoinBtn>
            </JoinForm>
            <JoinOtherBox>
                <JoinOtherLink><Link to='/login'><span>로그인</span> 화면으로 넘어가기 <RightLongArrowIcon/></Link></JoinOtherLink>
            </JoinOtherBox>
        </JoinBox>
    );
}

export default MainJoin;