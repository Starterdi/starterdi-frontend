import React from 'react';
import styled from 'styled-components';
import Wave from 'react-wavify';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import MainJoin from '../component/MainJoin';

const JoinPage = styled.div`
    position:relative;
    width:100%;
    height:100%;
    background-color:#FFFFFF;
    overflow:hidden;

    .joinWave{
        position:absolute;
        transform :rotate(145deg);
        height:400px;
        width:200px;
        left : -20%;
        top:-33%;
        opacity : 0.2;

        &.second{
            opacity:0.3;
            left:-20%;
            top:-40%;
        }

        &.third{
            opacity : 0.8;
            left:-30%;
            top:-25%;
            transform :rotate(155deg);
        }

        &.down{
            transform:rotate(-30deg);
            top:auto;
            bottom:-10%;
            left : auto;
            right : -30%;

            &.second{
                opacity:0.3;
                right:-20%;
                bottom:-25%;
            }
    
            &.third{
                opacity : 0.8;
                right:-30%;
                bottom:-15%;
                transform :rotate(-25deg);
            }
        }
    }
`;

const MakeWave = (props) =>{
    return(
        <Wave className={props.name} fill={props.color} paused={false} options={{
            height:props.height,
            amplitude:props.amplitude,
            speed:props.speed,
            points:props.points,
        }} />
    );
}

const Join = () =>{
    const WaveList = [
        {
            key:1,
            name:"loginWave",
            color:"#E8A2A8",
            height:90,
            amplitude:30,
            speed:0.7,
            points:5
        },
        {
            key:2,
            name:"loginWave second",
            color:"#E8A2A8",
            height:50,
            amplitude:50,
            speed:0.4,
            points:5
        },
        {
            key:3,
            name:"loginWave third",
            color:"#E8A2A8",
            height:50,
            amplitude:50,
            speed:0.3,
            points:5
        },
        {
            key:4,
            name:"down loginWave",
            color:"#E8A2A8",
            height:90,
            amplitude:30,
            speed:0.7,
            points:5
        },
        {
            key:5,
            name:"down loginWave second",
            color:"#E8A2A8",
            height:50,
            amplitude:50,
            speed:0.4,
            points:5
        },
        {
            key:6,
            name:"down loginWave third",
            color:"#E8A2A8",
            height:50,
            amplitude:50,
            speed:0.3,
            points:5
        },
    ];

    return(
        <JoinPage>
            <BrowserRouter>
                <Switch>
                    <Route path='/join' exact component={MainJoin} />
                </Switch>
            </BrowserRouter>
            {WaveList.map(Options=>(<MakeWave name={Options.name} color={Options.color} height={Options.height} amplitude={Options.amplitude} speed={Options.speed} points={Options.points} />))}
        </JoinPage>
    );
}

export default Join;