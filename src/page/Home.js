import React, {useEffect,useState} from 'react';
import Header from '../component/Header';
import Visual from '../component/Visual';
import HomeContent from '../component/HomeContent';

const Home = () =>{
    const [mod,setMod] = useState("light");
    const changeMod = () =>{
        setMod(mod === "light" ? "dark" : "light");
    }

    useEffect(()=>{

    });

    return(
        <>
            <Header mod={mod} changeMod={changeMod} />
            <Visual mod={mod} />
            <HomeContent mod={mod} />
        </>
    )
}

export default Home;
