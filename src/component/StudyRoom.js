import React from 'react';
import styled from 'styled-components';

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
    background: linear-gradient(
        rgba(245, 246, 248, 0) 10%,
        rgba(245, 246, 248, 0.2) 25%,
        rgba(245, 246, 248, 0.4) 50%,
        rgba(245, 246, 248, 0.6) 75%,
        rgba(245, 246, 248, 1) 100%
      ), url(${(props)=>(props.img)});
    background-size: cover;
    backdrop-filter : blur(1em);

    ::before{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 2;
        width : 100%;
        height : 700px;
        content: ""; 
        background: linear-gradient(
            to bottom,
            rgba(30, 30, 30, 0) 10%,
            rgba(30, 30, 30, 0.2) 40%,
            rgba(30, 30, 30, 0.2) 60%,
            rgba(30, 30, 30, 0.5) 80%,
            rgba(30, 30, 30, 1) 100%
            ); 
        transition: opacity 0.3s;
        opacity: ${(props)=>(props.mod === "light" ? 0 : 1)};
    }
`;

const StudyRoomHeaderWrap = styled.div`
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
    font-size : 1.2em;
    color : #555;
`;


const StudyRoom = (props) =>{
    const roomInfo = props.info;
    const mod = props.mod;
    console.log(roomInfo);

    return(
        <>
        <StudyRoomWrap mod={mod}>
        {
            roomInfo ? (
                <StudyRoomHeader mod={mod} img={roomInfo.banner_img ? "../upload/"+roomInfo.banner_img : ""}>
                    <StudyRoomHeaderWrap>
                        <StudyRoomHeaderImg>
                            <img src={roomInfo.banner_img ? "../upload/"+roomInfo.banner_img : "" } alt="study" />
                        </StudyRoomHeaderImg>

                        <StudyRoomHeaderBox>
                            <StudyRoomTitle>{roomInfo.title}</StudyRoomTitle>
                            <StudyRoomIntro>{roomInfo.intro}</StudyRoomIntro>
                        </StudyRoomHeaderBox>
                    </StudyRoomHeaderWrap>
                </StudyRoomHeader>
            ) : ""
        }
        </StudyRoomWrap>
        </>
    )
}

export default StudyRoom;