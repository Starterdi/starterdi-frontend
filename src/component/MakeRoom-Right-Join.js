import React,{useState, useRef } from 'react';
import styled from 'styled-components';

const RightJoinForm = styled.form`
    width : 95%;
    height : 80%;
    margin : 0 auto;
    padding-top : 1em;
    display : flex;
    justify-content : space-between;
    align-items : flex-start;
`;

const RoomJoinFormLeft = styled.div`
    width : 65%;
    display : flex;
    flex-direction : column;
    justify-content : flex-start;
    align-items : flex-start;
`;

const RoomJoinFormRight = styled.div`
    width : 30%;
    height : 95%;
    > div{height : 100%;}
`;

const RoomJoinInputWrap = styled.div`
    width : 100%;
    display : flex;
    flex-direction : column;
    justify-content : flex-start;
    align-items : flex-start;
    margin : 1em 0;
`;

const RoomJoinLabel = styled.label`
    margin : 0.5em 0;
    font-weight : bold;
    font-size : 1.2em;
    color : ${(props)=>(props.mod === "light" ? "#333" : "#fff")};
    transition : 0.3s;
`;

const RoomJoinBirthWrap = styled.div`
    width : 100%;
    display : flex;
    justify-content : space-between;
    align-items : center;
`;

const RoomJoinInput = styled.input`
    width : 45%;
    height : 50px;
    padding : 0.5em;
    border-radius : 5px;
    transition : 0.3s;
    background-color : #F5F6F8;
    border : 1px solid rgba(0,0,0,0);
    :focus {
        background-color : #fff;
        border : 1px solid #E8A2A8;
    }
`;

const RoomJoinGenderWrap = styled.div`
    width : 100%;
    display : flex;
    justify-content : space-between;
    align-items : center;
`;

const RoomJoinGender = styled.div`
    width : 30%;
    height : 50px;
    border-radius : 10px;
    border : 1px solid #ddd;
    transition : 0.3s;
    display : flex;
    justify-content :flex-start;
    align-items : center;
    cursor : pointer;
    padding : 0.5em 1em;
    > div {
        ${(props)=>(props.data === "yes" ? "border : 5px solid #E8A2A8;" : "")}
    }
`;

const RoomJoinSpan = styled.div`
    width : 30px;
    height : 30px;
    border : 3px solid #ddd;
    border-radius : 100%;
    transition : 0.3s;
`;

const RoomJoinGenderText = styled.p`
    margin-left : 1.2em;
    font-weight : bold;
    font-size : 1em;
    color : ${(props)=>(props.mod === "light" ? "#333" : "#fff")};
    transition : 0.3s;
`;

const RoomJoinTextArea = styled.textarea`
    width : 100%;
    height : 100%;
    border-radius : 10px;
    background-color :#F5F6F8;
    padding : 1em;
    border : none;
`;

const RoomJoinOtherWrap = styled.div`
    width : 100%;
    display : flex;
    flex-direction : column;
    justify-content : flex-start;
    align-items : flex-start;
`;

const RoomJoinOtherAddBtn = styled.button`
    width : 100%;
    height : 50px;
    border-radius : 10px;
    border : 1px solid #aaa;
    background-color :rgba(0,0,0,0);
    color : #aaa;
    text-align : center;
    line-height : 50px;
    cursor : pointer;
    font-size : 1.3em;
    transition : 0.3s;
    :hover{
        border-color : #E8A2A8;
        color : #E8A2A8;
    }
`;

const RoomJoinOtherValueWrap = styled.div`
    width : 100%;
`;

const RoomJoinOtherValule = styled.input`
    width : 100%;
    border : none;
    borer-radius : 10px;
    background-color : #F5F6F8;
    padding : 1em;
    margin-bottom : 1em;
`;

