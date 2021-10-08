import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import RightLongArrowIcon from '../svg/RightLongArrowIcon';

const StudyRoomListWrap = styled.div`
    padding : 130px 4em 3em 4em;
    width : calc(100% - 300px);
    min-height : 100%;
    background-color : ${(props)=>(props.mod === "light" ? "#fff" : "#1E1E1E")};
    transition : 0.3s;
`;

const StudyRoomListTitle = styled.p`
    font-size : 1.7em;
    font-weight : bold;
    transition : 0.3s;
    color : ${(props)=>(props.mod === "light" ? "#333" : "#fff")};
`;

const StudyRoomListBox = styled.div`
    margin-top : 2em;
    width : 100%;
    display : flex;
    justify-content : flex-start;
    align-items: flex-start;
    flex-wrap : wrap;
`;

const StudyRoomListItem = styled.div`
    position :relative;
    margin : 1em 2em;
    margin-left : 0;
    width : 300px;
    height : 280px;
    border-radius : 10px;
    overflow : hidden;
    box-shadow : 0 0 10px rgba(155,155,155,0.5);
`;

const StudyRoomListItemInfo = styled.div`
    width : 100%;
    height : calc(100% - 120px);
`;

const StudyRoomListEnterButton = styled.button`
    position : absolute;
    bottom : 20px;
    right : 20px;
    border : none;
    width : 40px;
    height : 40px;
    border-radius : 10px;
    background-color : ${(props)=>(props.color)};
    color : #fff;
    cursor : pointer;
    transition : 0.3s;
    font-weight :bold;
    font-size : 1em;
    :hover{
        opacity : 0.5;
    }

    >svg > path{fill : #fff;}
`;

const StudyRoombackground = styled.div`
    width : 100%;
    height : 100%;
    position : absolute;
    top : 0;
    left : 0;
    > img {
        min-width : 100%;
        height : 100%;
    }
    ::after{
        content : '';
        position : absolute;
        top : 0;
        left : 0;
        width : 100%;
        height : 100%;
        opacity : 0.5;
        background-color : #fff;
    }
`;

const StudyRoomListInfo = styled.div`
    position : relative;
    z-index: 2;
    width : 100%;
    height : 120px;
`;

const StudyRoomListHeader = styled.div`
    width : 100%;
    height : 100%;
    padding : 20px 2em;
`;

const StudyRoomListHeaderTitle = styled.p`
    font-size : 1.2em;
    font-weight :bold;
    margin-bottom : 0.5em;
    width : 100%;
    white-space : nowrap;
    text-overflow:ellipsis;
    overflow : hidden;
`;

const StudyRoomListHeaderCate = styled.p`
    font-size : 0.9em;
    font-weight : bold;
    color : #555;
`;

const StudyRoomList = (props)=>{
    const mod = props.mod;
    const dataList = props.dataList;

    useEffect(()=>{
    },[dataList]);

    return(
        <StudyRoomListWrap mod={mod}>
            <StudyRoomListTitle mod={mod}>참여하고 있는 스터디방</StudyRoomListTitle>
            {
                dataList !== null && dataList.length > 0 ? 
                <StudyRoomListBox>
                {
                    dataList.map(x=>(
                        <StudyRoomListItem key={x.idx}>
                            <StudyRoomListItemInfo>
                                <StudyRoombackground>
                                    <img src={"upload/"+x.banner_img} alt="study room banner" />
                                </StudyRoombackground>
                            </StudyRoomListItemInfo>
                            <StudyRoomListInfo>
                                <StudyRoomListHeader>
                                    <StudyRoomListHeaderTitle>{x.title}</StudyRoomListHeaderTitle>
                                    <StudyRoomListHeaderCate>#{x.category}</StudyRoomListHeaderCate>
                                </StudyRoomListHeader>
                                <Link to={"/5/studyRoom/"+x.idx}><StudyRoomListEnterButton color={mod === "light" ? x.light_theme : x.dark_theme}><RightLongArrowIcon/></StudyRoomListEnterButton></Link>
                            </StudyRoomListInfo>
                        </StudyRoomListItem>
                    ))
                }
                </StudyRoomListBox>: 
                ""
            }
        </StudyRoomListWrap>
    );
}

export default StudyRoomList;