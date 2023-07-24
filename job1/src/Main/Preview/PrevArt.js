import "./Preview.css";
import { Link } from "react-router-dom";

function PrevArt(props) {
  return (
    <div className="cArticle">
      <div className="cTitle">
        <Link to={`/${props.type}/${props.link}`} className="cTitleHref">
          {props.title}
        </Link>
      </div>
      <div className="cLikes">
        <img
          src="/Images/CommunityLike.png"
          alt="likes"
          className="cLikeIcon"
        ></img>
        <p className="cLikeNum">{props.likes}</p>
      </div>
      <p className="cDate">{props.date}</p>
    </div>
  );
}

export default PrevArt;
