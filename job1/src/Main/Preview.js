import PrevCont from "./PrevCont";
import "./Preview.css";

function Preview() {
  return (
    <div>
      <h2>게시판</h2>
      <div className="bar">
        <div className="cType">
          <h3 className="hotCommu">HOT</h3>
          <h3 className="newCommu">NEW</h3>
        </div>
        <button className="cWriteBtn">글쓰기</button>
      </div>
      <hr />
      <PrevCont />
      <hr />
    </div>
  );
}

export default Preview;
