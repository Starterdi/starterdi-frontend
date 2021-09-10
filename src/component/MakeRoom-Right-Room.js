import React from 'react';
import styled from 'styled-components';

// room-right

const MakeRoomRightForm = styled.form`
    width : 80%;
    height : 80%;
    margin : 0 auto;
    padding-top : 1em;
`;

const MakeRoomRightInputWrap = styled.div`
    width : 100%;
    margin : 2em 0;
    display : flex;
    flex-direction : column;
    align-items : flex-start;
`;

const MakeRoomRightInputLabel = styled.label`
    font-size: 1.2em;
    font-weight : bold;
    transition : 0.3s;
    color : ${(props)=>(props.mod === "light" ? "#333" : "#fff")};
`;

const MakeRoomRightInput = styled.input`
    background-color : #F5F6F8;
    border : none;
    border-radius : 30px;
    width : 100%;
    padding : 1em 1.5em;
    font-size : 1em;
    margin-top : 1.5em;
`;

const MakeRoomRightInputTextArea = styled.textarea`
    background-color : #F5F6F8;
    border : none;
    border-radius : 20px;
    width : 100%;
    padding : 1.5em;
    font-size : 1em;
    margin-top : 1.5em;
`;

const MakeRoomRightSelect = styled.select`
    padding : 0.5em;
    border : 1px solid #ddd;
    background-color : rgba(0,0,0,0);
    margin-top : 1.5em;
    border-radius : 10px;
    cursor : pointer;
    font-size : 1.1em;
    color : ${(props)=>(props.mod === "light" ? "#333" : "#fff")};
    transition : 0.3s;
    > option {color : #333;}
`;

const Room = (props)=>{
    const cateList = [
        {
          key : "그림",
          backgroundColor : "#59AFE8"
        },
        {
          key : "크로키",
          backgroundColor : "#F46F6F"
        },
        {
          key : "수채화",
          backgroundColor : "#81D86E"
        },
        {
          key : "패턴",
          backgroundColor : "#777777"
        },
        {
          key : "배경",
          backgroundColor : "#495E81"
        },
        {
          key : "취직",
          backgroundColor : "#F49B88"
        },
        {
          key : "코딩",
          backgroundColor : "#3AB014"
        },
        {
          key : "외국어",
          backgroundColor : "#EBC30D"
        },
        {
          key : "작곡/편곡",
          backgroundColor : "#D68EFD"
        }
      ];

    const mod = props.mod;

    return(
        <MakeRoomRightForm>
            <MakeRoomRightInputWrap>
                <MakeRoomRightInputLabel for="room_name" mod={mod}>스터디방 이름</MakeRoomRightInputLabel>
                <MakeRoomRightInput type="text" name="room_name" />
            </MakeRoomRightInputWrap>
            <MakeRoomRightInputWrap>
                <MakeRoomRightInputLabel mod={mod} for="room_cate">카테고리</MakeRoomRightInputLabel>
                <MakeRoomRightSelect mod={mod}>
                    <option value="">카테고리를 선택해주세요</option>
                    {
                        cateList.map(cate=>(<option value={cate.key} key={cate.key}>{cate.key}</option>))
                    }
                </MakeRoomRightSelect>
            </MakeRoomRightInputWrap>
            <MakeRoomRightInputWrap>
                <MakeRoomRightInputLabel mod={mod} for="room_intro">스터디방 소개</MakeRoomRightInputLabel>
                <MakeRoomRightInputTextArea rows="7" name="room_intro"></MakeRoomRightInputTextArea>
            </MakeRoomRightInputWrap>
        </MakeRoomRightForm>
    );
}

export default Room;