import "./Preview.css";

function PrevArt(props) {
  return (
    <div className="cArticle">
      <div className="cTitle">
        <a href={props.href} className="cTitleHref">
          <p>{props.title}</p>
        </a>
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
