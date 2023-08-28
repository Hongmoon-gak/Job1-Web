import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
// import { BaseUrl } from "../API/Api";
import { styled } from "styled-components";

const SignUpView = styled.div`
  background: #F0F4F0
`;

const SignUpTitle = styled.p`
  color: var(--heading, #212B27);
  text-align: center;
  font-family: Karla;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.925rem;
  
  padding: 4.5rem 0 ${({bot}) => (bot ? '12.75rem' : '0')} 0;
`;

const SignUpContainer = styled.div`
  width: 33.5625rem;
  height: 38.625rem;
  border-radius: 1.875rem;
  background: #FFF;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 auto;
`;

const SignUpText = styled.p`
  width: 33.5625rem;
  color: #212B27;
  text-align: center;
  font-family: Karla;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.925rem;
  margin: 2.13rem 0rem 0rem 0rem;
`;

const SignUpInput = styled.input`
  width: ${({isPassword}) => (isPassword ? '23.595rem' : '12.9075rem')};
  height: 3.4375rem;
  border-radius: 0.625rem;
  border: 1px solid rgba(0, 0, 0, 0.10);
  background: #FFF;
  margin: 1rem 0rem 0rem 3.87rem;
  font-family: Karla;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.7875rem;
  padding: 0rem 0rem 0rem 2.28rem;
  
  &::placeholder{
    color: #A7A7A7;
  }
`;

const DataCheck = styled.button`
  margin: 1rem 0rem 0rem 1.06rem;
  width: 9.625rem;
  height: 3.4375rem;
  border-radius: 0.625rem;
  border: 1px solid rgba(0, 0, 0, 0.10);
  background: #A7A7A7;
  justify-content: center;
  display: flex;
  color: #FFF;
  font-family: Karla;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 300;
  align-items: center;
`;

const PasswordCheck = styled.p`
  display: flex;
  width: 29.745rem;
  height: 1.5rem;
  margin: 0.56rem 0 0.44rem 0;
  flex-direction: column;
  justify-content: center;
  color: ${({correct}) => (correct ? '#31892F' : '#CC4E4F')};
  text-align: right;
  font-family: Karla;
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.7875rem;
`;

const DoneButton = styled.button`
  width: 12.5rem;
  height: 3.6875rem;
  background: #31892F;
  border-radius: 0.625rem;
  color: #FFF;
  border: 1px solid #31892F;
  text-align: center;
  font-family: Karla;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.7875rem;
  margin: 1.62rem 0 0 0;
  cursor : pointer;
  margin: 1.87rem 0 2.94rem 10.56rem;
`;

function SignUp(){
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [isMatched, setIsMatched] = useState('');
  const [isEmpty, setIsEmpty] = useState('');
  
  useEffect(()=> {
    if (pw === pwCheck && pw !== '' && pwCheck !== ''){
      setIsMatched(true);
      setIsEmpty(false);
    }
    else{
      setIsMatched(false);
      setIsEmpty(pw === '' && pwCheck === '' ? true : false);
    }
  })
  
  function handleDoneClick(){
    navigate('/login');
  }
  
  function handleIdCheck(){
  }
  
  function handleNicknameCheck(){
  }
  
  function handleEmailCheck(){
  }
  
  return(
    <SignUpView>
      <SignUpTitle>회원가입</SignUpTitle>
      <SignUpContainer>
        <SignUpText>정보를 입력해주세요!</SignUpText>
        <SignUpInput 
          value={id}
          type='text' 
          placeholder='아이디'
          onChange={(e) => setId(e.target.value)}
        />
        <DataCheck onClick={handleIdCheck}>중복 확인</DataCheck>
        <SignUpInput 
          value={pw}
          type='password' 
          placeholder='비밀번호'
          onChange={(e) => setPw(e.target.value)}
          isPassword
        />
        <SignUpInput 
          value={pwCheck}
          type='password' 
          placeholder='비밀번호 확인'
          onChange={(e) => setPwCheck(e.target.value)}
          isPassword
        />
        <PasswordCheck correct={isMatched ? 1 : 0}>
          {isMatched ? '※ 비밀번호 확인 완료' : (isEmpty ? '' : '※ 비밀번호가 다릅니다.')}
        </PasswordCheck>
        <SignUpInput 
          value={nickname}
          type='text' 
          placeholder='닉네임'
          onChange={(e) => setNickname(e.target.value)}
        />
        <DataCheck onClick={handleNicknameCheck}>중복 확인</DataCheck>
        <SignUpInput 
          value={email}
          type='text' 
          placeholder='이메일'
          onChange={(e) => setEmail(e.target.value)}
        />
        <DataCheck onClick={handleEmailCheck}>중복 확인</DataCheck>
        <DoneButton onClick={handleDoneClick}>완료</DoneButton>
      </SignUpContainer>
      <SignUpTitle bot/>
    </SignUpView>
  );
}

export default SignUp;

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