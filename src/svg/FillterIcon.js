import * as React from 'react';

const FillterIcon = (props) =>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="18.34" height="16.182" viewBox="0 0 18.34 16.182">
            <g id="그룹_86" data-name="그룹 86" transform="translate(-1.8 -3.3)">
                <path id="패스_359" data-name="패스 359" d="M3.472,4.558a.414.414,0,0,0-.414.415A2.99,2.99,0,0,0,4.09,7.233L9.1,11.577a2.025,2.025,0,0,1,.7,1.53v4.97l1.788-1.118a1.169,1.169,0,0,0,.549-.991V13.107a2.025,2.025,0,0,1,.7-1.53l5.012-4.344a2.99,2.99,0,0,0,1.032-2.26.414.414,0,0,0-.414-.415ZM1.8,4.973A1.672,1.672,0,0,1,3.472,3.3h15A1.672,1.672,0,0,1,20.14,4.973a4.249,4.249,0,0,1-1.466,3.211l-5.012,4.344a.766.766,0,0,0-.264.579v2.861a2.427,2.427,0,0,1-1.141,2.058l-2.063,1.29A1.079,1.079,0,0,1,8.542,18.4V13.107a.766.766,0,0,0-.264-.579L3.266,8.184A4.249,4.249,0,0,1,1.8,4.973Z" fill={props.mod === "light" ? "#222628" : "#fff"} fillRule="evenodd"/>
                <path id="패스_360" data-name="패스 360" d="M7.3,3.929A.629.629,0,0,1,7.929,3.3h7.192a.629.629,0,1,1,0,1.259H7.929A.629.629,0,0,1,7.3,3.929Z" transform="translate(-0.555)" fill="#e8a2a8" fillRule="evenodd"/>
            </g>
        </svg>
    )
}

export default FillterIcon;