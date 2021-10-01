import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import HomeToggleBackground from '../svg/HomeToggleBackground';
import HomeToggle from '../svg/HomeToggle';
import DescIcon from '../svg/DescIcon';
import AscIcon from '../svg/AscIcon';
import ErrorCharacter from '../image/ErrorCharacter.png';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';

const ContentLeftHeader = styled.div`
  display : flex;
  align-items: center;
  justify-content : center;
  padding : 0 1em;
`;

const ContentSubTitle = styled.p`
  color : #aaa;
  font-weight :bold;
`;

const HomeContentStyled = styled.div`
 background-color : ${(props)=>(props.mod === "light" ? "#ffffff" : "#1F1F1F")}};
 transition : 0.3s;
 color : ${(props)=>(props.mod === "light" ? "#333" : "#f5f5f5")};
 svg > path {
  transition : 0.3s;
 }
`;

const ContentSort = styled.div`
  display : flex;
  justify-content : flex-start;
  align-items : center;
  margin-left : 2em
`;

const ContentSortItem = styled.button`
  font-weight : bold;
  transition : 0.3s all;
  color : ${(props)=>(props.mod === "light" ? props.select ? "#333" : "#555" : props.select ? "#fff" : "#aaa")};
  border : none;
  background-color : rgba(0,0,0,0);
  margin : 0 1em;
  cursor : pointer;
  font-size : 1em;
  border-bottom : 3px solid ${(props)=>(props.select ? "#E8A2A8" : "rgba(0,0,0,0)" )};
`;

const ContentRightHeader = styled.div`
  display : flex;
  justify-content : flex-end;
  align-items : center;
  height : 100%;
`;

const MakeStudyBtn = styled.button`
  padding : 0.5em 2em;
  border : 1px solid ${(props)=>(props.mod === "light" ? "#cbcbcb" : "#fff")};
  border-radius : 10px;
  color : ${(props)=>(props.mod === "light" ? "#333" : "#fff")};
  font-size : 1em;
  font-weight : bold;
  background-color :rgba(0,0,0,0);
  transition : 0.3s;
  cursor : pointer;
  :hover{opacity : 0.5;}
  margin-left : 1em;
`;

const HomeFindToggle = styled.div`
 margin : 0 1em;
 display : flex;
 justify-content:center;
 align-items : center;
`;

const HomeFindToggleTitle = styled.p`
 margin-right : 0.5em;
`;

const HomeFindToggleWrap = styled.div`
 position : relative;
 display : flex;
 justify-content:center;
 align-items :center;
 > svg{cursor : pointer;}
 > svg:last-child{
   position:absolute;
   left : ${(props)=>props.accept === "on" ? "3px" : "26px"};
   top : 2.5px;
   transition : 0.3s;
 }
`;

const HomeContentSortWrap = styled.div`
 display : flex;
 justify-content : center;
 align-items : center;
 cursor : pointer;
`;

const HomeContentSortTitle = styled.p`
 margin-right : 0.5em;
`;

const ErrorTitle = styled.p`
 font-size : 1.5em;
 font-weight :bold;
 color : #aaa;
`;

const ErrorMsg = styled.div`
 display : flex;
 flex-direction : column;
 justify-content : center;
 align-items : center;
 margin : 0 auto;
 opacity : 0.5;
 height : 100%;
 width : 100%;
`;

const HomeContentItem = styled.div`
 width : 300px;
 height : 250px;
 margin : 20px 30px;
 border-radius : 20px;
 overflow : hidden;
 display : flex;
 flex-direction : column;
 border : 1px solid ${(props)=>(props.mod === "light" ? "#ddd" : "#fff")};
 cursor : pointer;
 transition : 0.3s;
 :hover{
   opacity : 0.5;
 }
`;

const ContentImgWrap = styled.div`
 width : 100%;
 height : 160px;
 overflow : hidden;
 > img{
  width : 100%;
  min-height : 100%;
}
`;

const ContentInfoWrap = styled.div`
 width : 100%;
 height : 90px;
 position : relative;
 border-top : 1px solid ${(props)=>(props.mod === "light" ? "#ddd" : "#fff")};
 background-color : ${(props)=>(props.mod === "light" ? "#fff" : "#333")};
 display : flex;
 justify-content :center;
 align-items : center;
 transition : 0.3s;
`;

const ContentCate = styled.div`
 width : 150px;
 height : 30px;
 border-radius : 20px;
 color : #fff;
 text-align : center;
 line-height:30px;
 position : absolute;
 background-color : ${(props)=>(props.cateColor)};
 top : -15px;
`;

const ContentTitle = styled.p`
 padding : 0 0.5em;
 text-align : center;
 font-size : 1.2em;
 font-weight : bold;
 color : ${(props)=>(props.mod === "light" ? "#333" : "#fff")};
 transition : 0.3s;
`;

