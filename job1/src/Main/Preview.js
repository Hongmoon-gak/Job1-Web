import PrevCont from "./PrevCont";
import { Link, useNavigate } from "react-router-dom";
import "./Preview.css";
import { useState } from "react";

function Preview() {
  const [section, setSection] = useState("hot");
  const navigate = useNavigate();
  const navigateToWrite = () => {
    navigate("./write");
  };
  return (
    <div className="previewContainer">
      <h2 className="cHead">게시판</h2>
      <div className="bar">
        <div className="cType">
          <Link
            to={"#"}
            className={section === "hot" ? "selectedBtn" : "Btn"}
            onClick={() => {
              setSection("hot");
            }}
          >
            HOT
          </Link>
          <Link
            to={"#"}
            className={section === "new" ? "selectedBtn" : "Btn"}
            onClick={() => {
              setSection("new");
            }}
          >
            NEW
          </Link>
        </div>
        <button className="cWriteBtn" onClick={navigateToWrite}>
          글쓰기
        </button>
      </div>
      <hr />
      <PrevCont />
      <hr />
    </div>
  );
}

export default Preview;
