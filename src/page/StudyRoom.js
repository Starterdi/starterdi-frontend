import React, {useEffect,useState} from 'react';
import Header from '../component/Header';
import StudyRoomComponent from '../component/StudyRoom';
import axios from 'axios';

const StudyRoom = ({computedMatch}) =>{
    const [mod,setMod] = useState(window.localStorage.getItem('theme') ? window.localStorage.getItem('theme') : 'light');
    const [path] =  useState('/5/studyRoom');
    const [info,setInfo] = useState(null);
    const [studyUserInfo,setStudyUserInfo] = useState(null);
    const [studyGoodInfo,setStudyGoodInfo] = useState(null);
    const changeMod = () =>{
        setMod(mod === "light" ? "dark" : "light");
        if(mod === "dark") window.localStorage.setItem('theme', 'light');
        else window.localStorage.setItem('theme', 'dark');
    }

    const idx = computedMatch.params.id;

    const RoomInfoLoad = async (idx)=>{
        await axios.post('/api/studyLoad',{
            idx : idx,
            user_idx : JSON.parse(localStorage.getItem("user")).idx
        })
        .then(async (res)=>{
            setInfo(res.data[0][0]);
            setStudyUserInfo(res.data[1]);
            setStudyGoodInfo(res.data[2][0]);
        });
    }

    useEffect(()=>{
        RoomInfoLoad(idx);
    },[idx]);


    return(
        <>
            <Header mod={mod} changeMod={changeMod} path={path} imgBasicUrl = "../" />
            <StudyRoomComponent info = {info} mod={mod} userInfo={studyUserInfo} goodInfo={studyGoodInfo} />
        </>
    )
}

export default StudyRoom;