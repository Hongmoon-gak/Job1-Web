import PrevCont from "./PrevCont";
import PrevCommOp from "./PrevCommOp";
import { useNavigate } from "react-router-dom";
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
  return (
    <div className="previewContainer">
      <h2 className="cHead">{props.title}</h2>
      <div className="bar">
        {selectType()}
        <button className="cWriteBtn" onClick={navigateToWrite}>
          {props.btn}
        </button>
      </div>
      <hr />
      <PrevCont />
      <hr />
    </div>
  );
}

export default Preview;
