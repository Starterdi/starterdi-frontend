import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import CalendarIcon from '../svg/CalendarIcon';
import ChatIcon from '../svg/ChatIcon';
import RightLongArrowIcon from '../svg/RightLongArrowIcon';
import GoodIcon from '../svg/GoodIcon';
import SmallGoodIcon from '../svg/SmallGoodIcon';
import EyeIcon from '../svg/EyeIcon';
import LockIcon from '../svg/LockIcon';
import PickIcon from '../svg/PickIcon';
import MemberIcon from '../svg/MemberIcon';
import ProjectIcon from '../svg/ProjectIcon';
import ChallengesIcon from '../svg/ChallengesIcon';
import PostingIcon from '../svg/PostingIcon';
import StudyRoomTopIcon from '../svg/StudyRoomTopIcon';
import axios from 'axios';
import { Link} from 'react-router-dom';
import StudyRoomPick from '../component/StudyRoom-Pick';
import StudyRoomPosting from '../component/StudyRoom-Posting';

const StudyRoomWrap = styled.div`
    width : calc(100% - 300px);
    min-height : 100%;
    background-color : ${(props)=>(props.mod === "light" ? "#F5F6F8" : "#1E1E1E")};
    transition : 0.3s;
`;

const StudyRoomHeader = styled.div`
    display : flex;
    justify-content : center;
    align-items:center;
    padding-top:100px;
    width : 100%;
    height : 700px;
    overflow : hidden;
    position : relative;
`;

const StudyRoomHeaderWrapImg = styled.div`
    position : absolute;
    width : 100%;
    height : 100%;
    background: url(${(props)=>(props.img)});

    background-repeat : no-repeat;
    background-size : cover;
    filter : blur(0.5em);
    top : 0;
    right : 0;

    ::before{
        content : "";
        width : 100%;
        height : 100%;
        position : absolute;
        top : 0;
        left : 0;
        background-color : #fff;
        opacity : 0.5;
    }
}
`;

const StudyRoomHeaderWrap = styled.div`
    position : relative;
    width : 80%;
    height : 500px;
    display : flex;
    justify-content : center;
    align-items : flex-start;
`;

const StudyRoomHeaderImg = styled.div`
    width : 380px;
    height : 300px;
    border-radius : 20px;
    overflow : hidden;
    position : relative;

    > img{
        min-width : 100%;
        height : 100%;
    }
`;

const StudyRoomHeaderBox = styled.div`
    width : 55%;
    height : 100%;
    margin-left: 3em;
    padding : 3em;
`;

const StudyRoomTitle = styled.h3`
    font-size : 2.5em;
    font-weight : bold;
    margin-bottom : 1em;
`;

const StudyRoomIntro = styled.pre`
    height : 150px;
    font-size : 1.2em;
    color : #444;
    margin-bottom : 2em;
    overflow : auto;
    
    ::-webkit-scrollbar{
        width : 8px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #333;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color : rgba(0,0,0,0.3);
    }
`;

const StudyRoomHeaderLeft = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : column;
    width : 380px;
`;

const StudyRoomAddBtn = styled.button`
    width : 380px;
    margin : 1.5em 0;
    background-color : #fff;
    border : none;
    padding: 1em;
    border-radius : 10px;
    font-weight : bold;
    font-size : 1.2em;
    cursor : pointer;
    transition : 0.3s;
    box-shadow : 0 0 10px #fff;
    :hover {
        background-color : ${(props)=>(props.backgroundColor)};
        color : #fff;
    }
`;

const StudyRoomBody = styled.div`
    width : 100%;
    padding : 2em;
`;

const StudyRoomHeaderItem = styled.div`
    display : flex;
    justify-content: flex-start;
    align-items:center;
    margin : 1.5em 0;
    cursor : pointer;
    transition : 0.3s;
    :hover { opacity : 0.5; }
`;

const StudyRoomHeaderItemTitle = styled.p`
    font-weight :bold;
    font-size : 1.1em;
    color : #333;
    margin : 0 1em;
`;

const StudyRoomHeaderInfoItem = styled.div`
    margin-top : 3em;
    display : flex;
    justify-content : flex-start;
    align-items : center;
`;

const StudyRoomHeaderInfoItemTitle = styled.p`
    font-size : 0.9em;
    font-weight : bold;
    color : #333;
    margin : 0 2em 0 1em;
`;

const StudyRoomHeaderImgGoodBtn = styled.button`
    border : none;
    background-color : rgba(0,0,0,0);
    position : absolute;
    top : 20px;
    right : 20px;
    cursor : pointer;
    > svg > path{
        fill : ${(props)=>(props.color)};
    }
`;

const StudyRoomLockWrap = styled.div`
    width : 100%;
    padding : 2em;
    display : flex;
    align-items : center;
    flex-direction : column;
`;

const StudyRoomLockBox = styled.div`
    width : 100px;
    height : 100px;
    border-radius : 100%;
    border : 1px solid #ddd;
    display : flex;
    justify-content : center;
    align-items :center;
    > svg > path {
        fill : ${(props)=>(props.mod === "light" ? "#333" : "#ddd")};
    }
