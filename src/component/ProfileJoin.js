import React,{useEffect,useRef, useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CameraIcon from '../svg/CameraIcon';
import LeftLongArrowIcon from '../svg/LeftLongArrowIcon';
import RightLongArrowIcon from '../svg/RightLongArrowIcon';
import ImageIcon from '../svg/ImageIcon';
import axios from 'axios';

const JoinBox = styled.div`
    width:700px;
    position:absolute;
    top:10%;
    right:15%;
    padding:2em 0;
`;

const JoinTitle = styled.h1`
    line-height:1.5em;
    margin-bottom : 1em;
    font-size :3em;
`;

const JoinForm = styled.div`
    margin-top : 2em;
`;

const JoinFormBox = styled.div`
    width : 450px;
    border-bottom : 3px solid #333;
    padding:1em 0.5em;
    display : flex;
    align-items : center;
    flex-wrap : wrap;
    margin : 2em 0;
    position : relative;
    transition : 0.3s;  
    svg > path{transition : 0.3s;}  
    :hover{
        border-color : #E8A2A8;
        svg > path{
            fill : #E8A2A8;
        }
    }
`;

const JoinInput = styled.input`
    border : none;
    background-color :rgba(0,0,0,0);
    width : 100%;
    margin-top : 1em;
    font-size : 1.2em;
`;

const JoinBtn = styled.button`
    border : 1px solid #aaa;
    border-radius : 20px;
    padding : 1em 2.5em;
    margin : 1em 0;
    font-weight : bold;
    background-color : rgba(0,0,0,0);
    font-size : 1.4em;
    cursor : pointer;
    transition : 0.3s ;
    :hover{opacity : 0.5}
`;

const JoinErrorMsg = styled.p`
    color : #E32121;
    position : absolute;
    bottom : -2em;
`;

const JoinOtherBox = styled.div`
    margin-top : 1em;
`;

const JoinOtherLink = styled.p`
    margin : 0.7em 0;
    transition : 0.3s;
    font-size : 1.1em;
    span {font-weight : bold;}
    :hover{
        opacity : 0.5;
    }

    svg {
        ${(props)=>(props.arrow === "left" ? "margin-right : 1em;" : "margin-left : 1em;")}
    }
`;

const JoinInputTitle = styled.p`
    font-size : 1.3em;
    font-weight : bold;
    width : 100%;
`;

const JoinInputBox = styled.div`
    width : 200px;
    margin-top : 2em;
    position : relative;
`;

const JoinProfileBox = styled.div`
    width : 200px;
    height : 200px;
    border-radius : 100%;
    border : 10px solid #E8A2A8;
    position : relative;
    display:flex;
    justify-content : center;
    align-items : center;
    overflow : hidden;

    svg{
        width : 50%;
        height : 50%;
        * { fill : #ddd; }
    }

    img {
        ${(props)=>(props.data === "width" ? "width : 90%;" : "height : 90%;")}
    }
`;

const JoinProfileAddBtn = styled.button`
    position : absolute;
    width :50px;
    height : 50px;
    display : flex;
    justify-content : center;
    align-items : center;
    border : 2px solid #333;
    border-radius : 100%;
    background-color : #fff;
    bottom : 10px;
    right : 10px;
    cursor : pointer;
    transition : 0.3s;
    overflow : hidden;
    :hover { background-color : #ddd }
`;

const JoinProfileAddInput = styled.input`
    width : 50px;
    height : 50px;
    position : absolute;
    top : 0;
    left : 0;
    opacity : 0;
    cursor:pointer;
`;

const ProfileJoin = (props) =>{
    const profileForm = useRef(null);
    const joinInfo = props.joinInfo;
    const changePath = (link)=>{props.changePath(link)};
    const changeJoinInfo = (info,type)=>{props.changeJoinInfo(info,type);};

    const [user_profile_img,setUserProfileImg] = useState(joinInfo.user_profile_img); 
    const [user_profile,setUserProfile] = useState(joinInfo.user_profile);
    const [profileSize,setProfileSize] = useState("width");

    const profileImg = useRef(null);
    const profileImgAdd = useRef(null);
    
    const makeProfile = ()=>{
        const height = profileImg.current.offsetHeight;
        const width = profileImg.current.offsetWidth;
        setProfileSize(width > height ? "height" : "width");
    }

    const addProfile = ()=>{
        const file = profileImgAdd.current.files[0];
        const fileExpReg = /^.+\.(png||jpg||jpeg||PNG||JPG||JPEG)$/g;
        const fileExp = fileExpReg.test(file.name);
        if(!fileExp) return alert("jpg, jpeg, png 형식의 파일만 업로드 가능합니다.");

        let reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
            setUserProfileImg(reader.result);
            changeJoinInfo(reader.result,"user_profile_img");
        };
    }

    const changeProfile = (e)=>{
        setUserProfile(e.target.value);
        changeJoinInfo(e.target.value,"user_profile");
    }

    const joinInfoChecking = ()=>{
        if(joinInfo.user_name === "") props.history.push("/5/join/info")
    }

    const joinProccess = async()=>{
        if(user_profile_img === "" || user_profile === "") return alert("내용을 입력해주세요!");
        await axios.post('/api/JoinProccess',{
            user_id : joinInfo.user_id,
            user_email : joinInfo.user_email,
            user_name : joinInfo.user_name,
            password : joinInfo.user_password,
            profile : joinInfo.user_profile,
            profile_img : joinInfo.user_profile_img,
            gender : joinInfo.user_gender,
            birth : joinInfo.user_birth
        })
        .then((res)=>{
            console.log(res);
            if(res) props.history.push('/5/join/success');
        });
    }

    useEffect(()=>{
        joinInfoChecking();
    });

    return(
        <JoinBox>
            <JoinTitle>회원가입</JoinTitle>
            <JoinForm ref={profileForm}>
                <JoinInputBox>
                    <JoinProfileBox>
                        {
                            user_profile_img ? <img ref={profileImg} src={user_profile_img} alt="profileSize" data={profileSize} onLoad={makeProfile} onChange={makeProfile} /> : <ImageIcon/>
                        }
                    </JoinProfileBox>
                    <JoinProfileAddBtn>
                        <CameraIcon/>
                        <JoinProfileAddInput type="file" ref={profileImgAdd} name="profileAdd" onChange={addProfile}  />
                    </JoinProfileAddBtn>
                </JoinInputBox>
                <JoinFormBox>
                    <JoinInputTitle>한줄소개</JoinInputTitle>
                    <JoinInput type="text" name="profile" onChange={changeProfile} value={user_profile} />
                    <JoinErrorMsg></JoinErrorMsg>
                </JoinFormBox>
                <JoinBtn type="button" onClick={joinProccess}>가입완료</JoinBtn>
            </JoinForm>
            <JoinOtherBox>
                <JoinOtherLink onClick={changePath.bind('link','/5/join/detail')} arrow="left" ><LeftLongArrowIcon /><Link to='/5/join/detail'><span>이전</span> 단계로 넘어가기</Link></JoinOtherLink>                
                <JoinOtherLink arrow="right"><Link to='/5/login'><span>로그인</span> 화면으로 넘어가기 <RightLongArrowIcon/></Link></JoinOtherLink>
            </JoinOtherBox>
        </JoinBox>
    );
}

export default ProfileJoin;