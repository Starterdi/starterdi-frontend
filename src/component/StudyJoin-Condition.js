import React from 'react';
import styled from 'styled-components';
import StudyJoinCheckIcon from '../svg/StudyJoinCheckIcon';

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
    background-color : ${(props)=>(props.type === "prev" ? "rgba(0,0,0,0)" : props.check === "ok" ? "#E8A2A8" : "#ddd")};
    color : ${(props)=>(props.type==="prev" ? "#555" : "#fff")};
    font-size : 1.1em;
    border : ${(props)=>(props.type === "prev" ? "1px solid #ddd" : "none")};
    cursor : pointer;
    transition : 0.3s;
    margin-left : 1em;
    pointer-events : ${(props)=>(props.type === "next" && props.check === "notOk" ? "none" : "all")};
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
    height : 45px;
    display : flex;
    justify-content : flex-start;
    align-items:center;
    margin-bottom : 1em;
    position : relative;
`;

const StudyConditionItemTitle = styled.p`
    font-size : 1.5em;
    font-weight : bold;
    margin-right : 1em;
`;

const StudyConditionItemData = styled.p`
    font-size : 1.5em;
`;

const StudyConditionCheckBox = styled.div`
    width : 40px;
    height : 40px;
    border : 3px solid ${(props)=>(props.check === "ok" ? "#79b47b" : "#CBCBCB")};
    background-color : #F5F6F8;
    position : absolute;
    top : 2.5px;
    right :0;
    display : flex;
    justify-content : center;
    align-items:center;
    border-radius : 100%;
    > svg path{
        fill : ${(props)=>(props.check === "ok" ? "#79b47b" : "#CBCBCB")};
    }
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
 
    const GetYear = (birth) =>{
        const userB = new Date(birth);
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        let age = year - userB.getFullYear() + 1;
        if(year !== userB.getFullYear() && month - userB.getMonth() > 0) age++;
        else if(year !== userB.getFullYear() && month - userB.getMonth() === 0 && day < userB.getDate()) age++;
        return age;
    }

    const CheckYear = ()=>{
        const userB = GetYear(userBirth);
        let flag = false;
        if(birth[0] === "" && birth[1] !== "" && userB <= birth[1]) flag = true;
        else if(birth[1] === "" && birth[0] !== "" && userB >= birth[0]) flag = true;
        else if(birth[1] !== "" && birth[0] !== "" && userB >= birth[0] && userB <= birth[1]) flag = true;

        return flag;
    }

    const CheckGender = ()=>{
        const userGender = user.gender;
        const InfoGender = info.gender;
        let flag = false;
        if(InfoGender === "남성" && userGender === "남성") flag = true;
        else if (InfoGender === "여성" && userGender === "여성") flag= true;
        else if(InfoGender === "무관") flag = true;

        return flag;
    }
    
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
                        <StudyConditionItemData>{GetYear(userBirth)}세</StudyConditionItemData>
                        <StudyConditionCheckBox check={CheckYear() === true ? "ok" : "notOk"}>
                            <StudyJoinCheckIcon/>
                        </StudyConditionCheckBox>
                    </StudyConditionItem>
                    <StudyConditionItem>
                        <StudyConditionItemTitle>성별</StudyConditionItemTitle>
                        <StudyConditionItemData>{user.gender}</StudyConditionItemData>
                        <StudyConditionCheckBox check={CheckGender() === true ? "ok" : "notOk"}>
                            <StudyJoinCheckIcon/>
                        </StudyConditionCheckBox>
                    </StudyConditionItem>
                </StudyConditionBox>
            </StudyJoinContent>
            <StudyJoinButtonBox>
                <StudyJoinButton type="prev" onClick={PrevComponent}>이전</StudyJoinButton>
                <StudyJoinButton check={(CheckGender() && CheckYear()) ? "ok" : "notOk"} type="next" onClick={NextComponent}>다음</StudyJoinButton>
            </StudyJoinButtonBox>
        </>
    );
}

export default StudyJoinCondition;