const RightJoin = (props) =>{
    const makeRoomSetting = props.makeRoomSetting;
    const getMakeRoomSetting = (value,type)=>{props.getMakeRoomSetting(value,type);}
    const mod = props.mod;

    const [room_birth,setRoomBirth] = useState(makeRoomSetting.room_condition.room_birth);
    const [room_gender,setRoomGender] = useState(makeRoomSetting.room_condition.room_gender);
    const [room_join_intro,setRoomJoinIntro] = useState(makeRoomSetting.room_join_intro);
    const [room_other,setRoomOther] = useState(makeRoomSetting.room_condition.room_other);

    const form = useRef(null);

    const setRightJoinSetting = () =>{
        const joinForm = form.current;
        let birth1 = joinForm.room_birth_one.value === "" ? "" : Number(joinForm.room_birth_one.value);
        let birth2 = joinForm.room_birth_two.value === "" ? "" : Number(joinForm.room_birth_two.value);
        const gender = joinForm.room_gender.value;
        const join_intro = joinForm.room_join_intro.value;
        // const other = joinForm.room_other;
        if((birth1 !== "" && birth2 !== "")){
            if(birth1 > birth2){
                birth2 = birth1;
                joinForm.room_birth_two.value = birth1;
            }

            if(birth2 < birth1){
                birth1 = birth2;
                joinForm.room_birth_one.value = birth2;
            }
        }

        const birth = [birth1,birth2];

        setRoomBirth(birth);
        setRoomGender(gender);
        setRoomJoinIntro(join_intro);
        // setRoomOther(other);

        getMakeRoomSetting({
            room_birth : birth,
            room_gender : gender,
            room_other : [],
        },"room_condition");
        getMakeRoomSetting(join_intro,"room_join_intro");

    }

    const setRightJoinGender = (e) =>{
        const joinForm = form.current;
        const birth = [joinForm.room_birth_one.value,joinForm.room_birth_two.value];
        const value = e.currentTarget.dataset.value;
        setRoomGender(value);
        
        getMakeRoomSetting({
            room_birth : birth,
            room_gender : value,
            room_other : [],
        },"room_condition");
    }

    return(
        <RightJoinForm ref={form}>
            <RoomJoinFormLeft>
                <RoomJoinInputWrap>
                    <RoomJoinLabel mod={mod} htmlFor="room_birth">나이</RoomJoinLabel>
                    <RoomJoinBirthWrap>
                        <RoomJoinInput type="number" mod={mod} name="room_birth_one" value={room_birth[0]} onChange={setRightJoinSetting} />
                        <span>~</span>
                        <RoomJoinInput type="number" mod={mod} name="room_birth_two" value={room_birth[1]} onChange={setRightJoinSetting} />
                    </RoomJoinBirthWrap>
                </RoomJoinInputWrap>
                <RoomJoinInputWrap>
                    <RoomJoinLabel mod={mod} htmlFor="room_gender">성별</RoomJoinLabel>
                    <RoomJoinGenderWrap>
                        <RoomJoinGender data-value="여자" onClick={setRightJoinGender} data={room_gender === "여자" ? "yes" : "no"}>
                            <input type="radio" name="room_gender" value="여자" onChange={setRightJoinSetting} checked={room_gender === "여자" ? true : false} hidden />
                            <RoomJoinSpan></RoomJoinSpan>
                            <RoomJoinGenderText mod={mod}>여자</RoomJoinGenderText>
                        </RoomJoinGender>
                        <RoomJoinGender data-value="남자" onClick={setRightJoinGender} data={room_gender === "남자" ? "yes" : "no"}>
                            <input type="radio" name="room_gender" value="남자" onChange={setRightJoinSetting} checked={room_gender === "남자" ? true : false} hidden />
                            <RoomJoinSpan></RoomJoinSpan>
                            <RoomJoinGenderText mod={mod}>남자</RoomJoinGenderText>
                        </RoomJoinGender>
                        <RoomJoinGender data-value="무관" onClick={setRightJoinGender} data={room_gender === "무관" ? "yes" : "no"}>
                            <input type="radio" name="room_gender" value="무관" onChange={setRightJoinSetting} checked={room_gender === "무관" ? true : false} hidden />
                            <RoomJoinSpan></RoomJoinSpan>
                            <RoomJoinGenderText mod={mod}>무관</RoomJoinGenderText>
                        </RoomJoinGender>
                    </RoomJoinGenderWrap>
                </RoomJoinInputWrap>
                <RoomJoinInputWrap>
                    <RoomJoinLabel mod={mod} >그외 조건</RoomJoinLabel>
                    <RoomJoinOtherWrap>
                        <RoomJoinOtherValueWrap>
                            <RoomJoinOtherValule type="text"  />
                            <RoomJoinOtherValule type="text"  />
                            <RoomJoinOtherValule type="text"  />
                        </RoomJoinOtherValueWrap>
                        <RoomJoinOtherAddBtn>+</RoomJoinOtherAddBtn>
                    </RoomJoinOtherWrap>
                </RoomJoinInputWrap>
            </RoomJoinFormLeft>
            <RoomJoinFormRight>
                <RoomJoinInputWrap>
                    <RoomJoinLabel mod={mod} htmlFor="room_join_intro">가입 소개</RoomJoinLabel>
                    <RoomJoinTextArea rows="25" column="10" name="room_join_intro" value={room_join_intro} onChange={setRightJoinSetting}></RoomJoinTextArea>
                </RoomJoinInputWrap>
            </RoomJoinFormRight>
        </RightJoinForm>
    );
}

export default RightJoin;