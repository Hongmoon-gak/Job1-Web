import React from 'react';
import styled from "styled-components";
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
    <LoginContainer>
      <LoginComponent/>
    </LoginContainer>
  );
}

export default Login