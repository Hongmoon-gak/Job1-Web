import "./Preview.css";

function PrevArt(props) {
  return (
    <div className="cArticle">
      <div className="cTitle">
        <a href={props.href} className="cTitleHref">
          <p>{props.title}</p>
        </a>
      </div>
      <p className="cLikes">
        <i class="far fa-thumbs-up"></i>
        {props.likes}
      </p>
      <p className="cDate">{props.date}</p>
    </div>
  );
}

export default PrevArt;
