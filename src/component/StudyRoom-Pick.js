import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import StudyRoomPickEnterIcon from '../svg/StudyRoomPickEnterIcon';
import StudyRoomPickPrevIcon from '../svg/StudyRoomPickPrevIcon';
import StudyRoomPickNextIcon from '../svg/StudyRoomPickNextIcon';
import StudyRoomNotContent from '../image/StudyRoomNotContent.png';

const SelectPick = styled.div`
    width : 100%;
    height : 500px;
    margin-bottom : 2em;
    display : flex;
    justify-content : space-between;
    align-items : center;
`;

const SelectPickImg = styled.div`
    width : 45%;
    height : 100%;
    background-color : ${(props)=>(props.backgroundColor)};
`;

const SelectPickContent = styled.div`
    width : 50%;
    height : 100%;
`;

const SelectPickHeader = styled.div`
    width : 100%;
    display : flex;
    justify-content : flex-start;
    align-items : center;
`;

const SelectPickTitle = styled.p`
    font-size : 1.7em;
    font-weight : bold;
    margin-right : 1em;
    transition : 0.3s;
    color : ${(props)=>(props.mod === "light" ? "#333" : "#fff")};
`;

const SelectPickWrite = styled.p`
    font-size : 1.1em;
    font-weight : bold;
    color : ${(props)=>(props.mod === "light" ? "#888" : "#fff")};
    transition : 0.3s;
`;

const SelectPickText = styled.p`
    transition : 0.3s;
    height : 372px;
    margin-top : 1em;
    font-size : 1.1em;
    color : ${(props)=>(props.mod === "light" ? "#888" : "#fff")};
    
    overflow : auto;
    
    ::-webkit-scrollbar{
        width : 8px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #333;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color : rgba(0,0,0,0.3);
    }
`;

const SelectPickOpenButton = styled.button`
    margin-top : 20px;
    width : 50px;
    height : 50px;
    border-radius : 10px;
    border : none;
    background-color : ${(props)=>(props.backgroundColor)};
    cursor : pointer;
    transition : 0.3s;
    :hover { opacity : 0.5; }
`;

const PickList = styled.div`
    width : 100%;
    height : 330px;
    margin-top : 5em;
    display : flex;
    justify-content : flex-start;
    align-items : center;
`;

const PickListItem = styled.div`
    width : calc(90% / 5);
    height : 100%;
    cursor : pointer;
    box-shadow : 0 0 10px #ddd;
    transition : 0.3s;
    margin : 0 1.5em;
    :first-child { margin-left : 0;}
    :hover {
        opacity : 0.5;
    }
`;

const PickListItemImg = styled.div`
    width : 100%;
    height : 230px;
    background-color : ${(props)=>(props.backgroundColor)};
    overflow : hidden;
`;

const PickListItemHeader = styled.div`
    width : 100%;
    height : 100px;
    padding : 1.5em 1em;
`;

const PickListItemHead = styled.div`
    width : 100%;
    display : flex;
    justify-content : space-between;
    align-items : center;
`;

const PickListItemTitle = styled.p`
    width : 65%;
    margin-right : 10px;
    text-overflow : ellipsis;
    overflow : hidden;
    white-space : nowrap;
    font-size : 1.2em;
    font-weight : bold;
    color : ${(props)=>(props.mod === "light" ? "#333" : "#fff")};
`;

const PickListItemWrite = styled.p`
    font-size : 0.9em;
    color : ${(props)=>(props.mod === "light" ? "#888" : "#fff")};
    font-weight : bold;
`;

const PickListItemText = styled.p`
    margin-top : 0.5em;
    font-size : 0.9em;
    color : ${(props)=>(props.mod === "light" ? "#888" : "#fff")};
    text-overflow : ellipsis;
    overflow : hidden;
    white-space : nowrap;
`;

const PickListPageNavtionWrap = styled.div`
    width : 100%;
    height : 45px;
    margin-top :3em;
    display : flex;
    justify-content : center;
    align-items : center;
`;

const PickListPageBtn = styled.button`
    border : 2px solid ${(props)=>(props.select === "true" ? "#E8A2A8" : "#aaa")};
    color : ${(props)=>(props.select === "true" ? "#E8A2A8" : "#aaa")};
    border-radius : 10px;
    background-color : rgba(0,0,0,0);
    width : 45px;
    height : 45px;
    font-size : 1.2em;
    text-align :center;
    margin : 0 0.2em;
    cursor : pointer;
`;

const PickListPageNextBtn = styled.button`
    color : #aaa;
    border-radius : 10px;
    background-color : rgba(0,0,0,0);
    width : 45px;
    height : 45px;
    font-size : 1.2em;
    text-align :center;
    margin : 0 0.2em;
    cursor : pointer;
    border : none;
`;

const PickListPagePrevBtn = styled.button`
    color : #aaa;
    border-radius : 10px;
    background-color : rgba(0,0,0,0);
    width : 45px;
    height : 45px;
    font-size : 1.2em;
    text-align :center;
    margin : 0 0.2em;
    cursor : pointer;
    border : none;
`;

