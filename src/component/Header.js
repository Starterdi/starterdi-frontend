import React from 'react';
import styled from 'styled-components';
import LogoSvg from '../svg/Logo';
import HomeIcon from '../svg/HomeIcon';
import ChatIcon from '../svg/ChatIcon';
import CommunityIcon from '../svg/CommunityIcon';
import FriendIcon from '../svg/FriendIcon';
import AlertIcon from '../svg/AlertIcon';
import BookMarkIcon from '../svg/BookMarkIcon';
import CalendarIcon from '../svg/CalendarIcon';
import GoodIcon from '../svg/GoodIcon';
import MessageIcon from '../svg/MessageIcon';
import SettingIcon from '../svg/SettingIcon';
import StudyRoomIcon from '../svg/StudyRoomIcon';
import SearchIcon from '../svg/SearchIcon';
import SunIcon from '../svg/SunIcon';
import MoonIcon from '../svg/MoonIcon';

const Head = styled.header`
  background-color:${(props)=>(props.mod === "light" ? "#ffffff" : "#1E1E1E")};
  transition : 0.3s all;
`;

const Logo = styled.a`
    display : inline-block;
    width : 250px;
    margin : 2em;
    svg{
      fill : ${(props)=>(props.mod === "light" ? "#000" : "#f5f5f5")};
      transition : 0.3s;
    }
`;

const NavLi = styled.li`
    > a{font-size: 1.3em;font-weight: bold;color:${(props)=>(props.mod === "light" ? "#333333" : "#f5f5f5")};}
    svg {
        > path{fill: ${(props)=>(props.mod === "light" ? "#000" : "#f5f5f5")};}
        > g > path{stroke: ${(props)=>(props.mod === "light" ? "#000" : "#f5f5f5")};}
    }
    
    &.select{
        &::after {
          background-color: ${(props)=>(props.mod === "light" ? "#E8A2A8" : "#f5f5f5")};
        }
    }
`;

const ContentHeader = styled.div`background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0));`;

const Toggle = styled.div`
  border : 3px solid ${(props)=>(props.mod === "light" ? "#333333" : "#ffffff")};
  #toggle_icon {
    background-color : ${(props)=>(props.mod === "light" ? "#333333" : "#ffffff")};
    right : ${(props)=>(props.mod === "light" ? "2.5px" : "32.5px")};
  }
`;

const HeaderUserImg = styled.div`
  border : 3px solid ${(props)=>(props.mod === "light" ? "#333333" : "#f5f5f5")};
  &::after{
    border : 2px solid ${(props)=>(props.mod === "light" ? "#333333" : "#f5f5f5")};
  }
`;

const NavItem = (props)=>{
  return(
    <NavLi mod={props.mod} className={props.select}>
      {props.icon}
      <a href="#!">{props.name}</a>
    </NavLi>
  );
}

const ContentHeaderNavItem = styled.a`> svg > path{fill:${(props)=>(props.mod === "light" ? "#333333" : "#ffffff")};}`;
const ToggleIcon = styled.div`
  width : 20px;
  height : 20px;
  position : relative;
  overflow : hidden;
  margin : auto 0;
  > svg{
    position : absolute;
    top : 0;
    left : 0;
    width : 20px;
    height : 20px;
    transition:0.3s all;
  }

  >svg:first-child{top:${(props)=>(props.mod === "light" ? "0" : "-20px")}};}
  >svg:last-child{top:${(props)=>(props.mod === "light" ? "20px" : "0")}};}

`;

const ContentHeaderNav = (props)=>{
  const changeMod = () =>{props.changeMod();}
  if(props.name === "토글") return(<Toggle mod={props.mod} id="toggle" onClick={changeMod}><div id="toggle_icon"></div></Toggle>);
  else if(props.name === "검색") return(<div id="search_wrap"><div id="search"><input type="text" id="search_input" /><ContentHeaderNavItem mod={props.mod} href="#!">{props.icon}</ContentHeaderNavItem></div></div>);
  else return(<ContentHeaderNavItem mod={props.mod} href="#!">{props.icon}</ContentHeaderNavItem>);
}

const Header = (props) =>{
  const changeMod = () =>{props.changeMod();}
  const NavItemList = [{key : "홈",link : "/",icon : <HomeIcon/>},{key : "채팅",link : "/chat",icon : <ChatIcon/>},{key : "커뮤니티",link : "/community",icon : <CommunityIcon />},{key : "친구",link : "/friend",icon : <FriendIcon />},{key : "스터디방",link : "/studyroom",icon : <StudyRoomIcon />},{key : "북마크",link : "/bookmark",icon : <BookMarkIcon />},{key : "좋아요",link : "/good",icon : <GoodIcon />},{key : "일정",link : "/calendar",icon : <CalendarIcon />}];
  const mod = props.mod;

  return (
    <Head mod={mod}>
      <Logo href="#!" id="logo" mod={mod}><LogoSvg/></Logo>

      <nav>
        <ul>
          {NavItemList.map(navItems=>(<NavItem key={navItems.key} mod={mod} select={navItems.link === "/" ? "select" : ""} name={navItems.key} icon={navItems.icon} />))}
        </ul>
      </nav>

      <ContentHeader id="content_header" mod={mod}>
        <div id="content_header_nav">
          <ContentHeaderNav icon={<SearchIcon/>} mod={mod} name="검색" />          
          <ContentHeaderNav icon={<SettingIcon/>} mod={mod} name="설정" />
          <ContentHeaderNav icon={<MessageIcon/>} mod={mod} name="메세지" />
          <ContentHeaderNav icon={<AlertIcon/>} mod={mod} name="알림" />
          <ContentHeaderNav icon="" mod={mod} changeMod={changeMod} name="토글" mode="light"/>
          <ToggleIcon mod={mod}>
            <SunIcon/>
            <MoonIcon/>
          </ToggleIcon>
        </div>
        <HeaderUserImg id="header_user" mod={mod} >
          <div id="header_user_img"></div>
        </HeaderUserImg>
      </ContentHeader>
    </Head>
  );
}

export default Header;