const HomeContent = (props) =>{
  const mod = props.mod;
  const history = useHistory();
  const [contentSection,setContentSection] = useState("전체");
  const [contentSort,setContentSort] = useState("내림차순");
  const [contentSortAccept,setContentSortAccept] = useState("on");
  const [RoomList,setRoomList] = useState([]);

  const getContentSortAccept = () =>{setContentSortAccept(contentSortAccept === "on" ? "off" : "on");}
  const getContentSort = ()=>{
    setRoomList(RoomList.reverse());
    setContentSort(contentSort === "내림차순" ? "오름차순" : "내림차순");
  }
  const getContentSection = (val)=>{
    let value = val.target.innerText;
    if(value === "최신순") RoomSort("idx");
    if(value === "인기순" || value === "전체") RoomSort("good_num");
    if(value === "조회순") RoomSort("hit");

    if(contentSort === "오름차순") RoomList.reverse();
    setContentSection(value);
  }

  const RoomSort = (key)=>{
    RoomList.sort((a,b)=>{
      if(a[key] <= b[key]) return 1;
      else return -1;
    });
  }

  const CateList = [
    {
      key : "그림",
      backgroundColor : "#59AFE8"
    },
    {
      key : "크로키",
      backgroundColor : "#F46F6F"
    },
    {
      key : "수채화",
      backgroundColor : "#81D86E"
    },
    {
      key : "패턴",
      backgroundColor : "#777777"
    },
    {
      key : "배경",
      backgroundColor : "#495E81"
    },
    {
      key : "취직",
      backgroundColor : "#F49B88"
    },
    {
      key : "코딩",
      backgroundColor : "#3AB014"
    },
    {
      key : "외국어",
      backgroundColor : "#EBC30D"
    },
    {
      key : "작곡/편곡",
      backgroundColor : "#D68EFD"
    }
  ];

  const LoadRoomList = async () =>{
    await axios.post('/api/studyListLoad')
          .then((res)=>{
            console.log(res.data);
            setRoomList(res.data);
          });
  }

  useEffect(()=>{
    LoadRoomList();
  },[]);

  const ContentHeader = (props)=>{
    return(
      <div className="content_header">
        <ContentLeftHeader>
          <h5 className="content_title">{props.title}</h5>
          <ContentSubTitle>({props.subTitle})</ContentSubTitle>
          
          <ContentSort>
            <ContentSortItem select={contentSection === "전체"} onClick={getContentSection.bind("전체")} mod={mod}>전체</ContentSortItem>
            <ContentSortItem select={contentSection === "최신순"} onClick={getContentSection.bind("최신순")} mod={mod}>최신순</ContentSortItem>
            <ContentSortItem select={contentSection === "인기순"} onClick={getContentSection.bind("인기순")} mod={mod}>인기순</ContentSortItem>
            <ContentSortItem select={contentSection === "조회순"} onClick={getContentSection.bind("조회순")} mod={mod}>조회순</ContentSortItem>
          </ContentSort>

        </ContentLeftHeader>

        <ContentRightHeader>
          <HomeFindToggle>
            <HomeFindToggleTitle>조건에 맞는 스터디방 찾기</HomeFindToggleTitle>
            <HomeFindToggleWrap accept={contentSortAccept} onClick={getContentSortAccept}>
              <HomeToggleBackground set={contentSortAccept} />
              <HomeToggle/>
            </HomeFindToggleWrap>
          </HomeFindToggle>

          <HomeContentSortWrap onClick={getContentSort}>
            <HomeContentSortTitle>{contentSort}</HomeContentSortTitle>
	      		{contentSort === "내림차순" ? <DescIcon mod={mod} /> : <AscIcon mod={mod} />}
          </HomeContentSortWrap>
          
          <Link to='/5/makeRoom'><MakeStudyBtn mod={mod}>방 만들기</MakeStudyBtn></Link>
        </ContentRightHeader>
      </div>
    );
  }

  const MakeError = (props)=>{
    return(
      <ErrorMsg>
        <img src={ErrorCharacter} alt="error" />
        <ErrorTitle>{props.title}</ErrorTitle>
      </ErrorMsg>
    );
  }

  const CateSearch = (cate) =>{
    let val = "";
    CateList.forEach(x=>{if(x.key === cate) val = x.backgroundColor;});
    return val;
  }

  const LoadRoom = async(e)=>{
    const idx = e.currentTarget.dataset.idx;
    await axios.post('/api/setStudyHit',{
      idx : idx
    })
    .then((res)=>{
      history.push(`/5/studyRoom/${idx}`);
    });
  }
  
  return(
    <HomeContentStyled id="content" mod={mod}>
      <section>
        <ContentHeader mod={mod} title="스터디방" subTitle={RoomList.length} />
        <div className="content_body">
        {
          RoomList.length ? RoomList.map(room => (
              <HomeContentItem mod={mod} key={room.idx} onClick={LoadRoom} data-idx = {room.idx}>
                <ContentImgWrap>
                  {room.banner_img ? <img src={"upload/"+room.banner_img} alt="roog img" /> : "" }             
                </ContentImgWrap>
                <ContentInfoWrap mod={mod}>
                  <ContentCate cateColor={CateSearch(room.category)}>
                    {room.category}
                  </ContentCate>
                  <ContentTitle mod={mod}>
                    {room.title}
                  </ContentTitle>
                </ContentInfoWrap>
              </HomeContentItem>
          )) : <MakeError title="관련정보를 찾을 수 없습니다!"/>
        }
        </div>
      </section>
    </HomeContentStyled>
  );
}

export default HomeContent;
