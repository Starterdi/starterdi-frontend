import * as React from 'react';

const DescIcon = (props)=>{
    return(
        <svg id="그룹_80" data-name="그룹 80" xmlns="http://www.w3.org/2000/svg" width="30.263" height="27.661" viewBox="0 0 30.263 27.661">
            <path id="패스_332" data-name="패스 332" d="M8.667,7.3a1.367,1.367,0,0,1,1.366,1.366V28.188a1.366,1.366,0,1,1-2.733,0V8.666A1.367,1.367,0,0,1,8.667,7.3Z" transform="translate(-1.343 -3.296)" fill="#e8a2a8" fillRule="evenodd"/>
            <path id="패스_333" data-name="패스 333" d="M16.666,28.221A1.366,1.366,0,0,1,15.3,26.855V7.333a1.366,1.366,0,0,1,1.366-1.366c.755,0,1.366,1.366,1.366,1.366V26.855A1.366,1.366,0,0,1,16.666,28.221Z" transform="translate(6.273 -4.565)" fill={props.mod === "light" ? "#222628" : "#ffffff"} fillRule="evenodd"/>
            <path id="패스_334" data-name="패스 334" d="M7.743,23.218a1.171,1.171,0,0,1,0-1.656L13.9,15.41a1.171,1.171,0,1,1,1.656,1.657L9.4,23.218A1.171,1.171,0,0,1,7.743,23.218Z" transform="translate(-1.248 4.1)" fill="#e8a2a8" fillRule="evenodd"/>
            <path id="패스_335" data-name="패스 335" d="M20.4,5.592a1.171,1.171,0,0,1,0,1.656L14.248,13.4a1.171,1.171,0,0,1-1.656-1.656l6.152-6.152A1.171,1.171,0,0,1,20.4,5.592Z" transform="translate(3.368 -5.249)" fill={props.mod === "light" ? "#222628" : "#ffffff"} fillRule="evenodd"/>
            <path id="패스_336" data-name="패스 336" d="M12.4,23.218a1.171,1.171,0,0,0,0-1.656L6.248,15.41a1.171,1.171,0,1,0-1.656,1.657l6.152,6.152A1.171,1.171,0,0,0,12.4,23.218Z" transform="translate(-4.249 4.1)" fill="#e8a2a8" fillRule="evenodd"/>
            <path id="패스_337" data-name="패스 337" d="M15.743,5.592a1.171,1.171,0,0,0,0,1.656L21.9,13.4a1.171,1.171,0,0,0,1.656-1.656L17.4,5.592A1.171,1.171,0,0,0,15.743,5.592Z" transform="translate(6.369 -5.249)" fill={props.mod === "light" ? "#222628" : "#ffffff"} fillRule="evenodd"/>
        </svg>
    );
}

export default DescIcon;