`;

const StudyRoomLockTitle = styled.p`
    font-size : 1.3em;
    font-weight :bold;
    text-align:center;
    margin : 1em 0;
    color : ${(props)=>(props.mod === "light" ? "#333" : "#fff")};
`;

const StudyRoomLockBtn = styled.button`
    border : 1px solid #ddd;
    border-radius : 10px;
    cursor : pointer;
    padding : 1em;
    background-color : rgba(0,0,0,0);
    display : flex;
    justify-content : space-between;
    align-items: center;
    color : ${(props)=>(props.mod === "light" ? "#333" : "#fff")};
    > svg {
        margin-left : 1em;
        > path {
            fill : ${(props)=>(props.mod === "light" ? "#333" : "#fff")};
        }
    }
`;

const StudyRoomViewWrap = styled.div`
    width : 100%;
    padding : 1em;
`;

const StudyRoomViewNav = styled.div`
    width : 100%;
    height : 50px;
    display : flex;
    justify-content : space-between;
    align-items : center;
`;

const StudyRoomViewNavItem = styled.div`
    width : calc(95% / 5);
    height : 100%;
    text-align : center;
    display : flex;
    justify-content : center;
    align-items : center;
    cursor : pointer;
    transition : 0.3s;
    
    > svg > g > path {
        transition : 0.3s;
        stroke : ${(props)=>(props.select === "true" ? "#E8A2A8" : "#cbcbcb" )}; 
    }

    :first-child > svg {
        > g > path{
            fill : ${(props)=>(props.select === "true" ? "#E8A2A8" : "#cbcbcb" )};
            stroke : none;
        }
    }
`;

const StudyRoomViewNavName = styled.p`
    font-size : 1.3em;
    font-weight : bold;
    transition : 0.3s;
    margin-left : 0.8em;
    color : ${(props) => (props.select === "true" ? "#E8A2A8" : "#cbcbcb")};
`;

const StudyRoomViewContent = styled.div`
    width : 100%;
    padding : 3em;
`;

const StudyRoomTopButton = styled.div`
    width : 70px;
    height : 70px;
    border-radius : 100%;
    box-shadow : 0 0 20px rgba(0,0,0,0.2);
    background-color : #fff;
    overflow : hidden;
    display : flex;
    justify-content : center;
    align-items : center;
    position : fixed;
    bottom : 2em;
    right : 2em;
    z-index : 10;
    cursor : pointer;
    transition : 0.3s;
    :hover {opacity : 0.5;}
