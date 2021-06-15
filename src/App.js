import React from 'react';
//import axios from 'axios';

function App() {
  const StudyItem = (props) => {
    return(
      <div className="study_item">
        <div className="study_img"></div>
        <div className="study_info">
          <h5 className="study_title">{props.title}</h5>
          <p className="study_subTitle">{props.subTitle}</p>
          <div className="study_mainHash">{props.mainHash}</div>
        </div>
      </div>
    );
  }

  const ContentSection = (props) =>{
    return(
      <section>
        <div className="content_header">
          <h5 className="content_title">{props.title}</h5>
          <svg xmlns="http://www.w3.org/2000/svg" width="16.734" height="15.749" viewBox="0 0 16.734 29.749">
            <path id="패스_223" data-name="패스 223" d="M7.954,4.451a1.513,1.513,0,0,0,0,2.165L17,15.475l.16.136a1.575,1.575,0,0,0,2.041-.143,1.509,1.509,0,0,0,0-2.163L10.154,4.445l-.16-.136A1.575,1.575,0,0,0,7.954,4.451Zm-.136,26.84A1.514,1.514,0,0,0,7.954,33.3a1.574,1.574,0,0,0,2.2,0L23.776,19.958l.14-.156A1.509,1.509,0,0,0,23.78,17.8a1.572,1.572,0,0,0-2.2,0L7.958,31.135Z" transform="translate(-7.5 -4)" fill="#130f26" fill-rule="evenodd"/>
          </svg>
        </div>
        <div className="content_body">
          <StudyItem title="집에가고싶은 스터디" mainHash="학교" subTitle="이제 마지막 교시.." />
          <StudyItem title="집에가고싶은 스터디" mainHash="학교" subTitle="이제 마지막 교시.." />
          <StudyItem title="집에가고싶은 스터디" mainHash="학교" subTitle="이제 마지막 교시.." />

        </div>
      </section>
    );
  }

  return(
    <div id="content">
      <ContentSection title="신규개설"/>
      <ContentSection title="추천스터디"/>
      <ContentSection title="최신 스터디 소식"/>
    </div>
  );
  
}
export default App;
