// 아래 정보들은 나중에 .env 파일로 gitignore 처리해야 한다고 함
// https://hymndev.tistory.com/72에서 확인 가능
export const REST_API_KEY = '17a2e0b2cef6b6e3cc52255551234b74';
export const REDIRECT_URI = 'http://localhost:3000/kakaoLogin';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;