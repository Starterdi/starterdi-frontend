import React, {useEffect,useState} from 'react';
import Header from '../component/Header';
import MakeRoomComponent from '../component/MakeRoom';

const MakeRoom = () =>{
    const [mod,setMod] = useState(window.localStorage.getItem('theme') ? window.localStorage.getItem('theme') : 'light');
    const [path] =  useState('/5/main');
    const changeMod = () =>{
        setMod(mod === "light" ? "dark" : "light");
        if(mod === "dark") window.localStorage.setItem('theme', 'light');
        else window.localStorage.setItem('theme', 'dark');
    }

    useEffect(()=>{

    });

    return(
        <>
            <Header mod={mod} changeMod={changeMod} path={path} />
            <MakeRoomComponent mod={mod} />
        </>
    )
}

export default MakeRoom;