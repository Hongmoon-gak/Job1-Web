import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
// import { BaseUrl } from "../API/Api";
import { styled } from "styled-components";

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

function SignUp(){
  return(
    <div>fdfd</div>
  )
/*  const [registerData, setRegisterData] = useState({
    id: "",
    pw: "",
    confirmPw: "",
    nickname: "",
    name: "",
    emailId: "",
    platformAddress: "",
  });
  const { id, pw, confirmPw, nickname, name, emailId, platformAddress } = registerData;

  const onChange = (event) => {
    const { name, value } = event.target;
    setRegisterData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  }

  const [checkId, setCheckId] = useState(false);
  const [checkNickname, setCheckNickname] = useState(false);
  const onCheckId = async (event) => {
    event.preventDefault();
    // 아이디 중복 확인 로직
    try{
      const res = await axios.post(`${BaseUrl}/auth/api/check/id`, { id });
      
      if(res.status === 200){
        setCheckId(true);
        alert("사용 가능한 아이디입니다.")
      } else{
        alert("중복된 아이디입니다. 다른 닉네임을 사용해주세요.")
      }
    } catch(error){
      alert("오류가 발생했습니다. 다시 시도해주세요.")
    }
  }

  const onCheckNickname = async (event) => {
    event.preventDefault();
    // 닉네임 중복 확인 로직
    // 중복 확인 로직은 데이터만 넘기고 백에서 성공시 200 넘겨주기로 함
    // 성공시 set 통해서 true값 저장 후 submit함수에서 반영
    try{
      const res = await axios.post(`${BaseUrl}/auth/api/check/nickname`, { nickname });
      
      if(res.status === 200){
        setCheckNickname(true);
        alert("사용 가능한 닉네임입니다.")
      } else{
        alert("중복된 닉네임입니다. 다른 닉네임을 사용해주세요.")
      }
    } catch(error){
      alert("오류가 발생했습니다. 다시 시도해주세요.")
    }
  }

  const navigation = useNavigate();
  const handleSubmit = async (event) => { // 폼 데이터를 처리하는 로직
    event.preventDefault();

    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/; // 비밀번호 정규식
    const fullEmail = `${emailId}@${platformAddress}`;

    // 유효성 검사
    if(id.length < 6 || id.length > 20){
      return alert('아이디는 6-20자로 입력해주세요.')
    }
    if (!passwordPattern.test(pw)) {
      return alert("비밀번호는 문자와 숫자를 포함하여 8-20자로 입력해주세요.");
    }
    if(pw !== confirmPw){
      return alert('비밀번호 확인이 올바르지 않습니다.')
    }
    if (!id || !pw || !confirmPw || !nickname || !name || !emailId || !platformAddress) {
      alert("필수정보(*)를 입력해주세요.");
      return;
    }
    if(!checkId){
      alert("아이디 중복확인을 해주세요.")
    }
    if(!checkNickname){
      alert("닉네임 중복확인을 해주세요.")
    }

    try{
      const res = await axios.post(`${BaseUrl}/auth/signup`, {
        id,
        pw,
        nickname,
        name,
        email: fullEmail,
      });
    
      if(res.status === 200){
        alert("회원가입이 완료되었습니다!");
        navigation('/home');
      } else{
        alert("회원가입에 실패했습니다. 다시 시도해주세요.")
      }
    } catch(error){
      alert("오류가 발생했습니다. 다시 시도해주세요.")
    }
  };

  return(
    <SignUpContainer>
        <form onSubmit={handleSubmit}>
          <div>
            <input 
              name="id"
              value={id}
              onChange={onChange}
              placeholder="아이디 입력(6-20자)"
            />
            <button onClick={onCheckId}>중복 확인</button>
          </div>
          <input 
            name="pw"
            value={pw}
            onChange={onChange}
            type="password"
            placeholder="비밀번호 입력(문자, 숫자 포함 8-20자"
          ></input>
          <input 
            name="confirmPw"
            value={confirmPw}
            onChange={onChange}
            type="password"
            placeholder="비밀번호 재입력"
          />
          <div>
            <input 
              name="nickname"
              value={nickname}
              onChange={onChange}
              placeholder="닉네임 입력"
            />
            <button onClick={onCheckNickname}>중복 확인</button>
          </div>
          <input 
            name="name"
            value={name}
            onChange={onChange}
            placeholder="이름 입력"
          />
          <div>
            <input
              name="emailId"
              value={emailId}
              onChange={onChange}
              placeholder="이메일 입력"
            />
            <p> @ </p>
            <input 
              name="platformAddress"
              value={platformAddress}
              onChange={onChange}
              placeholder="(직접 입력)"
            />
          </div>
          <button type="submit">가입하기</button>
        </form>
    </SignUpContainer>
  )*/
}

export default SignUp;