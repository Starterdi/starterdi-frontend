import React,{useState,useRef} from 'react';
import styled from 'styled-components';

const RightDesignForm = styled.form`
    width : 95%;
    height: 80%;
    margin : 0 auto;
    padding-top : 1em;
`;

const RoomDesignInputWrap = styled.div`
    width : 90%;
    display : flex;
    justify-content : space-around;
    align-items : center;
    margin : 2em auto;
`;

const RoomDesignLabel = styled.label`
    margin : 0.5em 0;
    font-weight :bold;
    font-size : 1.2em;
    color : ${(props)=>(props.mod === "light" ? "#333" : "#fff")};
    transition : 0.3s;
`;

const RoomDesignBoxWrap = styled.div`
    margin-top : 0.5em;
    width : 100%;
    display : flex;
    justify-content : flex-start;
    align-items : center;
`;

const RoomDesignBox = styled.div`
    width : 150px;
    height : 50px;
    border-radius : 10px;
    border : 1px solid #ddd;
    transition : 0.3s;
    display : flex;
    justify-content : flex-start;
    align-items : center;
    cursor : pointer;
    margin-right : 1em;
    padding : 0.5em 1em;
    > div {
        ${(props)=>(props.data === "yes" ? "border : 5px solid #E8A2A8;" : "")};
    }
`;

const RoomDesignBtn = styled.div`
    width : 30px;
    height : 30px;
    border : 3px solid #ddd;
    border-radius : 100%;
    transition : 0.3s;
`;

const RoomDesignBoxText = styled.p`
    margin-left : 1.2em;
    font-weight : bold;
    font-size : 1em;
    color :${(props)=>(props.mod === "light" ? "#333" : "#fff")};
    transition : 0.3s;
`;

const RoomDesignThemeWrap = styled.div`
    width : 45%;
    display : flex;
    flex-direction : column;
    align-items: flex-start;
    justify-content : flex-start
`;

const RoomDesignTheme = styled.div`
    width : 100%;
    display : flex;
    flex-wrap : wrap;
    justify-content : flex-start;
    align-items : flex-start;
`;

const RoomThemeItem = styled.div`
    width : 45px;
    height : 45px;
    border-radius : 100%;
    border-bottom-left-radius : 0;
    margin : 0.5em;
    cursor : pointer;
    background-color : ${(props)=>(props.theme)};
    border : 3px solid ${(props) => (props.data === "no" ? "rgba(0,0,0,0)" : props.mod === "light" ? "#333" : "#fff")};
    transition : 0.3s;
`;

const RoomDesignSortRangeWrap = styled.div`
    width : 45%;
`;

const RoomDesignSortWrap = styled.div`
    display : flex;
    flex-direction : column;
    justify-content :flex-start;
    align-items : flex-start;
    width : 95%;
`;

