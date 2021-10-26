import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import StudyRoomPickEnterIcon from '../svg/StudyRoomPickEnterIcon';
import StudyRoomPickPrevIcon from '../svg/StudyRoomPickPrevIcon';
import StudyRoomPickNextIcon from '../svg/StudyRoomPickNextIcon';

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
    justify-content : space-between;
    align-items : center;
`;

const PickListItem = styled.div`
    width : calc(90% / 5);
    height : 100%;
    cursor : pointer;
    box-shadow : 0 0 10px #ddd;
    transition : 0.3s;
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

const StudyRoomPick = (props) =>{
    const roomInfo = props.roomInfo;
    const mod = props.mod;
    const pickList = [
        {
            id : 1,
            title : "Lorem Ipsum 1",
            write : "담당자",
            text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ipsum ut nulla congue congue. Mauris dapibus tortor ut porta hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus semper urna at neque porta, vel dignissim nunc mattis. Fusce ut fringilla ipsum, quis convallis odio."
        },
        {
            id : 2,
            title : "Lorem Ipsum 2",
            write : "담당자",
            text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ipsum ut nulla congue congue. Mauris dapibus tortor ut porta hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus semper urna at neque porta, vel dignissim nunc mattis. Fusce ut fringilla ipsum, quis convallis odio."
        },
        {
            id : 3,
            title : "Lorem Ipsum 3",
            write : "담당자",
            text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ipsum ut nulla congue congue. Mauris dapibus tortor ut porta hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus semper urna at neque porta, vel dignissim nunc mattis. Fusce ut fringilla ipsum, quis convallis odio."
        },
        {
            id : 4,
            title : "Lorem Ipsum 4",
            write : "담당자",
            text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ipsum ut nulla congue congue. Mauris dapibus tortor ut porta hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus semper urna at neque porta, vel dignissim nunc mattis. Fusce ut fringilla ipsum, quis convallis odio."
        },
        {
            id : 5,
            title : "Lorem Ipsum 5",
            write : "담당자",
            text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ipsum ut nulla congue congue. Mauris dapibus tortor ut porta hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus semper urna at neque porta, vel dignissim nunc mattis. Fusce ut fringilla ipsum, quis convallis odio."
        },{
            id : 6,
            title : "Lorem Ipsum 6",
            write : "담당자",
            text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ipsum ut nulla congue congue. Mauris dapibus tortor ut porta hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus semper urna at neque porta, vel dignissim nunc mattis. Fusce ut fringilla ipsum, quis convallis odio."
        }
    ];

    const [drawPickList,setDrawPickList] = useState([]);
    const [pageStart,setPageStart] = useState(0);
    const [pageEnd,setPageEnd] = useState(Math.ceil(pickList.length / 5)-1);
    const [pageNow, setPageNow] = useState(0);
    const [pageBlockStart,setPageBlockStart] = useState(0);
    const [pageBlockEnd,setPageBlockEnd] = useState(pageEnd > 4 ? 4 : pageEnd);

    const MakePickList = ()=>{
        let list = [];
        for(let i = pageNow; i < pageNow+5; i++) list.push(pickList[i]);
        setDrawPickList(list);
    }

    useEffect(()=>{
        MakePickList();
    },[]);

    return (
        <>
            <SelectPick>
                <SelectPickImg backgroundColor={mod === "light" ? roomInfo.light_theme : roomInfo.dark_theme}>
                </SelectPickImg>
                <SelectPickContent>
                    <SelectPickHeader>
                            <SelectPickTitle mod={mod}>공지사항 타이틀</SelectPickTitle>
                            <SelectPickWrite mod={mod}>담당자</SelectPickWrite>
                    </SelectPickHeader>
                    <SelectPickText mod={mod}>
                        토끼, 둘 무성할 이제 패, 북간도에 딴은 봅니다. 노루, 아름다운 멀듯이, 덮어 피어나듯이 멀리 봅니다.
                        이름을 덮어 쉬이 별 사람들의 언덕 있습니다. 이국 부끄러운 봄이 않은 이름과, 별 비둘기, 듯합니다. 이름과, 어머님, 가슴속에 쉬이 위에 어머니, 시와 동경과 새워 봅니다.
                        슬퍼하는 없이 노새, 지나고 북간도에 아침이 까닭입니다. 이네들은 청춘이 별 봅니다. 멀리 내일 가을로 계십니다. 슬퍼하는 내일 이제 라이너 계십니다. 이름과, 하나에 별 지나가는 없이 이름자를 밤이 까닭입니다. 위에 다 겨울이 청춘이 흙으로 벌써 버리었습니다. 경, 소학교 쓸쓸함과 노새, 위에도 묻힌 보고, 버리었습니다.
                        없이 흙으로 별 자랑처럼 밤을 계십니다. 나의 된 패, 벌써 쓸쓸함과 라이너 보고, 까닭입니다. 마리아 봄이 아름다운 강아지, 많은 하나 옥 어머님, 나는 듯합니다. 이국 어머니, 멀리 동경과 위에 아무 나는 버리었습니다. 비둘기, 경, 아직 있습니다. 계절이 별 쓸쓸함과 어머니 나의 너무나 부끄러운 내 노새, 있습니다. 동경과 이름자 위에 이웃 걱정도 하나에 계절이 아직 책상을 봅니다.
                    </SelectPickText>
                    <SelectPickOpenButton backgroundColor={mod === "light" ? roomInfo.light_theme : roomInfo.dark_theme}><StudyRoomPickEnterIcon/></SelectPickOpenButton>
                </SelectPickContent>
            </SelectPick>
            <PickList>
                {
                    drawPickList.map(item => (
                    <PickListItem>
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
            <PickListPageNavtionWrap>
                <PickListPagePrevBtn><StudyRoomPickPrevIcon/></PickListPagePrevBtn>
                <PickListPageBtn select={pageNow === 0 ? "true" : "false"}>1</PickListPageBtn>
                <PickListPageBtn select={pageNow === 1 ? "true" : "false"}>2</PickListPageBtn>
                <PickListPageNextBtn><StudyRoomPickNextIcon/></PickListPageNextBtn>
            </PickListPageNavtionWrap>
        </>
    );
}

export default StudyRoomPick;