`;

const StudyRoom = (props) =>{
    const roomInfo = props.info;
    const [good,setGood] = useState(null);
    const mod = props.mod;
    const roomUserInfo = props.userInfo;
    const [roomGood,setRoomGood] = useState(props.goodInfo);
    const quail = roomUserInfo !== null ? (roomUserInfo.length > 0 ? roomUserInfo.find(a => a.idx === JSON.parse(localStorage.getItem("user")).idx ) : false ): false; 
    const [roomViewNav,setRoomViewNav] = useState("pick");

    const ScrollToTop = ()=>{
        window.scrollTo(0, 0);
    }

    useEffect(()=>{;
        setRoomGood(props.goodInfo);
        if(props.info !== null) setGood(props.info.good);
    },[props.goodInfo,props.info]);

    const AddGood = async ()=>{
        if(roomGood === undefined || roomGood === null){
            await axios.post('/api/setStudyUserGoodAdd',{
                study_idx : roomInfo.idx,
                user_idx : JSON.parse(localStorage.getItem('user')).idx,
                idx : roomInfo.idx
            })
            .then((res)=>{
                setRoomGood(true);
                setGood(good+1);
            });
        }else{
            await axios.post('/api/setStudyUserGoodDes',{
                study_idx : roomInfo.idx,
                user_idx : JSON.parse(localStorage.getItem('user')).idx,
                idx : roomInfo.idx
            })
            .then((res)=>{
                setRoomGood(undefined);
                setGood(good-1);
            })
        }
    }

    const ChangeRoomView = (val) =>{setRoomViewNav(val);}

    return(
        <>
        <StudyRoomWrap mod={mod}>
        {
            roomInfo ? (
                <>
                <StudyRoomHeader mod={mod} >
                    <StudyRoomHeaderWrapImg img={roomInfo.banner_img ? "../upload/"+roomInfo.banner_img : ""} mod={mod} />
                    {/* <StudyRoomHeaderWrapImg img={roomInfo.banner_img ? "./upload/"+roomInfo.banner_img : ""} mod={mod} /> */}
                    <StudyRoomHeaderWrap>
                        <StudyRoomHeaderLeft>
                            <StudyRoomHeaderImg>
                                <StudyRoomHeaderImgGoodBtn color = {roomGood === undefined ? "#333" : "#DB3F3F"} onClick={AddGood}>
                                    <GoodIcon/>
                                </StudyRoomHeaderImgGoodBtn>
                                <img src={roomInfo.banner_img ? "../upload/"+roomInfo.banner_img : "" } alt="study" />
                            </StudyRoomHeaderImg>
                            {
                            !(quail) ? 
                            <Link to={"/5/studyJoin/"+roomInfo.idx}><StudyRoomAddBtn backgroundColor = {mod === "light" ? roomInfo.light_theme : roomInfo.dark_theme}>가입하기</StudyRoomAddBtn></Link>:
                            ""
                            }
                        </StudyRoomHeaderLeft>

                        <StudyRoomHeaderBox>
                            <StudyRoomTitle>{roomInfo.title}</StudyRoomTitle>
                            <StudyRoomIntro>{roomInfo.intro}</StudyRoomIntro>
                            <StudyRoomHeaderItem>
                                <CalendarIcon/>
                                <StudyRoomHeaderItemTitle>일정보기</StudyRoomHeaderItemTitle>
                                <RightLongArrowIcon/>
                            </StudyRoomHeaderItem>
                            <StudyRoomHeaderItem>
                                <ChatIcon/>
                                <StudyRoomHeaderItemTitle>채팅 참여하기</StudyRoomHeaderItemTitle>
                                <RightLongArrowIcon/>
                            </StudyRoomHeaderItem>
                            <StudyRoomHeaderInfoItem>
                                <SmallGoodIcon/>
                                <StudyRoomHeaderInfoItemTitle>좋아요 {good}</StudyRoomHeaderInfoItemTitle>
                                <EyeIcon/>
                                <StudyRoomHeaderInfoItemTitle>조회수 {roomInfo.hit}</StudyRoomHeaderInfoItemTitle>
                            </StudyRoomHeaderInfoItem>
                        </StudyRoomHeaderBox>
                    </StudyRoomHeaderWrap>
                </StudyRoomHeader>
                
                <StudyRoomBody>
                    {
                        quail ? 
                        (
                        <StudyRoomViewWrap>
                            <StudyRoomViewNav>
                                <StudyRoomViewNavItem mod={mod} select={roomViewNav === "pick" ? "true" : "false"} onClick={()=>{ChangeRoomView("pick")}}>
                                    <PickIcon/>
                                    <StudyRoomViewNavName mod={mod} select={roomViewNav === "pick" ? "true" : "false"}>공지사항</StudyRoomViewNavName>
                                </StudyRoomViewNavItem>
                                <StudyRoomViewNavItem mod={mod} select={roomViewNav === "member" ? "true" : "false"} onClick={()=>{ChangeRoomView("member")}}>
                                    <MemberIcon />
                                    <StudyRoomViewNavName mod={mod} select={roomViewNav === "member" ? "true" : "false"}>멤버</StudyRoomViewNavName>
                                </StudyRoomViewNavItem>
                                <StudyRoomViewNavItem mod={mod} select={roomViewNav === "project" ? "true" : "false"} onClick={()=>{ChangeRoomView("project")}}>
                                    <ProjectIcon />
                                    <StudyRoomViewNavName mod={mod} select={roomViewNav === "project" ? "true" : "false"}>프로젝트</StudyRoomViewNavName>
                                </StudyRoomViewNavItem>
                                <StudyRoomViewNavItem mod={mod} select={roomViewNav === "challenges" ? "true" : "false"} onClick={()=>{ChangeRoomView("challenges")}}>
                                    <ChallengesIcon />
                                    <StudyRoomViewNavName mod={mod} select={roomViewNav === "challenges" ? "true" : "false"}>도전과제</StudyRoomViewNavName>
                                </StudyRoomViewNavItem>
                                <StudyRoomViewNavItem mod={mod} select={roomViewNav === "posting" ? "true" : "false"} onClick={()=>{ChangeRoomView("posting")}}>
                                    <PostingIcon />
                                    <StudyRoomViewNavName mod={mod} select={roomViewNav === "posting" ? "true" : "false"}>포스팅</StudyRoomViewNavName>
                                </StudyRoomViewNavItem>
                            </StudyRoomViewNav>
                            <StudyRoomViewContent>
                                {
                                    roomViewNav === "pick" ? <StudyRoomPick mod={mod} roomInfo={roomInfo} /> : 
                                    roomViewNav === "posting" ? <StudyRoomPosting mod={mod} roomInfo={roomInfo} /> :
                                    ""
                                }
                            </StudyRoomViewContent>
                        </StudyRoomViewWrap>
                        ) :
                        (
                            <StudyRoomLockWrap>
                                <StudyRoomLockBox mod={mod}>
                                    <LockIcon />
                                </StudyRoomLockBox>
                                <StudyRoomLockTitle mod={mod}>{roomInfo.title} 스터디원만<br/>볼 수 있습니다.</StudyRoomLockTitle>
                                <StudyRoomLockBtn mod={mod}>소개글 보러가기 <RightLongArrowIcon/></StudyRoomLockBtn>
                            </StudyRoomLockWrap>
                        ) 
                    }
                </StudyRoomBody>
                <StudyRoomTopButton onClick={ScrollToTop}>
                    <StudyRoomTopIcon/>
                </StudyRoomTopButton>
                </>
            ) : ""
        }
        </StudyRoomWrap>
        </>
    )
}

export default StudyRoom;