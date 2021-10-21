import React, {useEffect,useState} from 'react';
import Header from '../component/Header';
import Visual from '../component/Visual';
import HomeContent from '../component/HomeContent';

const Home = () =>{
    const [mod,setMod] = useState(window.localStorage.getItem('theme') ? window.localStorage.getItem('theme') : 'light');
    const [path] =  useState('/5/main');
    const [searchWord,setSearchWord] = useState("");
    const getSearchWord = (val) =>{
        setSearchWord(val);
    }

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
            <Visual mod={mod} getSearchWord={getSearchWord} />
            <HomeContent mod={mod} searchWord={searchWord} />
        </>
    )
}

export default Home;
