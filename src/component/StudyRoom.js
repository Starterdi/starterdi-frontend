import React from 'react';
import styled from 'styled-components';
import CalendarIcon from '../svg/CalendarIcon';
import ChatIcon from '../svg/ChatIcon';
import RightLongArrowIcon from '../svg/RightLongArrowIcon';
import GoodIcon from '../svg/GoodIcon';

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
    z-index : 10;
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

    > img{
        min-width : 100%;
        height : 100%;
    }
`;

const StudyRoomHeaderBox = styled.div`
    width : 50%;
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
`;

const StudyRoomHeaderLeft = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : column;
    width : 380px;
`;

const StudyRoomAddBtn = styled.button`
    width : 100%;
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
    margin : 0 1em;
`;

const StudyRoom = (props) =>{
    const roomInfo = props.info;
    const mod = props.mod;
    const roomUserInfo = props.userInfo;
    console.log(roomInfo,roomUserInfo);

    return(
        <>
        <StudyRoomWrap mod={mod}>
        {
            roomInfo ? (
                <>
                <StudyRoomHeader mod={mod} >
                    <StudyRoomHeaderWrapImg img={roomInfo.banner_img ? "../upload/"+roomInfo.banner_img : ""} mod={mod} />
                    <StudyRoomHeaderWrap>
                        <StudyRoomHeaderLeft>
                            <StudyRoomHeaderImg>
                                <img src={roomInfo.banner_img ? "../upload/"+roomInfo.banner_img : "" } alt="study" />
                            </StudyRoomHeaderImg>
                            {
                            roomInfo.host_id !== JSON.parse(localStorage.getItem('user')).idx ? 
                            <StudyRoomAddBtn backgroundColor = {mod === "light" ? roomInfo.light_theme : roomInfo.dark_theme}>가입하기</StudyRoomAddBtn> :
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
                                <GoodIcon/>
                                <StudyRoomHeaderInfoItemTitle>좋아요 {roomInfo.good}</StudyRoomHeaderInfoItemTitle>
                                <StudyRoomHeaderInfoItemTitle>조회수 {roomInfo.hit}</StudyRoomHeaderInfoItemTitle>
                            </StudyRoomHeaderInfoItem>
                        </StudyRoomHeaderBox>
                    </StudyRoomHeaderWrap>
                </StudyRoomHeader>
                
                <StudyRoomBody>
                    
                </StudyRoomBody>
                </>
            ) : ""
        }
        </StudyRoomWrap>
        </>
    )
}

export default StudyRoom;