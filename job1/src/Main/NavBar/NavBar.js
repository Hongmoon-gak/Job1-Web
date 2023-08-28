import NavItems from "./NavItems";
import NavUser from "./NavUser";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

function NavBar() {
  const [nav, setNav] = useState(0);
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <Link onClick={() => setNav(0)} className="navmenus-list" to={"/"}>
          <img src="/Images/Job1 Logo.png" alt="Job-일" />
        </Link>
      </div>

      <div className="navitems-container">
        <div className="navmenus">
          <Link
            onClick={() => setNav(1)}
            className={nav === 1 ? "navmenus-list1" : "navmenus-list"}
            to={"/laws"}
          >
            법률
          </Link>
          <Link
            onClick={() => setNav(2)}
            className={nav === 2 ? "navmenus-list1" : "navmenus-list"}
            to={"/community"}
          >
            게시판
          </Link>
          <Link
            onClick={() => setNav(3)}
            className={nav === 3 ? "navmenus-list1" : "navmenus-list"}
            to={"/news"}
          >
            새 소식
          </Link>
        </div>
      </div>

      <div className="navuser-container">
        <Link
          onClick={() => setNav(0)}
          className="navuser-list"
          id="nav-login"
          to={"/login"}
        >
          로그인
        </Link>
        <Link
          onClick={() => setNav(0)}
          className="navuser-list"
          id="nav-mypage"
          to="/mypage"
        >
          <i class="far fa-user-circle" id="user-circle"></i>
          <div className="user-name">홍길동</div>
          <div className="user-name" id="user-sir">
            님
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
