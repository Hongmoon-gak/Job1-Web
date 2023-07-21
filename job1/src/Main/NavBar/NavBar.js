import NavItems from "./NavItems";
import NavUser from "./NavUser";
import { Link } from "react-router-dom";

import "./NavBar.css";

function NavBar(){
    return(
        <div className="nav-container">
            <div className="navitems-container">
                <div className="nav-logo">
                    <Link to={'/'}>Job 일</Link>
                </div>
                <div className="navmenus">
                    <Link className="navmenus-list" to={'/law'}>법률</Link>
                    <Link className="navmenus-list" to={'/board'}>게시판</Link>
                    <Link className="navmenus-list" to={'/news'}>새소식/뉴스</Link>
                </div>
            </div>

            <div className="navuser-container">
                <Link className="navuser-list" to={'/login'} >로그인</Link>
                <div className="navuser-list">
                    <Link to={'/mypage'}>마이페이지</Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar;