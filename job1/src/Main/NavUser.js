import { Link } from "react-router-dom";

function NavUser(){
    return(
        <div>
            <Link to={'/login'} >로그인</Link>
            <div>
                <Link to={'/mypage'}></Link>
            </div>
        </div>
    )
}

export default NavUser;