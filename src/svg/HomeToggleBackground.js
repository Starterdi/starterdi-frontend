import * as React from 'react';

const HomeToggleBackground = (props)=>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="23" viewBox="0 0 46 22">
            <rect id="사각형_302" data-name="사각형 302" width="46" height="23" rx="11" fill={props.set === "on" ? "#e8a2a8" : "#aaaaaa"}/>
        </svg>
    );
}

export default HomeToggleBackground;