const PickNotContent = styled.div`
    width : 100%;
    padding : 2em;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`;

const PickNotContentImg = styled.img`
    width : 50%;
    margin-bottom : 3em;
`;

const PickNotContentTitle = styled.p`
    text-align : center;
    font-size : 2em;
    font-weight : bold;
    color : ${(props)=>(props.mod === "light" ? "#333" : "#fff")};
    transition : 0.3s;
`;

const StudyRoomPick = (props) =>{
    const roomInfo = props.roomInfo;
    const mod = props.mod;
    const pickList = [];
    const selectPick = {};

    const [drawPickList,setDrawPickList] = useState([]);
    const [pageButtonList,setPageButtonList] = useState([]);
    const [pageStart] = useState(1);
    const [pageEnd] = useState(Math.ceil(pickList.length / 5));
    const [pageNow, setPageNow] = useState(1);
    const [pageBlockStart,setPageBlockStart] = useState(0);
    const [pageBlockEnd,setPageBlockEnd] = useState(pageEnd > 5 ? 5 : pageEnd);

    const MakePickList = ()=>{
        let list = [];
        let start = (pageNow-1) * 5;
        let end = start + 5 < pickList.length ? start + 5 : pickList.length;
        for(let i = start; i < end; i++) list.push(pickList[i]);
        setDrawPickList(list);
    }

    const getPageButtonList = ()=>{
        let list = [];
        if(pageBlockStart === pageBlockEnd) list.push(pageBlockStart);
        for(let i = pageBlockStart; i < pageBlockEnd; i++) list.push(i+1);
        setPageButtonList(list);
    }

    const ClickSetPageButton = (val)=>{
        setPageNow(val);
    }

    const ClickSetNextButton = ()=>{
        let page = pageNow+1;
        page = page > pageEnd ? pageEnd : page;
        setPageNow(page);
        if(page > pageBlockEnd){
            let start = page;
            let end = start + 5 > pageEnd ? pageEnd : start + 5;
            setPageBlockStart(start);
            setPageBlockEnd(end);
        }
    }

    const ClickSetPrevButton = ()=>{
        let page = pageNow-1;
        page = page < pageStart ? pageStart : page;
        setPageNow(page);
        if(page < pageBlockStart){
            let start = page - 5;
            let end = page;
            setPageBlockStart(start);
            setPageBlockEnd(end);
        }
    }

    useEffect(()=>{
        MakePickList();
        getPageButtonList();
    },[pageNow]);

    return (
        <>
            <>
                {
                    Object.keys(selectPick).length > 0 ? 
                    <SelectPick>
                        <SelectPickImg backgroundColor={mod === "light" ? roomInfo.light_theme : roomInfo.dark_theme}>
                        </SelectPickImg>
                        <SelectPickContent>
                            <SelectPickHeader>
                                    <SelectPickTitle mod={mod}></SelectPickTitle>
                                    <SelectPickWrite mod={mod}></SelectPickWrite>
                            </SelectPickHeader>
                            <SelectPickText mod={mod}>
                            </SelectPickText>
                            <SelectPickOpenButton backgroundColor={mod === "light" ? roomInfo.light_theme : roomInfo.dark_theme}><StudyRoomPickEnterIcon/></SelectPickOpenButton>
                        </SelectPickContent> 
                    </SelectPick>
                    : <PickNotContent>
                        <PickNotContentImg src={StudyRoomNotContent} alt="not content"/>
                        <PickNotContentTitle mod={mod}>공지사항이 없습니다.</PickNotContentTitle>
                    </PickNotContent>
                }
            </>
            {
                drawPickList.length > 0 ? 
                <PickList>
                    {
                        drawPickList.map(item => (
                            <PickListItem key={item.key}>
                                <PickListItemImg backgroundColor={mod === "light" ? roomInfo.light_theme : roomInfo.dark_theme}></PickListItemImg>
                                <PickListItemHeader>
                                    <PickListItemHead>
                                        <PickListItemTitle mod={mod}>{item.title}</PickListItemTitle>
                                        <PickListItemWrite mod={mod}>{item.write}</PickListItemWrite>
                                    </PickListItemHead>
                                    <PickListItemText mod={mod}>{item.text}</PickListItemText>
                                </PickListItemHeader>
                            </PickListItem>
                            ))
                    }
                </PickList>
                : ""
            }
            
            {
                drawPickList.length > 0 ? 
                <PickListPageNavtionWrap>
                    <PickListPagePrevBtn onClick={ClickSetPrevButton}><StudyRoomPickPrevIcon/></PickListPagePrevBtn>
                    {
                        pageButtonList.map(item => (
                            <PickListPageBtn select={pageNow === item ? "true" : "false"} onClick={()=>{ClickSetPageButton(item)}}>{item}</PickListPageBtn>
                        ))
                    }
                    <PickListPageNextBtn onClick={ClickSetNextButton}><StudyRoomPickNextIcon/></PickListPageNextBtn>
                </PickListPageNavtionWrap>
                : ""
            }
            
        </>
    );
}

export default StudyRoomPick;