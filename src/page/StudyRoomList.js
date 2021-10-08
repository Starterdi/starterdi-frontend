import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import StudyRoomListComponent from '../component/StudyRoomList';
import axios from 'axios';

const StudyRoomList = (props)=>{
    const [mod,setMod] = useState(window.localStorage.getItem('theme') ? window.localStorage.getItem('theme') : 'light');
    const [path] =  useState('/5/studyRoom');
    const [dataList,setDataList] = useState([]);
    const changeMod = () =>{
        setMod(mod === "light" ? "dark" : "light");
        if(mod === "dark") window.localStorage.setItem('theme', 'light');
        else window.localStorage.setItem('theme', 'dark');
    }

    const load = async() =>{
        await axios.post('/api/studyRoomUserListLoad',{
            user_idx : JSON.parse(localStorage.getItem("user")).idx
        })
        .then((res)=>{
            setDataList(res.data);
        });
    }

    useEffect(()=>{
        load();
    },[]);
    
    return(
        <>
            <Header mod={mod} changeMod={changeMod} path={path} />
            <StudyRoomListComponent mod={mod} dataList={dataList} />
        </>
    )
}

export default StudyRoomList;