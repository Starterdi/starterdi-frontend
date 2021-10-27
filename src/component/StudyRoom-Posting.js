import React, { useState } from 'react';
import styled from 'styled-components';
import HomeToggle from '../svg/HomeToggle';
import StudyRoomPostingAlbumIcon from '../svg/StudyRoomPostingAlbumIcon';
import StudyRoomPostingListIcon from '../svg/StudyRoomPostingListIcon';
import StudyRoomPostingFilterIcon from '../svg/StudyRoomPostingFilterIcon';

const PostingHeader = styled.div`
    width : 100%;
    height : 80px;
    margin-bottom : 2em;
    display : flex;
    justify-content : flex-end;
    align-items : center;
`;

const FindWriteMeWrap = styled.div`
    display : flex;
    justify-content : flex-start;
    align-items : center;
`;

const FindWriteMeTitle = styled.p`
    font-size : 1em;
    margin-right : 1em;
    color : ${(props)=>(props.mod === "light" ? "#333" : "#fff")};
    transition : 0.3s;
`;

const FindWriteMeToggle = styled.div`
    position : relative;
    width : 50px;
    height : 21px;
    border-radius : 20px;
    background-color : ${(props)=>(props.switch === "true" ? "#E8A2A8" : "#ddd")};
    cursor : pointer;
    transition : 0.3s;
    > svg{
        position : absolute;
        top : 2px;
        left : ${(props) => (props.switch === "true" ? "2px" : "31px")};
        transition : 0.3s;
    }
`;

const PostingDesignWrap = styled.div`
    width : 80px;
    height : 40px;
    display : flex;
    justify-content : center;
    align-items: center;
    border-radius : 10px;
    overflow:hidden;
    margin : 0 1.5em;
    box-shadow : 0 0 10px #ddd;
`;

const PostingDesignItem = styled.button`
    width : 40px;
    height : 40px;
    background-color : ${(props)=>(props.select === "true" ? "#fff" : "#ddd")};
    display : flex;
    justify-content : center;
    align-items : center;
    border : none;
    transition : 0.3s;
    cursor:pointer;
    :hover { opacity : 0.5; }
`;

const PostingFilterButton = styled.button`
    width : 40px;
    height : 40px;
    background-color : #fff;
    border : none;
    cursor:pointer;
    box-shadow : 0 0 10px #ddd;
    border-radius : 10px;
    display : flex;
    justify-content : center;
    align-items : center;
    transition : 0.3s;
    :hover { opacity : 0.5; }
`;

const StudyRoomPosting = (props)=>{
    const mod = props.mod;
    const roomInfo = props.roomInfo;
    const [postDesign,setPostDesign] = useState("album");
    const [findWriteMe,setFindWriteMe] = useState("true");
    const getFindWriteMe = () =>{setFindWriteMe(findWriteMe === "true" ? "false" : "true");}
    const getPostDesign = () =>{setPostDesign(postDesign === "album" ? "list" : "album");}

    return(
        <PostingHeader>
            <FindWriteMeWrap>
                <FindWriteMeTitle mod={mod}>내가 쓴 글 찾기</FindWriteMeTitle>
                <FindWriteMeToggle onClick={getFindWriteMe} switch={findWriteMe}>
                    <HomeToggle/>
                </FindWriteMeToggle>
            </FindWriteMeWrap>
            <PostingDesignWrap>
                <PostingDesignItem onClick={getPostDesign} mod={mod} select={postDesign === "album" ? "true" : "false"}><StudyRoomPostingAlbumIcon/></PostingDesignItem>
                <PostingDesignItem onClick={getPostDesign} mod={mod} select={postDesign === "list" ? "true" : "false"}><StudyRoomPostingListIcon/></PostingDesignItem>
            </PostingDesignWrap>
            <PostingFilterButton mod={mod}><StudyRoomPostingFilterIcon mod={mod} /></PostingFilterButton>
        </PostingHeader>
    );
}

export default StudyRoomPosting;