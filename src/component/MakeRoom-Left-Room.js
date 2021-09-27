import React, {useRef, useState} from 'react';
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
    overflow : hidden;
    display : flex;
    align-items : center;
    justify-content : center;
    overflow:hidden;
    > img{
        min-width : 100%;
        min-height : 100%;
    }
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
    position : relative;
    :hover {
        opacity : 0.5;
    }
`;

const LeftBoxContentChangeImg = styled.input`
    position :absolute;
    width : 100%;
    height :100%;
    opacity : 0;
    top  : 0;
    left : 0;
    cursor : pointer;
`;

const Room = (props)=>{
    const makeRoomSetting = props.makeRoomSetting;
    const getMakeRoomSetting = (value,type)=>{props.getMakeRoomSetting(value,type);}
    const mod = props.mod;
    const roomProfile = useRef(null);
    const roomBanner = useRef(null);
    const [roomProfileImg,setRoomProfileImg] = useState(makeRoomSetting.room_profile_img);
    const [roomBannerImg,setRoomBannerImg] = useState(makeRoomSetting.room_banner_img);
    const RoomProfileChange = ()=>{
        const file = roomProfile.current.files[0];
        const fileExpReg = /^.+\.(png||jpg||jpeg||PNG||JPG||JPEG)$/g;
        const fileExp = fileExpReg.test(file.name);
        if(!fileExp) return alert("jpg, jpeg, png 형식의 파일만 업로드 가능합니다.");

        let reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = ()=>{
            getMakeRoomSetting(reader.result,"room_profile_img");
            setRoomProfileImg(reader.result);
            getMakeRoomSetting(roomProfile.current,"room_profile_img_input");
        }
    }

    const RoomBannerChange=()=>{
        const file = roomBanner.current.files[0];
        const fileExpReg = /^.+\.(png||jpg||jpeg||PNG||JPG||JPEG)$/g;
        const fileExp = fileExpReg.test(file.name);
        if(!fileExp) return alert("jpg, jpeg, png 형식의 파일만 업로드 가능합니다.");

        let reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = ()=>{
            getMakeRoomSetting(reader.result,"room_banner_img");
            setRoomBannerImg(reader.result);
            getMakeRoomSetting(roomBanner.current,"room_banner_img_input");
        }
    }

    return(
    <LeftBoxContentWrap>
        <LeftBoxContent>
            <LeftBoxContentImgWrap type="circle">
                {roomProfileImg === "" ? "" : <img src={roomProfileImg} alt="room profile"/>}
            </LeftBoxContentImgWrap>
            <LeftBoxContentTitle mod={mod}>프로필</LeftBoxContentTitle>
            <LeftBoxContentChangeBtn>이미지 변경<LeftBoxContentChangeImg ref={roomProfile} type="file" name="room_profile" onChange={RoomProfileChange} /></LeftBoxContentChangeBtn>
        </LeftBoxContent>
        <LeftBoxContent>
            <LeftBoxContentImgWrap type="square">
                {roomBannerImg === "" ? "" : <img src={roomBannerImg} alt="room profile"/>}
            </LeftBoxContentImgWrap>
            <LeftBoxContentTitle mod={mod}>배너</LeftBoxContentTitle>
            <LeftBoxContentChangeBtn>이미지 변경<LeftBoxContentChangeImg ref={roomBanner} type="file" name="room_banner" onChange={RoomBannerChange} /></LeftBoxContentChangeBtn>
        </LeftBoxContent>
    </LeftBoxContentWrap>
    );
}

export default Room;