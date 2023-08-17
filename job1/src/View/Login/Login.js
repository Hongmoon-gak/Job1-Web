import React, { useState } from 'react';
import styled from "styled-components";
import LoginComponent from './LoginComponent';
import KakaoLoginComponent from './KakaoLoginComponent';
import { useNavigate } from 'react-router-dom';

const LoginView = styled.div`
  background: #F0F4F0
  
`;

const LoginTitle = styled.p`
  color: var(--heading, #212B27);
  text-align: center;
  font-family: Karla;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.925rem;
  
  padding: 4.5rem 0 ${({bot}) => (bot ? '12.75rem' : '0')} 0;
`;

const LoginContainer = styled.div`
  width: 33.5625rem;
  height: 33.0625rem;
  border-radius: 1.875rem;
  background: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

// align-items: center 돼있어서 로그인이랑 회원가입이 안 떨어지는데 이거 처리해야 함

const LoginText = styled.p`
  color: #212B27;
  text-align: center;
  font-family: Karla;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.925rem;
  margin: 2.44rem 0rem 0rem 0rem;
`;

const LoginInput = styled.input`
  width: 23.5325rem;
  height: 3.4375rem;
  border-radius: 0.625rem;
  border: 1px solid rgba(0, 0, 0, 0.10);
  background: #FFF;
  margin: 1rem 0rem 0rem 0rem;
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

const LoginButtonGroup = styled.div`
  align-items: stretch;
  display: flex;
  justify-content: space-between;
  margin: 0 0 0.69rem 0;
`;

const LoginButton = styled.button`
  width: 12.5rem;
  height: 3.6875rem;
  background: ${({login}) => (login ? '#31892F' : '#FFF')};
  border-radius: 0.625rem;
  color: ${({login}) => (login ? '#FFF' : '#31892F')};
  border: 1px solid #31892F;
  text-align: center;
  font-family: Karla;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.7875rem;
  margin: 1.62rem ${({login}) => (login ? '0.81rem' : '0')} 0 0;
  cursor : pointer;
`;

const botDiv = styled.div`
  padding: 0 0 0 17.25rem;
`;

function Login(){
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  
  function handleLoginClick(){
    // 아이디 비번 확인 후 로그인 하는 코드
  }
  
  function handleSignUpClick(){
    navigate('/signUp');
  }
  
  console.log(id, pw);
  
  return(
    <LoginView>
      <LoginTitle>로그인</LoginTitle>
      <LoginContainer>
        <LoginText>로그인 후 이용해주세요!</LoginText>
        <LoginInput 
          value={id}
          type='text' 
          placeholder='ID'
          onChange={(e) => setId(e.target.value)}
        />
        <LoginInput 
          value={pw}
          type='password' 
          placeholder='PASSWORD'
          onChange={(e) => setPw(e.target.value)}
        />
        <LoginButtonGroup>
          <LoginButton login onClick={handleLoginClick}>로그인</LoginButton>
          <LoginButton onClick={handleSignUpClick}>회원가입</LoginButton>
        </LoginButtonGroup>  
        <LoginText>다른 방법으로 로그인 하기!</LoginText>
        <KakaoLoginComponent/>
      </LoginContainer>
      <LoginTitle bot/>
    </LoginView>
  );
}

export default Login