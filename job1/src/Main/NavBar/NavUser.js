import { Link } from "react-router-dom";

function NavUser(){
    return(
        <div className="navuser-container">
            <Link to={'/login'} >로그인</Link>
            <div>
                <Link to={'/mypage'}>마이페이지</Link>
            </div>
        </div>
    )
}

export default NavUser;