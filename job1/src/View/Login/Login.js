import React from 'react';
import styled from "styled-components";
import { KAKAO_AUTH_URL, REST_API_KEY, REDIRECT_URI } from './KakaoLoginData';
import LoginComponent from './LoginComponent';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 250px;
  margin-bottom: 350px;
`;

function Login(){
  return(
    <LoginComponent/>
  );
}
  
export default Login