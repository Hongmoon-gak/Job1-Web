import "./Preview.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function PrevCommOp() {
  const [section, setSection] = useState("hot");
  return (
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
  );
}

export default PrevCommOp;
