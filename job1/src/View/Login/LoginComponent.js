import React from 'react';
import styled from "styled-components";
import { KAKAO_AUTH_URL, REST_API_KEY, REDIRECT_URI } from './KakaoLoginData';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 250px;
  margin-bottom: 350px;
`;

function LoginComponent(){
  return(
    <LoginContainer>
      <a href={KAKAO_AUTH_URL}>
        <img src='/Images/kakao_login.png' alt='kakao' width='330'/>
      </a>
    </LoginContainer>
  );
}
  
export default LoginComponent