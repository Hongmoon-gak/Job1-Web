import KakaoLogin from 'react-kakao-login'
import styled from "styled-components";

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 200px;
    margin-bottom: 200px;
`;

const SocialKakao = () => {
  
  const kakaoClientId = 'javaScript KEY'
  const kakaoOnSuccess = async (data) => {
    console.log(data)
    const idToken = data.response.access_token
  }
  const kakaoOnFailure = (error) => {
    console.log(error);
  };
  return(
    <LoginContainer>
      <KakaoLogin
        token={kakaoClientId}
        onSuccess={kakaoOnSuccess}
        onFail={kakaoOnFailure}
      />
    </LoginContainer>
  )
}
  
    export default SocialKakao