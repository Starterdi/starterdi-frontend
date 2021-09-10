import React from 'react';
import styled from 'styled-components';

// makeroom : room
const LeftBoxContentWrap = styled.div`
    width : 90%; 
    height: 90%; 
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    align-items : center;
`;
const LeftBoxContent = styled.div`
    width : 100%;
    height : 40%;
    margin : 2em 0;
    display :flex;
    justify-content : center;
    align-items : center;
    flex-direction : column;
`;

const LeftBoxContentImgWrap = styled.div`
    background-color : #F5F6F8;
    width : ${(props)=>(props.type === "circle" ? "150px" : "100%")};
    height : 150px;
    border-radius : ${(props)=>(props.type === "circle" ? "100%" : "20px")};
`;

const LeftBoxContentTitle = styled.p`
    font-size : 1.1em;
    margin : 0.5em 0;
    font-weight :bold;
    color : ${(props)=>(props.mod === "light" ? "#333" : "#fff")};
    transition : 0.3s;
`;

const LeftBoxContentChangeBtn = styled.button`
    padding : 0.5em 1em;
    border-radius : 10px;
    background-color : #eee;
    cursor : pointer;
    border: none;
    transition : 0.3s;
    :hover {
        opacity : 0.5;
    }
`;

const Room = (props)=>{
    const makeRoomSetting = props.makeRoomSetting;
    const mod = props.mod;
    return(
    <LeftBoxContentWrap>
        <LeftBoxContent>
            <LeftBoxContentImgWrap type="circle">
                {makeRoomSetting.room_profile_img === "" ? "" : <img src={makeRoomSetting.room_profile_img} alt="room profile"/>}
            </LeftBoxContentImgWrap>
            <LeftBoxContentTitle mod={mod}>프로필</LeftBoxContentTitle>
            <LeftBoxContentChangeBtn>이미지 변경</LeftBoxContentChangeBtn>
        </LeftBoxContent>
        <LeftBoxContent>
            <LeftBoxContentImgWrap type="square"></LeftBoxContentImgWrap>
            <LeftBoxContentTitle mod={mod}>배너</LeftBoxContentTitle>
            <LeftBoxContentChangeBtn>이미지 변경</LeftBoxContentChangeBtn>
        </LeftBoxContent>
    </LeftBoxContentWrap>
    );
}

export default Room;