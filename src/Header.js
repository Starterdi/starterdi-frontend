import React from 'react';
//import axios from 'axios';

function App() {

  const Logo = ()=>{
    return(
      <svg xmlns="http://www.w3.org/2000/svg" width="250" height="35" viewBox="0 0 249 48">
        <text id="STARTERDY" transform="translate(0 36)" fontSize="40" fontWeight="Bold" fontFamily="AppleSDGothicNeoH00" letterSpacing="0.07em" ><tspan x="0" y="0" >STARTERDY</tspan></text>
      </svg>
    );
  }

  const NavIcon = (props) =>{
    switch(props.name){
      case "홈" : return(<svg xmlns="http://www.w3.org/2000/svg" width="33" height="34.841" viewBox="0 0 33 34.841"><path id="패스_1" data-name="패스 1" d="M33.5,11.816a5.36,5.36,0,0,1,2,4.123l-.015,14A6.887,6.887,0,0,1,28.6,36.829H25.543A3.344,3.344,0,0,1,22.2,33.5V27.178a.886.886,0,0,0-.886-.886H16.732a.886.886,0,0,0-.886.9v2.413a1.374,1.374,0,0,1-2.749,0V27.194a3.65,3.65,0,0,1,3.65-3.65h4.581a3.65,3.65,0,0,1,3.634,3.65V33.5a.58.58,0,0,0,.58.58h3.13A4.123,4.123,0,0,0,32.8,29.958V15.97a2.581,2.581,0,0,0-.977-1.985L21.268,5.57a3.6,3.6,0,0,0-4.581,0L13.3,8.105A1.4,1.4,0,1,1,11.662,5.83L15.007,3.4a6.337,6.337,0,0,1,7.941,0ZM9.387,34.066h7.024V34.1a1.374,1.374,0,1,1,0,2.749H9.387A6.9,6.9,0,0,1,2.5,29.958V15.97a5.314,5.314,0,0,1,2.062-4.123L5.829,10.9a1.374,1.374,0,0,1,1.588,2.184L6.18,14a2.581,2.581,0,0,0-.932,1.97V29.942A4.154,4.154,0,0,0,9.387,34.066Z" transform="translate(-2.5 -2.004)" fillRule="evenodd"/></svg>);
      case "채팅" : return(<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34"><path id="패스_2" data-name="패스 2" d="M19.011,2a17,17,0,0,1-.019,34,16.872,16.872,0,0,1-3.651-.4,1.273,1.273,0,1,1,.552-2.486A14.454,14.454,0,1,0,19.01,4.546h-.016A14.456,14.456,0,0,0,6.181,25.683l.326.638a3.338,3.338,0,0,1,.229,2.52,29.1,29.1,0,0,0-.9,2.775c.955-.288,2.121-.711,2.964-1.018l.346-.124a1.272,1.272,0,0,1,.865,2.393l-.341.124-.058.021h0A39.73,39.73,0,0,1,5.52,34.336a1.315,1.315,0,0,1-.3.031,2.051,2.051,0,0,1-1.52-.583,2.228,2.228,0,0,1-.572-1.7,1.3,1.3,0,0,1,.033-.25,29.773,29.773,0,0,1,1.172-3.818.8.8,0,0,0-.084-.526l-.328-.636A17,17,0,0,1,18.992,2ZM9.486,19a2.021,2.021,0,1,1,2.021,2.02A2.023,2.023,0,0,1,9.486,19Zm11.528,0a2.021,2.021,0,1,0-2.021,2.022A2.023,2.023,0,0,0,21.014,19Zm5.464-2.022A2.022,2.022,0,1,1,24.457,19,2.023,2.023,0,0,1,26.478,16.976Z" transform="translate(-2 -2)" fill="#130f26" fillRule="evenodd"/></svg>);
      case "커뮤니티" : return(<svg xmlns="http://www.w3.org/2000/svg" width="40.157" height="31.031" viewBox="0 0 40.157 31.031"><path id="패스_3" data-name="패스 3" d="M15.268,11.883a1.264,1.264,0,1,1-2.528,0,8.339,8.339,0,1,1,8.339,8.383,8.247,8.247,0,0,1-5.129-1.76,1.275,1.275,0,0,1-.222-1.782A1.257,1.257,0,0,1,17.5,16.5a5.758,5.758,0,0,0,3.577,1.223,5.842,5.842,0,1,0-5.812-5.842Zm-3.278,5.28a1.268,1.268,0,0,1-1.264,1.271,6.634,6.634,0,0,1,0-13.268,1.271,1.271,0,0,1,0,2.541,4.093,4.093,0,0,0,0,8.185A1.268,1.268,0,0,1,11.99,17.163ZM8.358,24.258a15.875,15.875,0,0,0-2.425.354c-1.223.242-2.064.656-2.282,1.113a1.286,1.286,0,0,0,0,1.1c.1.218.529.762,2.26,1.12a1.271,1.271,0,0,1-.253,2.514A1.306,1.306,0,0,1,5.4,30.43C3.313,30,1.957,29.153,1.37,27.912a3.814,3.814,0,0,1,0-3.278c.593-1.252,1.953-2.1,4.042-2.511a18.405,18.405,0,0,1,2.775-.4,1.27,1.27,0,0,1,.17,2.534Zm23.095-8.324a1.271,1.271,0,0,0,0,2.541,6.62,6.62,0,0,0,0-13.239,1.271,1.271,0,0,0,0,2.541,4.078,4.078,0,0,1,0,8.156Zm5.329,6.221c2.058.41,3.414,1.252,4.005,2.5a3.809,3.809,0,0,1,0,3.277c-.585,1.235-1.938,2.081-4.026,2.513a1.185,1.185,0,0,1-.256.027,1.272,1.272,0,0,1-.251-2.516c1.724-.358,2.148-.9,2.251-1.117a1.272,1.272,0,0,0,0-1.089c-.216-.456-1.053-.868-2.243-1.1a16.436,16.436,0,0,0-2.448-.358,1.27,1.27,0,0,1,.168-2.535A18.747,18.747,0,0,1,36.782,22.154Zm-15.7.742c-3.043,0-12.3,0-12.3,5.833a4.7,4.7,0,0,0,2.972,4.351,11.935,11.935,0,0,0,2.716.9,1.27,1.27,0,0,0,.526-2.486,9.257,9.257,0,0,1-2.13-.695c-1.38-.679-1.557-1.46-1.557-2.067,0-2.721,5.316-3.292,9.775-3.292,6.487,0,9.775,1.1,9.775,3.262,0,2.719-5.316,3.29-9.775,3.29a1.271,1.271,0,0,0,0,2.541c3.043,0,12.3,0,12.3-5.832C33.382,22.9,24.444,22.9,21.079,22.9Z" transform="translate(-1 -3.5)" fill="#130f26" fillRule="evenodd"/></svg>);
      case "친구" : return(<svg xmlns="http://www.w3.org/2000/svg" width="34.5" height="32.775" viewBox="0 0 34.5 32.775"><path id="패스_4" data-name="패스 4" d="M8.826,11.329a1.294,1.294,0,0,1-2.587,0A8.82,8.82,0,1,1,9.647,18.3a1.291,1.291,0,1,1,1.589-2.036,6.255,6.255,0,1,0-2.41-4.938ZM24.89,16.968a1.292,1.292,0,0,1,1.294-1.289,4.38,4.38,0,1,0,0-8.759,1.29,1.29,0,1,1,0-2.579,6.959,6.959,0,1,1,0,13.917A1.292,1.292,0,0,1,24.89,16.968Zm6.978,5.3c2.182.428,3.619,1.309,4.243,2.615a3.954,3.954,0,0,1,0,3.422c-.616,1.295-2.051,2.18-4.264,2.633a1.351,1.351,0,0,1-.262.026,1.289,1.289,0,0,1-.257-2.552c1.316-.268,2.208-.71,2.446-1.212a1.4,1.4,0,0,0,0-1.207c-.243-.506-1.132-.944-2.439-1.2a17.509,17.509,0,0,0-2.627-.38,1.289,1.289,0,0,1-1.2-1.374,1.307,1.307,0,0,1,1.378-1.2A20.309,20.309,0,0,1,31.867,22.272ZM15.1,23.058c-3.239,0-13.1,0-13.1,6.127a4.927,4.927,0,0,0,3.146,4.558,12.7,12.7,0,0,0,2.891.946,1.29,1.29,0,1,0,.538-2.522,9.972,9.972,0,0,1-2.291-.741c-1.5-.736-1.7-1.584-1.7-2.24,0-2.933,5.715-3.547,10.508-3.547,6.972,0,10.506,1.183,10.506,3.513,0,2.932-5.713,3.545-10.506,3.545a1.29,1.29,0,1,0,0,2.579c3.238,0,13.094,0,13.094-6.125C28.189,23.689,20.717,23.058,15.1,23.058Z" transform="translate(-2 -2.5)" fill="#130f26" fillRule="evenodd"/></svg>);
      case "스터디방" : return(<svg xmlns="http://www.w3.org/2000/svg" width="39.01" height="29.75" viewBox="0 0 39.01 29.75"><g id="그룹_1" data-name="그룹 1" transform="translate(-0.995 -4)"><path id="패스_40" data-name="패스 40" d="M10,17H25.857" transform="translate(2.571 3.857)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/><path id="패스_41" data-name="패스 41" d="M6,14.25V10.286A5.286,5.286,0,0,1,11.286,5H27.143a5.286,5.286,0,0,1,5.286,5.286V14.25" transform="translate(1.286)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/><path id="패스_42" data-name="패스 42" d="M12.571,23.893V17.286a5.286,5.286,0,1,0-5.286,5.286v6.607A1.321,1.321,0,0,0,8.607,30.5H32.393a1.321,1.321,0,0,0,1.321-1.321V22.571a5.286,5.286,0,1,0-5.286-5.286v6.607" transform="translate(0 2.25)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></g></svg>);
      case "북마크" : return(<svg xmlns="http://www.w3.org/2000/svg" width="26.576" height="33.219" viewBox="0 0 26.576 33.219"><path id="패스_38" data-name="패스 38" d="M23.144,2H11.689C6.964,2,4,5.3,4,10.591V32.434a2.754,2.754,0,0,0,2.721,2.785,2.7,2.7,0,0,0,1.3-.337l9.322-5.175,10.854,5.2a1.177,1.177,0,0,0,.921,0,1.217,1.217,0,0,0,.654-.664,1.26,1.26,0,0,0-.53-1.466l-10.782-5.16a2.3,2.3,0,0,0-2.262,0l-9.336,5.16a.351.351,0,0,1-.344,0,.354.354,0,0,1-.158-.308V10.591c.014-3.914,1.933-6.143,5.37-6.143H23.187c4.41,0,5.055,3.665,5.055,5.864v1h-12.4a1.177,1.177,0,0,0-.828.387,1.233,1.233,0,0,0-.317.874,1.188,1.188,0,0,0,1.145,1.173H28.2V26.57a1.189,1.189,0,1,0,2.377.015V10.312C30.576,5.181,27.74,2,23.144,2Z" transform="translate(-4 -2)" fill="#130f26"/></svg>);
      case "좋아요" : return(<svg xmlns="http://www.w3.org/2000/svg" width="28" height="26.6" viewBox="0 0 28 26.6"><path id="패스_39" data-name="패스 39" d="M23.729,2.924a8.691,8.691,0,0,1,5.2,4.468,11.06,11.06,0,0,1,.469,8.344,17.526,17.526,0,0,1-4.151,6.67,33.413,33.413,0,0,1-3.941,3.461l-.074.063a1.014,1.014,0,0,1-1.408-.277,1.047,1.047,0,0,1-.18-.783,1.034,1.034,0,0,1,.427-.677,32.67,32.67,0,0,0,3.706-3.259,15.325,15.325,0,0,0,3.706-5.852,8.883,8.883,0,0,0-.42-6.72,6.692,6.692,0,0,0-3.99-3.423,7.059,7.059,0,0,0-6.461,1.145,1.022,1.022,0,0,1-1.235,0A7.046,7.046,0,0,0,8.918,4.937a6.69,6.69,0,0,0-4.027,3.41,8.961,8.961,0,0,0-.4,6.7A15.374,15.374,0,0,0,8.2,20.882a46.252,46.252,0,0,0,8.054,6.292,1.068,1.068,0,0,1,.4,1.173,1.041,1.041,0,0,1-.97.752.988.988,0,0,1-.568-.176,48.027,48.027,0,0,1-8.388-6.557A17.309,17.309,0,0,1,2.568,15.7a11.124,11.124,0,0,1,.519-8.306,8.691,8.691,0,0,1,5.2-4.468,9.191,9.191,0,0,1,7.721,1.032A9.191,9.191,0,0,1,23.729,2.924Zm-1.013,9.64a2.761,2.761,0,0,0-1.9-2.517,1.067,1.067,0,0,1-.436-1.227A1.038,1.038,0,0,1,21.444,8.1a4.852,4.852,0,0,1,3.323,4.216,1.046,1.046,0,0,1-.207.769,1.008,1.008,0,0,1-.683.389A1.041,1.041,0,0,1,22.716,12.564Z" transform="translate(-2 -2.5)" fill="#130f26" fillRule="evenodd"/></svg>);
      case "일정" : return(<svg xmlns="http://www.w3.org/2000/svg" width="32.628" height="36.254" viewBox="0 0 32.628 36.254"><path id="패스_43" data-name="패스 43" d="M27.384,3.332V5.208c5.454.529,8.244,3.543,8.244,8.963V29.163c0,6.029-3.436,9.091-10.2,9.091H13.2C6.436,38.254,3,35.191,3,29.163V14.171c0-3.608,1.229-6.189,3.751-7.7a1.243,1.243,0,0,1,1.328-.049,1.292,1.292,0,0,1-.13,2.294c-1.671.994-2.459,2.726-2.459,5.451v.481h23a1.267,1.267,0,0,1,0,2.533h-23V29.163c0,4.6,2.238,6.51,7.708,6.542H25.43c5.391,0,7.692-1.956,7.692-6.558V14.155c0-4.008-1.75-5.948-5.737-6.413V8.96a1.259,1.259,0,0,1-2.506-.1V3.22a1.276,1.276,0,0,1,.4-.888,1.233,1.233,0,0,1,.9-.331A1.29,1.29,0,0,1,27.384,3.332ZM13.348,9.781a1.234,1.234,0,0,1-.891.365,1.257,1.257,0,0,1-1.214-1.283V3.332a1.259,1.259,0,0,1,2.506,0V5.08h7.125a1.267,1.267,0,0,1,0,2.533H13.718V8.88A1.278,1.278,0,0,1,13.348,9.781Zm13.563,11.46a1.6,1.6,0,1,0,1.576,1.6,1.617,1.617,0,0,0-.467-1.139,1.562,1.562,0,0,0-1.125-.464Zm-9.142,1.6a1.577,1.577,0,1,1,1.576,1.6A1.59,1.59,0,0,1,17.769,22.845Zm-5.974-1.6a1.6,1.6,0,1,0,1.576,1.6,1.618,1.618,0,0,0-.467-1.139,1.562,1.562,0,0,0-1.125-.464Zm13.54,8.1a1.59,1.59,0,0,1,1.576-1.6H26.9a1.563,1.563,0,0,1,1.125.464,1.617,1.617,0,0,1,.467,1.139,1.577,1.577,0,1,1-3.153,0Zm-5.99-1.6a1.6,1.6,0,1,0,1.576,1.6A1.59,1.59,0,0,0,19.346,27.735Zm-9.126,1.6a1.59,1.59,0,0,1,1.576-1.6H11.78A1.563,1.563,0,0,1,12.9,28.2a1.618,1.618,0,0,1,.467,1.139,1.576,1.576,0,1,1-3.152,0Z" transform="translate(-3 -2)" fill="#130f26" fillRule="evenodd"/></svg>);
      case "검색" : return(<svg xmlns="http://www.w3.org/2000/svg" width="22.763" height="22.763" viewBox="0 0 22.763 22.763"><path id="패스_36" data-name="패스 36" d="M24.484,23.177l-3.912-3.825-.092-.139a.922.922,0,0,0-1.294,0A9.233,9.233,0,0,1,7.215,19.6,8.74,8.74,0,0,1,5.273,8.044,9.191,9.191,0,0,1,16.742,4.666a8.811,8.811,0,0,1,4.91,10.682.887.887,0,0,0,.207.878.935.935,0,0,0,.881.264.914.914,0,0,0,.674-.614,10.623,10.623,0,0,0-5.69-12.8A11.1,11.1,0,0,0,3.922,6.65,10.534,10.534,0,0,0,5.47,20.528a11.141,11.141,0,0,0,14.267.587L23.2,24.5a.932.932,0,0,0,1.294,0,.892.892,0,0,0,0-1.275Z" transform="translate(-2 -2)" fill="#130f26"/></svg>);
      case "설정" : return(<svg xmlns="http://www.w3.org/2000/svg" width="25.65" height="27" viewBox="0 0 25.65 27"><path id="패스_35" data-name="패스 35" d="M11.2,8.581a3.657,3.657,0,0,1-3.578-.023L7.57,8.51a1.019,1.019,0,0,1-.34-1.423,1.073,1.073,0,0,1,1.457-.332,1.545,1.545,0,0,0,.729.2,1.5,1.5,0,0,0,1.066-.381,1.433,1.433,0,0,0,.476-1.006A3.6,3.6,0,0,1,14.492,2h1.664A3.6,3.6,0,0,1,19.8,5.557a1.34,1.34,0,0,0,.194.711,1.465,1.465,0,0,0,.894.677A1.5,1.5,0,0,0,22.008,6.8a3.692,3.692,0,0,1,4.857,1.281,1.042,1.042,0,0,1-.389,1.411,1.083,1.083,0,0,1-1.445-.368A1.5,1.5,0,0,0,23.016,8.6a3.719,3.719,0,0,1-3.569-.038,3.545,3.545,0,0,1-1.822-3,1.417,1.417,0,0,0-.413-1.045,1.487,1.487,0,0,0-1.057-.437H14.492a1.5,1.5,0,0,0-1.061.436,1.428,1.428,0,0,0-.421,1.046A3.485,3.485,0,0,1,11.2,8.581Zm1.814,16.9a1.465,1.465,0,0,0,1.481,1.435l-.012.024a1.061,1.061,0,0,1,.915.516,1.01,1.01,0,0,1,0,1.032,1.061,1.061,0,0,1-.915.516,3.6,3.6,0,0,1-3.643-3.557,1.339,1.339,0,0,0-.194-.712A1.5,1.5,0,0,0,8.627,24.2,3.692,3.692,0,0,1,3.77,22.917l-.826-1.411a3.511,3.511,0,0,1,1.311-4.743,1.488,1.488,0,0,0,.534-.522,1.408,1.408,0,0,0,.241-1.147,1.438,1.438,0,0,0-.714-.94A3.511,3.511,0,0,1,3,9.411a1.058,1.058,0,0,1,.674-.441,1.077,1.077,0,0,1,.8.156,1,1,0,0,1,.3,1.375,1.417,1.417,0,0,0,.546,1.957,3.492,3.492,0,0,1-.049,6.036,1.417,1.417,0,0,0-.546,1.957l.838,1.411a1.44,1.44,0,0,0,.894.681,1.474,1.474,0,0,0,1.122-.159,3.651,3.651,0,0,1,5.428,3.095Zm13.369-8.727a1.44,1.44,0,0,1-.687-.876,1.406,1.406,0,0,1,.152-1.093,1.49,1.49,0,0,1,.534-.522,1.018,1.018,0,0,0,.364-1.411,1.1,1.1,0,0,0-1.433-.391A3.511,3.511,0,0,0,24,17.2a3.47,3.47,0,0,0,1.324,1.411,1.428,1.428,0,0,1,.686.869,1.394,1.394,0,0,1-.152,1.087l-.826,1.411a1.513,1.513,0,0,1-.9.676,1.475,1.475,0,0,1-1.117-.154,3.72,3.72,0,0,0-3.574.042,3.545,3.545,0,0,0-1.817,3.006,1.072,1.072,0,0,0,2.125,0,1.417,1.417,0,0,1,.729-1.259,1.488,1.488,0,0,1,1.481.014,3.692,3.692,0,0,0,4.857-1.281l.826-1.411A3.511,3.511,0,0,0,26.379,16.751Zm-11.062-5.7A4.568,4.568,0,0,0,11.1,13.8a4.383,4.383,0,0,0,1,4.86,4.646,4.646,0,0,0,4.98.959,4.458,4.458,0,0,0,2.81-4.127,4.395,4.395,0,0,0-1.338-3.148A4.61,4.61,0,0,0,15.317,11.047Zm0,6.83a2.372,2.372,0,1,1,2.429-2.372A2.4,2.4,0,0,1,15.317,17.877Z" transform="translate(-2.5 -2)" fill="#130f26" fillRule="evenodd"/></svg>);
      case "메세지" : return(<svg xmlns="http://www.w3.org/2000/svg" width="27.462" height="27.462" viewBox="0 0 27.462 27.462"><path id="패스_6" data-name="패스 6" d="M15.74,2a13.731,13.731,0,0,1-.016,27.462,13.627,13.627,0,0,1-2.949-.323,1.029,1.029,0,1,1,.446-2.008A11.675,11.675,0,1,0,15.739,4.056h-.013A11.677,11.677,0,0,0,5.377,21.129l.264.515a2.7,2.7,0,0,1,.185,2.036A23.505,23.505,0,0,0,5.1,25.922c.771-.232,1.713-.575,2.394-.823l.279-.1a1.028,1.028,0,0,1,.7,1.933l-.276.1-.047.017h0a32.09,32.09,0,0,1-3.3,1.069,1.062,1.062,0,0,1-.244.025,1.657,1.657,0,0,1-1.227-.471A1.8,1.8,0,0,1,2.909,26.3a1.05,1.05,0,0,1,.027-.2,24.048,24.048,0,0,1,.947-3.083.645.645,0,0,0-.068-.425l-.265-.514A13.734,13.734,0,0,1,15.725,2ZM8.046,15.73a1.632,1.632,0,1,1,1.632,1.632A1.634,1.634,0,0,1,8.046,15.73Zm9.311,0a1.632,1.632,0,1,0-1.632,1.633A1.634,1.634,0,0,0,17.358,15.729ZM21.771,14.1a1.633,1.633,0,1,1-1.632,1.633A1.634,1.634,0,0,1,21.771,14.1Z" transform="translate(-2 -2)" fill="#130f26" fillRule="evenodd"/></svg>);
      case "알림" : return(<svg xmlns="http://www.w3.org/2000/svg" width="28.937" height="34.043" viewBox="0 0 28.937 34.043"><path id="패스_5" data-name="패스 5" d="M31.289,17.846a6.909,6.909,0,0,1,1.148,3.49l-.045.315a7.047,7.047,0,0,1-1.6,4.688,8.316,8.316,0,0,1-5.316,2.621,69.212,69.212,0,0,1-15.1,0,8.224,8.224,0,0,1-5.225-2.621A6.944,6.944,0,0,1,3.5,21.68v-.21A7.15,7.15,0,0,1,4.74,17.891l.121-.15a6.525,6.525,0,0,0,1.51-3V11.66a1.3,1.3,0,0,1,2.492.27v3.085a.773.773,0,0,1,0,.165,8.959,8.959,0,0,1-2.084,4.164,4.3,4.3,0,0,0-.664,2.127v.33a4.38,4.38,0,0,0,1,2.921A5.652,5.652,0,0,0,10.645,26.4a68.132,68.132,0,0,0,14.618,0,5.666,5.666,0,0,0,3.609-1.752,4.335,4.335,0,0,0,.951-2.831V21.47a4.465,4.465,0,0,0-.649-2.142,8.964,8.964,0,0,1-2.2-4.164.784.784,0,0,1,0-.165V11.9c-.438-4.523-4.983-7.324-8.94-7.324a9.8,9.8,0,0,0-4.8,1.243,1.308,1.308,0,0,1-1.322.01,1.283,1.283,0,0,1,.053-2.256A12.341,12.341,0,0,1,17.909,2c5.225,0,11.085,3.684,11.749,9.6v3.085a6.391,6.391,0,0,0,1.51,3A1.143,1.143,0,0,1,31.289,17.846ZM18.4,33.372a3.373,3.373,0,0,0,2.216-1.328h.015a1.31,1.31,0,0,1,1.835-.172,1.285,1.285,0,0,1,.174,1.82,5.942,5.942,0,0,1-9.469,0,1.285,1.285,0,0,1,.174-1.82,1.311,1.311,0,0,1,1.835.172,3.5,3.5,0,0,0,.71.7A3.388,3.388,0,0,0,18.4,33.372Z" transform="translate(-3.5 -2)" fill="#130f26" fillRule="evenodd"/></svg>);
      default : return(false);
    }
  }

  const NavItem = (props)=>{
    if(props.name === "홈"){
      return(
        <li className="select">
          <NavIcon name={props.name} />
          <a href="#!">{props.name}</a>
        </li>
      );
    }else{
      return(
        <li>
          <NavIcon name={props.name} />
          <a href="#!">{props.name}</a>
        </li>
      );
    }
  }

  const ContentHeaderNav = (props)=>{
    if(props.name ==="토글") {
      return(<div id="toggle" onClick={DarkModeOn}><div id="toggle_icon"></div></div>);
    }else return(<a href="#!"><NavIcon name={props.name}/></a>);
  }

  const DarkModeOn = ()=>{
    let status = document.querySelector("html").getAttribute('color-theme');
    if(status === "light") document.querySelector("html").setAttribute('color-theme','dark');
    else document.querySelector("html").setAttribute('color-theme','light');
  }
  
  return (
    <header>
      <a href="#!" id="logo"><Logo /></a>

      <nav>
        <ul>
          <NavItem name="홈"/>
          <NavItem name="채팅"/>
          <NavItem name="커뮤니티"/>
          <NavItem name="친구"/>
          <NavItem name="스터디방"/>
          <NavItem name="북마크"/>
          <NavItem name="좋아요"/>
          <NavItem name="일정"/>
        </ul>
      </nav>

      <div id="content_header">
        <div id="content_header_nav">
          <ContentHeaderNav name="검색" />
          <ContentHeaderNav name="설정" />
          <ContentHeaderNav name="메세지" />
          <ContentHeaderNav name="알림" />
          <ContentHeaderNav name="토글" mode="light"/>
        </div>
        <div id="header_user">
          <div id="header_user_img"></div>
        </div>
      </div>
    </header>
  );
  
}
export default App;
