import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MakeRoomBackIcon from '../svg/MakeRoomBackIcon';

const MakeRoomWrap = styled.div`
    width : calc(100% - 300px);
    background-color : ${(props)=>(props.mod === "light" ? "#F5F6F8" : "#1E1E1E")};
    padding : 2em;
    padding-top : 100px;
    display : flex;
    justify-content : center;
    align-items : flex-start;
    transition : 0.3s;
`;

const MakeRoomLeft = styled.div`
    width : 30%;
    height : 95%;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content :space-between;
    margin : 1em
`;

const LeftBox = styled.div`
    position : relative;
    width : 100%;
    height : 87%;
    background-color : ${(props)=>(props.mod === "light" ? "#fff" : "#333")};
    border-radius : 10px;
    padding : 2em;
    transition : 0.3s;
`;

const RightBox = styled.div`
    position : relative;
    width : 60%;
    height : 95%;
    background-color : ${(props)=>(props.mod === "light" ? "#fff" : "#333")};
    border-radius : 10px;
    padding : 2em;
    transition : 0.3s;
    margin : 1em;
`;

const MakeRoomBtn = styled.button`
    width : 100%;
    height : 70px;
    border-radius : 15px;
    background-color : ${(props)=>(props.status === "false" ? "#aaa" : "#E8A2A8")};
    pointer-events : ${(props)=>(props.status === "false" ? "none" : "all")};
    opacity : ${(props)=>(props.status === "false" ? "0.5" : "1")};
    color : #fff;
    border : none;
    text-align : center;
    line-height : 70px;
    font-weight :bold;
    font-size : 1.2em;
    cursor : pointer;
    transition : 0.3s;
    :hover {
        opacity : 0.5;
    }
`;

const MakeRoomBackBtn = styled.button`
    border : none;
    background-color : rgba(0,0,0,0);
    position : absolute;
    top : 3em;
    left :3em;
    cursor : pointer;
    transition : 0.3s;
    svg path{transition : 0.3s;}
    :hover {
        opacity : 0.5;
    }
`;

const MakeRoomTitle = styled.h3`
    font-size : 1.7em;
    margin : 1em;
    transition : 0.3s;
    color : ${(props)=>(props.mod === "light" ? "#333" : "#fff")};
`;

const MakeRoom = (props)=>{
    const mod = props.mod;
    const [makeRoomStatus] = useState("false");

    return(
        <MakeRoomWrap mod={mod}>
            <MakeRoomLeft>
                <LeftBox mod={mod}>
                    <Link to="/5/main">
                        <MakeRoomBackBtn>
                            <MakeRoomBackIcon mod={mod} />
                        </MakeRoomBackBtn>
                    </Link>
                </LeftBox>
                <MakeRoomBtn status={makeRoomStatus}>스터디방 만들기</MakeRoomBtn>
            </MakeRoomLeft>
            <RightBox mod={mod}>
                <MakeRoomTitle mod={mod}>스터디방 만들기</MakeRoomTitle>
            </RightBox>
        </MakeRoomWrap>
    );
}

export default MakeRoom;