import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import StudyJoin from '../component/StudyJoin';

const Join = ({computedMatch})=>{
    const [mod,setMod] = useState(window.localStorage.getItem('theme') ? window.localStorage.getItem('theme') : 'light');
    const [path] =  useState('/5/studyroom');
    const [info,setInfo] = useState(null);
    const idx = computedMatch.params.id;
    const changeMod = () =>{
        setMod(mod === "light" ? "dark" : "light");
        if(mod === "dark") window.localStorage.setItem('theme', 'light');
        else window.localStorage.setItem('theme', 'dark');
    }

    const RoomInfoLoad = async (idx)=>{
        await axios.post('/api/studyJoinLoad',{
            idx:idx
        })
        .then((res)=>{
            setInfo(res.data[0]);
        });
    }

    useEffect(()=>{
        RoomInfoLoad(idx);
    },[idx]);

    return (
        <>
            <Header mod={mod} changeMod={changeMod} path={path}  imgBasicUrl = "../" />
            <StudyJoin info={info} mod={mod} />
        </>
    );
}

export default Join;