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
    font-size : 1.2em;
    color : #444;
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
                <StudyRoomHeader mod={mod} >
                    <StudyRoomHeaderWrapImg img={roomInfo.banner_img ? "../upload/"+roomInfo.banner_img : ""} mod={mod} />
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