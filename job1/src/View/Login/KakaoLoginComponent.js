import React from 'react';
import { KAKAO_AUTH_URL } from './KakaoLoginData';

function KakaoLoginComponent(){
  return(
    <div>
      <a href={KAKAO_AUTH_URL}>
        <img src='/Images/kakao_login.png' alt='kakao' width='413px' height='68px'/>
      </a>
    </div>
  );
}

export default KakaoLoginComponent