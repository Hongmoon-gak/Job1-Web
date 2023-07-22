import { Link } from "react-router-dom";

function NavItems(){
    return(
        <div className="navitems-container">
            <div>
                <Link to={'/'}>Job 일</Link>
            </div>
            <div>
                <Link to={'/law'}>법률</Link>
                <Link to={'/board'}>게시판</Link>
                <Link to={'/news'}>새소식/뉴스</Link>
            </div>
        </div>
    )
}

export default NavItems;