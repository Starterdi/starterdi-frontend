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
import SettingIcon from '../svg/SearchIcon';
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

const NavIcon = (props) =>{
  switch(props.name){
    case "홈" : return(<HomeIcon/>);
    case "채팅" : return(<ChatIcon/>);
    case "커뮤니티" : return(<CommunityIcon/>);
    case "친구" : return(<FriendIcon/>);
    case "스터디방" : return(<StudyRoomIcon/>);
    case "북마크" : return(<BookMarkIcon/>);
    case "좋아요" : return(<GoodIcon/>);
    case "일정" : return(<CalendarIcon/>);
    case "검색" : return(<SearchIcon/>);
    case "설정" : return(<SettingIcon/>);
    case "메세지" : return(<MessageIcon/>);
    case "알림" : return(<AlertIcon/>);
    default : return(false);
  }
}

const NavItem = (props)=>{
  return(
    <NavLi mod={props.mod} className={props.select}>
      <NavIcon name={props.name} />
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
  else return(<ContentHeaderNavItem mod={props.mod} href="#!"><NavIcon name={props.name}/></ContentHeaderNavItem>);
}

// const SearchOpen = ()=>{
//   document.querySelector("#search").classList.toggle("on");
// }

const Header = (props) =>{
  const changeMod = () =>{props.changeMod();}
  const mod = props.mod;

  return (
    <Head mod={mod}>
      <Logo href="#!" id="logo" mod={mod}><LogoSvg/></Logo>

      <nav>
        <ul>
          <NavItem mod={mod} select="select" name="홈"/>
          <NavItem mod={mod} name="채팅"/>
          <NavItem mod={mod} name="커뮤니티"/>
          <NavItem mod={mod} name="친구"/>
          <NavItem mod={mod} name="스터디방"/>
          <NavItem mod={mod} name="북마크"/>
          <NavItem mod={mod} name="좋아요"/>
          <NavItem mod={mod} name="일정"/>
        </ul>
      </nav>

      <div id="content_header">
        <div id="content_header_nav">
          <div id="search_wrap"><div id="search"><input type="text" id="search_input" /><ContentHeaderNav name="검색"/></div></div>
          <ContentHeaderNav mod={mod} name="설정" />
          <ContentHeaderNav mod={mod} name="메세지" />
          <ContentHeaderNav mod={mod} name="알림" />
          <ContentHeaderNav mod={mod} changeMod={changeMod} name="토글" mode="light"/>
        </div>
        <div id="header_user">
          <div id="header_user_img"></div>
        </div>
      </div>
    </Head>
  );
}

export default Header;
