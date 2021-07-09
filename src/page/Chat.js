import React, {useEffect,useState} from 'react';
import Header from '../component/Header';

const Chat = () =>{
    const [mod,setMod] = useState(window.localStorage.getItem('theme') ? window.localStorage.getItem('theme') : 'light');
    const [path] = useState('/chat');
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
        </>
    )
}

export default Chat;
