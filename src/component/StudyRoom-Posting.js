import React, { useState } from 'react';
import styled from 'styled-components';
import HomeToggle from '../svg/HomeToggle';
import StudyRoomPostingAlbumIcon from '../svg/StudyRoomPostingAlbumIcon';
import StudyRoomPostingListIcon from '../svg/StudyRoomPostingListIcon';
import StudyRoomPostingFilterIcon from '../svg/StudyRoomPostingFilterIcon';
import SmallGoodIcon from '../svg/SmallGoodIcon';
import EyeIcon from '../svg/EyeIcon';
import StudyRoomNotContent from '../image/StudyRoomNotContent.png';

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

const PostingBody = styled.div`
    width : 100%;
    display : flex;
    justify-content : flex-start;
    align-items : flex-start;
    flex-wrap : wrap;
`;

const PostingItem = styled.div`
    width : ${(props)=>(props.postDesign === "album" ? "calc(80% / 4)" : "100%")};
    height : ${(props)=>(props.postDesign === "album" ? "390px" : "120px")};
    margin : 1em 2em;
    cursor : pointer;
    transition : 0.3s opacity;
    :hover {opacity : 0.5;}
`;

const PostingImgItem = styled.div`
    display : ${(props)=>(props.postDesign === "album" ? "block" : "none")};
    width : 100%;
    height : 270px;
    border-radius : 10px;
    overflow : hidden;
    background-color : #ddd;
    margin-bottom : 0.5em;
`;

const PostingTitle = styled.p`
    font-size : 1.1em;
    font-weight :bold;
    transition : 0.3s;
    color : ${(props)=>(props.mod === "light" ? "#333" : "#fff")};
`;

const PostingHeaderItem = styled.div`
    width : 100%;
    height : 85px;
    padding : 0 0.5em;
    border-bottom : 1px solid #ddd;
    display : ${(props)=>(props.postDesign === "album" ? "block" : "flex")};
    justify-content : space-between;
    align-items: flex-start;
    flex-direction : ${(props)=>(props.postDesign === "album" ? "row" : "column")};
`;

const PostingUserWrap = styled.div`
    width : 100%;
    display : flex;
    justify-content : space-between;
    align-items : center;
    margin : 0.5em 0;
`;

const PostingUserImgBox = styled.div`
    width : 40px;
    height : 40px;
    border-radius : 100%;
    overflow : hidden;
    background-color : #ddd;
`;

const PostingDate = styled.p`
    font-size : 0.8em;
    transition : 0.3s;
    color : ${(props)=>(props.mod === "light" ? "#555" : "#fff")};
`;

const PostingInfoWrap = styled.div`
    width : 100%;
    height : 50px;
    display : flex;
    justify-content : flex-start;
    align-items : center;
    padding : 0 0.5em;
`;

const PostingInfo = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
    margin-right : 1em;
    >svg path{
        transition : 0.3s;
        fill : ${(props)=>(props.mod === "light" ? "#000" : "#fff")};
    }
`;

const PostingContent = styled.p`
    font-size : 0.8em;
    color : ${(props)=>(props.mod === "light" ? "#555" : "#fff")};
    margin-left : 0.5em;
    transition : 0.3s;
`;

const PostingUserInfoWrap = styled.div`
    display : flex;
    justify-content : flex-start;
    align-items : center;
`;

const PostingUserName = styled.p`
    font-size : 1em;
    margin-left : 0.5em;
    color : ${(props)=>(props.mod === "light" ? "#333" : "#fff")};
    transition : 0.3s;
`;

const PostNotContent = styled.div`
    width : 100%;
    padding : 2em;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`;

const PostNotContentImg = styled.img`
    width : 50%;
    margin-bottom : 3em;
`;

const PostNotContentTitle = styled.p`
    text-align : center;
    font-size : 2em;
    font-weight : bold;
    color : ${(props)=>(props.mod === "light" ? "#333" : "#fff")};
    transition : 0.3s;
`;

const StudyRoomPosting = (props)=>{
    const mod = props.mod;
    // const roomInfo = props.roomInfo;
    const [postDesign,setPostDesign] = useState("album");
    const [findWriteMe,setFindWriteMe] = useState("true");
    const getFindWriteMe = () =>{setFindWriteMe(findWriteMe === "true" ? "false" : "true");}
    const getPostDesign = () =>{setPostDesign(postDesign === "album" ? "list" : "album");}
    const postList = [];

    return(
        <>
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
        {
            postList.length > 0 ?
            <PostingBody>
                {
                    postList.map(item=>(
                        <PostingItem postDesign={postDesign} key={item.key}>
                            <PostingImgItem postDesign={postDesign}>

                            </PostingImgItem>
                            <PostingHeaderItem postDesign={postDesign}>
                                <PostingTitle mod={mod}>{item.title}</PostingTitle>
                                <PostingUserWrap postDesign={postDesign}>
                                    <PostingUserInfoWrap>
                                        <PostingUserImgBox></PostingUserImgBox>
                                        <PostingUserName mod={mod}>{item.user_name}</PostingUserName>
                                    </PostingUserInfoWrap>
                                    <PostingDate mod={mod}>{item.date}</PostingDate>
                                </PostingUserWrap>
                            </PostingHeaderItem>
                            <PostingInfoWrap>
                                <PostingInfo mod={mod}>
                                    <SmallGoodIcon/>
                                    <PostingContent mod={mod}>{item.good}</PostingContent>
                                </PostingInfo>
                                <PostingInfo mod={mod}>
                                    <EyeIcon/>
                                    <PostingContent mod={mod}>{item.view}</PostingContent>
                                </PostingInfo>
                            </PostingInfoWrap>
                        </PostingItem>
                    ))
                }
            </PostingBody>
            : 
            <PostNotContent>
                <PostNotContentImg src={StudyRoomNotContent} alt="not content"/>
                <PostNotContentTitle mod={mod}>포스팅이 없습니다.</PostNotContentTitle>
            </PostNotContent>
        }
        </>

    );
}

export default StudyRoomPosting;