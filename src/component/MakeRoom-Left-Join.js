import React, { useState } from 'react';
import styled from 'styled-components';

const LeftJoinWrap = styled.div`
    width : 90%;
    height : 90%;
    display : flex;
    flex-direction : column;
    justify-content : flex-start;
    align-items: flex-start
`;

const LeftJoinTitle = styled.h3`
    font-size : 1.5em;
    font-weight :bold;
    transition : 0.3s;
    margin: 1em 0;
    color : ${(props)=>(props.mod === "light" ? "#333" : "#fff")};
`;

const LeftJoinPreviewWrap = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction : column;
    justify-content : flex-start;
    align-items: flex-start;
    * {
        color : ${(props)=>(props.mod === "light" ? "#333" : "#fff")};
        transition : 0.3s;
    }
`;

const RoomCate = styled.p`
    width : 100%;
    text-align : right;
    font-size : 1.1em;
    ${(props)=>(props.data === "yes" ? "color : #aaa !important;" : "" )}
`;

const RoomName = styled.h3`
    font-size : 1.4em;
    font-weight : bold;
    margin : 1em 0;
    ${(props)=>(props.data === "yes" ? "color : #aaa !important;" : "" )}
`;

const RoomIntro = styled.textarea`
    background-color : rgba(0,0,0,0);
    border : none;
    width : 100%;
    height : 120px;
    overflow : auto;
    font-size : 0.9em;
    margin-bottom : 1em;
    pointer-events : normal;
    resize : none;
    ${(props)=>(props.data === "yes" ? "color : #aaa !important;" : "" )}
`;

const RoomCondition = styled.div`
    width : 100%;
    display : flex;
    flex-direction : column;
    justify-content : flex-start;
    align-items : flex-start;
    margin-top : 1em;
`;

const RoomConditionTitle = styled.p`
    font-size : 1.2em;
    font-weight : bold;
    margin-bottom : 1em;
`;

const RoomConditionItem = styled.div`
    margin : 0.7em 0;
    display : flex;
    flex-direction : ${(props)=>(props.type === "other" ? "column" : "rows")};
    justify-content : flex-start;
`;

const RoomConditionLabel = styled.p`
    font-size : 1em;
    font-weight : bold;
    color : #aaa !important;
    margin-right : 1em;
    ${(props)=>(props.type === "other" ? "margin-bottom : 0.5em;" : "" )}
`;

const RoomConditionValue = styled.p`
    font-size : 1em;
    ${(props)=>(props.data === "yes" ? "color : #aaa !important;" : "" )}
    ${(props)=>(props.type === "other" ? "margin : 0.5em 0;" : "")}
`;

const LeftJoin = (props) =>{
    const mod = props.mod;
    const [makeRoomSetting] = useState(props.makeRoomSetting);
    const [birth2] = useState(makeRoomSetting.room_condition.room_birth[1]);
    const [birth1] = useState(makeRoomSetting.room_condition.room_birth[0]);
    const [cate] = useState(makeRoomSetting.room_cate);
    const [name] = useState(makeRoomSetting.room_name);
    const [join_intro] = useState(makeRoomSetting.room_join_intro);
    const [gender] = useState(makeRoomSetting.room_condition.room_gender);
    const [other] = useState(makeRoomSetting.room_condition.room_other);

    return(
        <LeftJoinWrap>
            <LeftJoinTitle mod={mod}>미리보기</LeftJoinTitle>
            <LeftJoinPreviewWrap mod={mod}>
                <RoomCate data={cate === "" ? "yes" : "no"}>#{cate === "" ? "카테고리" : cate}</RoomCate>
                <RoomName data={name === "" ? "yes" : "no"}>{name ==="" ? "스터디방 이름" : name}</RoomName>
                <RoomIntro onChange={()=>{}} disabled data={join_intro === "" ? "yes" : "no"}  value={join_intro === "" ? "예시 텍스트입니다." : join_intro}></RoomIntro>
                <RoomCondition>
                    <RoomConditionTitle>참여 조건</RoomConditionTitle>
                    <RoomConditionItem>
                        <RoomConditionLabel>나이</RoomConditionLabel>
                        <RoomConditionValue data={birth1 === "" && birth2 === "" ? "yes" : "no"}>{birth1 === "" && birth2 === "" ? "예시 텍스트입니다." : birth1 === "" ? `${birth2}세 이하` : birth2 === "" ? `${birth1}세 이상` : birth1 === birth2 ? `${birth1}세` :`${birth1}세 ~ ${birth2}세`}</RoomConditionValue>
                    </RoomConditionItem>
                    <RoomConditionItem>
                        <RoomConditionLabel>성별</RoomConditionLabel>
                        <RoomConditionValue data={gender === "" ? "yes" : "no"}>{gender === "" ? "예시 텍스트입니다." : gender}</RoomConditionValue>
                    </RoomConditionItem>
                    <RoomConditionItem type="other">
                        <RoomConditionLabel type="other">그외 조건</RoomConditionLabel>
                        {other.length > 0 ? other.map(others=>(<RoomConditionValue type="other" key={others.key}>{others.key}. {others.value}</RoomConditionValue>)) : <RoomConditionValue type="other">조건이 없습니다.</RoomConditionValue>}
                    </RoomConditionItem>
                </RoomCondition>
            </LeftJoinPreviewWrap>
        </LeftJoinWrap>
    );
}

export default LeftJoin;