const RightDesign = (props)=>{
    const [makeRoomSetting] = useState(props.makeRoomSetting);
    const getMakeRoomSetting = (value,type)=>{props.getMakeRoomSetting(value,type);}
    const mod = props.mod;

    const lightTheme = [
        {key:"#E8A2A8"},
        {key:"#CBA6C3"},
        {key:"#83A2CE"},
        {key:"#A9CECE"},
        {key:"#9E8D86"},
        {key:"#CDCDDF"},
        {key:"#C2C5F6"},
        {key:"#FAA37D"},
        {key:"#72C185"},
        {key:"#C5C09A"}
    ];

    const darkTheme = [
        {key:"#E8A2A8"},
        {key:"#2F3E5B"},
        {key:"#61C6BD"},
        {key:"#FF9249"},
        {key:"#E6CDB7"},
        {key:"#1A9CF0"},
        {key:"#FFBE2C"},
        {key:"#51916E"},
        {key:"#FF5857"},
        {key:"#355889"},
    ];

    const form = useRef(null);
    const [room_light_theme,setRoomLightTheme]= useState(makeRoomSetting.room_light_theme);
    const [room_dark_theme,setRoomDarkTheme] = useState(makeRoomSetting.room_dark_theme);
    const [room_arrangement,setRoomArrangement] = useState(makeRoomSetting.room_arrangement);
    const [room_sort,setRoomSort] = useState(makeRoomSetting.room_sort);
    const [room_order,setRoomOrder] = useState(makeRoomSetting.room_order);
    
    const getLightTheme = (e)=>{
        setRoomLightTheme(e.target.dataset.theme);
        getMakeRoomSetting(e.target.dataset.theme,"room_light_theme");
    }

    const getDarkTheme = (e)=>{
        setRoomDarkTheme(e.target.dataset.theme);
        getMakeRoomSetting(e.target.dataset.theme,"room_dark_theme");
    }

    const getArrangement = (e)=>{
        setRoomArrangement(e.currentTarget.dataset.arrangement);
        getMakeRoomSetting(e.currentTarget.dataset.arrangement,"room_arrangement");
    }

    const getSort = (e)=>{
        setRoomSort(e.currentTarget.dataset.sort);
        getMakeRoomSetting(e.currentTarget.dataset.sort,"room_sort");
    }

    const getOrder = (e)=>{
        setRoomOrder(e.currentTarget.dataset.order);
        getMakeRoomSetting(e.currentTarget.dataset.order,"room_order");
    }

    return(
        <RightDesignForm ref={form}>
            <RoomDesignInputWrap>
                <RoomDesignThemeWrap>
                    <RoomDesignLabel mod={mod}>밝은 테마</RoomDesignLabel>
                    <RoomDesignTheme>
                    {lightTheme.map(theme=>(<RoomThemeItem mod={mod} theme={theme.key} key={theme.key} data={room_light_theme === theme.key ? "yes" : "no"} data-theme={theme.key} onClick={getLightTheme} />))}
                    </RoomDesignTheme>
                </RoomDesignThemeWrap>
                <RoomDesignThemeWrap>
                    <RoomDesignLabel mod={mod}>어두운 테마</RoomDesignLabel>
                    <RoomDesignTheme>
                    {darkTheme.map(theme=>(<RoomThemeItem mod={mod} theme={theme.key} key={theme.key} data={room_dark_theme === theme.key ? "yes" : "no"}  data-theme={theme.key} onClick={getDarkTheme} />))}
                    </RoomDesignTheme>
                </RoomDesignThemeWrap>
            </RoomDesignInputWrap>
            <RoomDesignInputWrap>
                <RoomDesignSortRangeWrap>
                    <RoomDesignLabel mod={mod}>배치</RoomDesignLabel>
                    <RoomDesignBoxWrap>
                        <RoomDesignBox data={room_arrangement === "album" ? "yes" : "no"} data-arrangement="album" onClick={getArrangement}>
                            <RoomDesignBtn></RoomDesignBtn>
                            <RoomDesignBoxText mod={mod}>앨범형</RoomDesignBoxText>
                        </RoomDesignBox>
                        <RoomDesignBox data={room_arrangement === "list" ? "yes" : "no"} data-arrangement="list" onClick={getArrangement}>
                            <RoomDesignBtn></RoomDesignBtn>
                            <RoomDesignBoxText mod={mod}>목록형</RoomDesignBoxText>
                        </RoomDesignBox>
                    </RoomDesignBoxWrap>
                </RoomDesignSortRangeWrap>
                <RoomDesignSortRangeWrap>
                    <RoomDesignLabel mod={mod}>정렬</RoomDesignLabel>
                    <RoomDesignBoxWrap>
                        <RoomDesignBox data={room_sort === "famous" ? "yes" : "no" } data-sort="famous" onClick={getSort}>
                            <RoomDesignBtn></RoomDesignBtn>
                            <RoomDesignBoxText mod={mod}>인기순</RoomDesignBoxText>
                        </RoomDesignBox>
                        <RoomDesignBox data={room_sort === "recent" ? "yes" : "no"} data-sort="recent" onClick={getSort}>
                            <RoomDesignBtn></RoomDesignBtn>
                            <RoomDesignBoxText mod={mod}>최신순</RoomDesignBoxText>
                        </RoomDesignBox>
                    </RoomDesignBoxWrap>
                </RoomDesignSortRangeWrap>
            </RoomDesignInputWrap>
            <RoomDesignInputWrap>
                <RoomDesignSortWrap>
                <RoomDesignLabel mod={mod}>순서</RoomDesignLabel>
                <RoomDesignBoxWrap>
                    <RoomDesignBox data={room_order === "famous" ? "yes" : "no"} data-order="famous" onClick={getOrder}>
                        <RoomDesignBtn></RoomDesignBtn>
                        <RoomDesignBoxText mod={mod}>인기순</RoomDesignBoxText>
                    </RoomDesignBox>
                    <RoomDesignBox data={room_order === "recent" ? "yes" : "no"} data-order="recent" onClick={getOrder}>
                        <RoomDesignBtn></RoomDesignBtn>
                        <RoomDesignBoxText mod={mod}>최신순</RoomDesignBoxText>
                    </RoomDesignBox>
                </RoomDesignBoxWrap>
                </RoomDesignSortWrap>
            </RoomDesignInputWrap>
        </RightDesignForm>
    );
}

export default RightDesign;