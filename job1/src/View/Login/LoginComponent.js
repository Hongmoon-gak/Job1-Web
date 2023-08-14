import React from 'react';
import { KAKAO_AUTH_URL } from './KakaoLoginData';

function LoginComponent(){
  return(
    <div>
      <a href={KAKAO_AUTH_URL}>
        <img src='/Images/kakao_login.png' alt='kakao' width='330'/>
      </a>
    </div>
  );
}

export default LoginComponent