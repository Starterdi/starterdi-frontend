import React, {useEffect,useState} from 'react';
import Header from '../component/Header';
import Visual from '../component/Visual';
import HomeContent from '../component/HomeContent';

const Home = (props) =>{
    const [mod,setMod] = useState(window.localStorage.getItem('theme') ? window.localStorage.getItem('theme') : 'light');
    const [path] =  useState(props.location.pathname);
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
            <Visual mod={mod} />
            <HomeContent mod={mod} />
        </>
    )
}

export default Home;
