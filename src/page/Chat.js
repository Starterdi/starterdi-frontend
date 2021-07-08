import React, {useEffect,useState} from 'react';
import Header from '../component/Header';

const Chat = () =>{
    const [mod,setMod] = useState("light");
    const changeMod = () =>{
        setMod(mod === "light" ? "dark" : "light");
    }

    useEffect(()=>{

    });

    return(
        <>
            <Header mod={mod} changeMod={changeMod} />
        </>
    )
}

export default Chat;
