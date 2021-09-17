import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MakeRoomBackIcon from '../svg/MakeRoomBackIcon';
import LeftRoom from './MakeRoom-Left-Room';
import RightRoom from './MakeRoom-Right-Room';
import LeftJoin from './MakeRoom-Left-Join';
import RightJoin from './MakeRoom-Right-Join';
import RightDesign from './MakeRoom-Right-Design';

const MakeRoomWrap = styled.div`
    width : calc(100% - 300px);
    background-color : ${(props)=>(props.mod === "light" ? "#F5F6F8" : "#1E1E1E")};
    padding : 0 2em;
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
    margin : 1em;
`;

const LeftBox = styled.div`
    position : relative;
    width : 100%;
    height : 87%;
    background-color : ${(props)=>(props.mod === "light" ? "#fff" : "#333")};
    border-radius : 10px;
    padding : 2em;
    transition : 0.3s;
    display : flex;
    justify-content : center;
    align-items : center;
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

const MakeRoomRightNav= styled.div`
    width : 100%;
    height : 70px;
    border-bottom : 1px solid #ddd;
    display : flex;
    justify-content : center;
    margin-top : -2px;
`;

const MakeRoomRightNavItem = styled.div`
    width : calc(100% / 3);
    height : 100%;
    text-align : center;
    line-height : 70px;
    color : ${(props)=>(props.nav === "select" ? "#E8A2A8" : "#aaa")};
    font-weight : bold;
    font-size : 1.2em;
    cursor : pointer;
    border-bottom : 3px solid ${(props)=>(props.nav === "select" ? "#E8A2A8" : "rgba(0,0,0,0)")};
    margin-top : 2px;
`;

const MakeRoom = (props)=>{
    const mod = props.mod;
    const [makeRoomNav,setMakeRoomNav] = useState("Room");
    const [makeRoomStatus,setMakeRoomStatus] = useState("false");

    const getMakeRoomNav = (e)=>{setMakeRoomNav(e.target.dataset.value);}
    const [makeRoomSetting,setMakeRoomSetting] = useState({
        room_profile_img : "",
        room_banner_img : "",
        room_name : "",
        room_cate : "",
        room_intro : "",
        room_join_intro : "",
        room_condition : {
            room_birth : ["",""],
            room_gender : "",
        },
        room_light_theme : "",
        room_dark_theme : "",
        room_arrangement : "",
        room_sort : "",
        room_order : ""
    });

    const getMakeRoomSetting = (value,type)=>{
        makeRoomSetting[type] = value;
        setMakeRoomSetting(makeRoomSetting);
        
        const room_profile_img = makeRoomSetting.room_profile_img;
        const room_banner_img = makeRoomSetting.room_banner_img;
        const room_name = makeRoomSetting.room_name;
        const room_cate = makeRoomSetting.room_cate;
        const room_intro = makeRoomSetting.room_intro;
        const room_join_intro = makeRoomSetting.room_join_intro;
        const room_birth = makeRoomSetting.room_condition.room_birth[0] === "" && makeRoomSetting.room_condition.room_birth[1] === "" ? "" : "true";
        const room_gender = makeRoomSetting.room_condition.room_gender;
        const room_light_theme = makeRoomSetting.room_light_theme;
        const room_dark_theme = makeRoomSetting.room_dark_theme;
        const room_arrangement = makeRoomSetting.room_arrangement;
        const room_sort = makeRoomSetting.room_sort;
        const room_order = makeRoomSetting.room_order;

        if(room_banner_img === "" || room_profile_img === "" || room_name === "" || room_cate === "" || room_intro === "" || room_join_intro === "" || room_birth === "" || room_gender === "" || room_light_theme === "" || room_dark_theme === "" || room_arrangement === "" || room_sort === "" || room_order === "")  setMakeRoomStatus("false");
        else setMakeRoomStatus("true");
    }

    useEffect(()=>{},[makeRoomSetting,makeRoomNav]);

    return(
        <MakeRoomWrap mod={mod}>
            <MakeRoomLeft>
                <LeftBox mod={mod}>
                    <Link to="/5/main"><MakeRoomBackBtn><MakeRoomBackIcon mod={mod} /></MakeRoomBackBtn></Link>
                    { makeRoomNav === "Room" ? <LeftRoom mod={mod} makeRoomSetting={makeRoomSetting} getMakeRoomSetting={getMakeRoomSetting} /> : makeRoomNav === "Join" ? <LeftJoin mod={mod} makeRoomSetting={makeRoomSetting} /> : "" }
                </LeftBox>
                <MakeRoomBtn status={makeRoomStatus}>스터디방 만들기</MakeRoomBtn>
            </MakeRoomLeft>

            <RightBox mod={mod}>
                <MakeRoomTitle mod={mod}>스터디방 만들기</MakeRoomTitle>
                <MakeRoomRightNav mod={mod}>
                    <MakeRoomRightNavItem nav={makeRoomNav === "Room" ? "select" : "false"} onClick={getMakeRoomNav} data-value="Room" mod={mod}>방 설정</MakeRoomRightNavItem>
                    <MakeRoomRightNavItem nav={makeRoomNav === "Join" ? "select" : "false"} onClick={getMakeRoomNav} data-value="Join" mod={mod}>가입 설정</MakeRoomRightNavItem>
                    <MakeRoomRightNavItem nav={makeRoomNav === "Design" ? "select" : "false"} onClick={getMakeRoomNav} data-value="Design" mod={mod}>꾸미기 설정</MakeRoomRightNavItem>
                </MakeRoomRightNav>

                { makeRoomNav === "Room" ? <RightRoom mod={mod} getMakeRoomSetting={getMakeRoomSetting} makeRoomSetting={makeRoomSetting} /> :  makeRoomNav === "Join" ? <RightJoin mod={mod} getMakeRoomSetting={getMakeRoomSetting} makeRoomSetting={makeRoomSetting}  /> : <RightDesign mod={mod} getMakeRoomSetting={getMakeRoomSetting} makeRoomSetting={makeRoomSetting}  />  }

            </RightBox>
        </MakeRoomWrap>
    );
}

export default MakeRoom;