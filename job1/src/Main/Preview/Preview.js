import PrevCont from "./PrevCont";
import PrevCommOp from "./PrevCommOp";
import { Link, useNavigate } from "react-router-dom";
import "./Preview.css";

function Preview(props) {
  const navigate = useNavigate();
  const navigateToWrite = () => {
    navigate("./write");
  };
  const selectType = () => {
    return props.type === "home" ? (
      <PrevCommOp />
    ) : (
      <p className="resultNum">
        총 {props.resultNum}건의 검색 결과가 있습니다.
      </p>
    );
  };
  const selectBottom = () => {
    return props.type !== "home" ? (
      <div className="previewBottom">
        <Link to={"#"} className="moreResult">
          검색 결과 더 보기
        </Link>
      </div>
    ) : null;
  };
  const selectBtn = () => {
    return props.type === "home" ? (
      <button className="cWriteBtn" onClick={navigateToWrite}>
        {props.btn}
      </button>
    ) : null;
  };
  return (
    <div className="previewContainer">
      <h2 className="cHead">{props.title}</h2>
      <div className="bar">
        {selectType()}
        {selectBtn()}
      </div>
      <hr />
      <PrevCont type={props.type} />
      <hr />
      {selectBottom()}
    </div>
  );
}

export default Preview;
