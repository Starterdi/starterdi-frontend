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
            content: '';
            position: absolute;
            width: 10px;
            height: 100%;
            top: 0;
            left:-60px;
            background-color: ${(props)=>(props.mod === "light" ? "#E8A2A8" : "#f5f5f5")};
            border-radius: 20px;
            transition: 0.3s all;
            background-color: #E8A2A8;
        }

        > a{color: #E8A2A8;}
        > svg{
            > path{fill: #E8A2A8;}
            > g > path{stroke: #E8A2A8;}
        }
    }
`;

const Toggle = styled.div`
  border : 3px solid ${(props)=>(props.mod === "light" ? "#333333" : "#ffffff")};
  #toggle_icon {
    background-color : ${(props)=>(props.mod === "light" ? "#333333" : "#ffffff")};
    right : ${(props)=>(props.mod === "light" ? "2.5px" : "32.5px")};
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

const ContentHeaderNavItem = styled.a`
  > svg > path{fill:${(props)=>(props.mod === "light" ? "#333333" : "#ffffff")};}
`;

const ContentHeaderNav = (props)=>{
  const changeMod = () =>{props.changeMod();}
  if(props.name === "토글") return(<Toggle mod={props.mod} id="toggle" onClick={changeMod}><div id="toggle_icon"></div></Toggle>);
  else return(<ContentHeaderNavItem mod={props.mod} href="#!">{props.icon}</ContentHeaderNavItem>);
}

const Header = (props) =>{
  const changeMod = () =>{props.changeMod();}
  const NavItemList = [{key : "홈",select : "select",icon : <HomeIcon/>},{key : "채팅",select : "",icon : <ChatIcon/>},{key : "커뮤니티",select : "",icon : <CommunityIcon />},{key : "친구",select : "",icon : <FriendIcon />},{key : "스터디방",select : "",icon : <StudyRoomIcon />},{key : "북마크",select : "",icon : <BookMarkIcon />},{key : "좋아요",select : "",icon : <GoodIcon />},{key : "일정",select : "",icon : <CalendarIcon />}];
  const mod = props.mod;

  return (
    <Head mod={mod}>
      <Logo href="#!" id="logo" mod={mod}><LogoSvg/></Logo>

      <nav>
        <ul>
          {NavItemList.map(navItems=>(<NavItem key={navItems.key} mod={mod} select={navItems.select} name={navItems.key} icon={navItems.icon} />))}
        </ul>
      </nav>

      <div id="content_header">
        <div id="content_header_nav">
          <div id="search_wrap">
            <div id="search">
              <input type="text" id="search_input" />
              <ContentHeaderNav icon={<SearchIcon/>} mod={mod} name="검색"/>
            </div>
          </div>
          <ContentHeaderNav icon={<SettingIcon/>} mod={mod} name="설정" />
          <ContentHeaderNav icon={<MessageIcon/>} mod={mod} name="메세지" />
          <ContentHeaderNav icon={<AlertIcon/>} mod={mod} name="알림" />
          <ContentHeaderNav icon="" mod={mod} changeMod={changeMod} name="토글" mode="light"/>
        </div>
        <div id="header_user">
          <div id="header_user_img"></div>
        </div>
      </div>
    </Head>
  );
}

export default Header;
