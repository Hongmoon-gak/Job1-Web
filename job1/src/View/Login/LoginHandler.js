import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from "axios";
import { REDIRECT_URI } from './KakaoLoginData';

function LoginHandeler(props){
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");
  
  useEffect(() => {
    const kakaoLogin = async () => {
      await axios({
        method: "GET",
        url: `${REDIRECT_URI}/?code=${code}`,
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Access-Control-Allow-Origin": "*",
        },
      }).then((res) => {
        console.log(res);
        localStorage.setItem("name", res.data.account.kakaoname);
        navigate("/owner-question")
      });
    };
    kakaoLogin();
  }, [props.history]);
  
  return(
    <div className="LoginHandeler">
      <div className="notice">
        <p>잡일 하러 가는 중...</p>
        <div className="spinner"></div>
      </div>
    </div>
  );
}

export default LoginHandeler