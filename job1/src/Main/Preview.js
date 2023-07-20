import PrevCont from "./PrevCont";
import { Link } from "react-router-dom";
import "./Preview.css";
import { useState } from "react";

function Preview() {
  const [section, setSection] = useState("hot");
  return (
    <div>
      <h2>게시판</h2>
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
        <button className="cWriteBtn">글쓰기</button>
      </div>
      <hr />
      <PrevCont />
      <hr />
    </div>
  );
}

export default Preview;
