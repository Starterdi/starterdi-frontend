import React from 'react';
import styled from 'styled-components';

const StudyJoinContent = styled.div`
    width : 100%;
    padding : 2em 1em;
    display : flex;
    justfiy-content: space-between;
    align-items:flex-start;
`;

const StudyJoinButtonBox = styled.div`
    display : flex;
    justify-content : flex-end;
    align-items: center;
    width : 100%;
    margin-top : 2em;
    position : absolute;
    bottom : 6em;
    right : 4em;
`;

const StudyJoinButton = styled.button`
    width : 120px;
    height : 50px;
    border-radius : 10px;
    background-color : ${(props)=>(props.type === "prev" ? "rgba(0,0,0,0)" : "#E8A2A8")};
    color : ${(props)=>(props.type==="prev" ? "#555" : "#fff")};
    font-size : 1.1em;
    border : ${(props)=>(props.type === "prev" ? "1px solid #ddd" : "none")};
    cursor : pointer;
    transition : 0.3s;
    margin-left : 1em;
    :hover{
        opacity : 0.5;
    }
`;

const StudyConditionBox = styled.div`
    width : 50%;
    padding : 2em 5em 7em 5em;
    border-right : 2px solid #ddd;
    &:last-child{border:none;}
`;

const StudyConditionTitle = styled.p`
    font-size : 2em;
    font-weight :bold;
    margin-bottom : 2em;
`;

const StudyConditionItem = styled.div`
    width : 100%;
    display : flex;
    justify-content : flex-start;
    align-items:center;
    margin-bottom : 1em;
`;

const StudyConditionItemTitle = styled.p`
    font-size : 1.5em;
    font-weight : bold;
    margin-right : 1em;
`;

const StudyConditionItemData = styled.p`
    font-size : 1.5em;
`;

const StudyJoinCondition = (props)=>{
    const info = props.info;
    const mod = props.mod;
    const user = JSON.parse(localStorage.getItem("user"));
    const userBirth = user.birth;
    const birth = JSON.parse(info.birth);
    const setJoinPath = (value)=>{props.setJoinPath(value);}
    const PrevComponent=()=>{setJoinPath("1");}
    const NextComponent=()=>{setJoinPath("3");}
    console.log(new Date().getFullYear()-new Date(userBirth).getFullYear() + 1 , (new Date().getMonth() , new Date(userBirth).getMonth()));
    return(
        <>
            <StudyJoinContent mod={mod}>
                <StudyConditionBox>
                    <StudyConditionTitle>조건 프로필</StudyConditionTitle>
                    <StudyConditionItem>
                        <StudyConditionItemTitle>나이</StudyConditionItemTitle>
                        <StudyConditionItemData>{birth[0] === "" ? birth[1]+"세 이하" : birth[1] === "" ? birth[0]+"세 이상" : birth[0]+"세 ~ "+birth[1]+"세"}</StudyConditionItemData>
                    </StudyConditionItem>
                    <StudyConditionItem>
                        <StudyConditionItemTitle>성별</StudyConditionItemTitle>
                        <StudyConditionItemData>{info.gender}</StudyConditionItemData>
                    </StudyConditionItem>
                </StudyConditionBox>
                <StudyConditionBox>
                    <StudyConditionTitle>내 프로필</StudyConditionTitle>
                    <StudyConditionItem>
                        <StudyConditionItemTitle>나이</StudyConditionItemTitle>
                        <StudyConditionItemData>{userBirth}</StudyConditionItemData>
                    </StudyConditionItem>
                    <StudyConditionItem>
                        <StudyConditionItemTitle>성별</StudyConditionItemTitle>
                        <StudyConditionItemData>{user.gender}</StudyConditionItemData>
                    </StudyConditionItem>
                </StudyConditionBox>
            </StudyJoinContent>
            <StudyJoinButtonBox>
                <StudyJoinButton type="prev" onClick={PrevComponent}>이전</StudyJoinButton>
                <StudyJoinButton type="next" onClick={NextComponent}>다음</StudyJoinButton>
            </StudyJoinButtonBox>
        </>
    );
}

export default StudyJoinCondition;