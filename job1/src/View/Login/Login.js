import React from 'react';
import styled from "styled-components";
import { KAKAO_AUTH_URL, REST_API_KEY, REDIRECT_URI } from './KakaoLoginData';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
  margin-bottom: 200px;
`;

function Login(){
  return(
    <LoginContainer>
      <a href={KAKAO_AUTH_URL}>
        <img src='/Images/kakao_login.png' alt='kakao' width='400'/>
      </a>
    </LoginContainer>
  );
}
  
export default Login