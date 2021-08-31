import * as React from 'react';

const JoinCheckedBox = (props)=>{
    const fill = props.checked ? "url(#linear-gradient)" : "#a7a7a7";

    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="25.909" height="23.318" viewBox="0 0 25.909 23.318">
            <defs>
                <linearGradient id="linear-gradient" x1="0.25" x2="0.844" y2="1" gradientUnits="objectBoundingBox">
                <stop offset="0" stop-color="#ffa2a2"/>
                <stop offset="1" stop-color="#97acde"/>
                </linearGradient>
            </defs>
            <path id="패스_317" data-name="패스 317" d="M27.909,12.466a.92.92,0,0,1-.917.924l-.011-.023a.913.913,0,0,1-.648-.27.927.927,0,0,1-.268-.653v-1.87a5.751,5.751,0,0,0-5.672-5.714H9.517a5.751,5.751,0,0,0-5.672,5.714v8.173A5.751,5.751,0,0,0,9.517,24.46H20.392a5.751,5.751,0,0,0,5.672-5.714.927.927,0,0,1,1.845,0,7.568,7.568,0,0,1-7.517,7.573H9.517A7.557,7.557,0,0,1,2,18.746V10.573A7.545,7.545,0,0,1,9.517,3H20.392a7.568,7.568,0,0,1,7.517,7.573Zm-12,2.009L21.24,10.18h.012A.921.921,0,1,1,22.4,11.623l-5.329,4.306a3.68,3.68,0,0,1-4.641,0l-5.34-4.306a.94.94,0,0,1-.138-1.3.9.9,0,0,1,1.283-.139l5.386,4.294A1.846,1.846,0,0,0,15.912,14.475Z" transform="translate(-2 -3)" fill={fill} fillRule="evenodd"/>
        </svg>
    );
}

export default JoinCheckedBox;