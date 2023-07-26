import PrevArt from "./PrevArt";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Preview.css";

import { post } from "./DataSample";

function Preview(props) {
  const [section, setSection] = useState("hot");
  const item = post.filter((data) => {
    if (data.type === props.type) {
      return data;
    }
  });
  const itemS = item.filter((data) => {
    if (
      (data.title.toLowerCase().includes(props.query) ||
        data.contents.toLowerCase().includes(props.query)) &&
      data.type === props.type
    ) {
      return data;
    }
  });
  const itemC = post.filter((data) => {
    if (Number(data.likes) > 50) return data;
  });

  const itemSorted = (
    props.view !== "home" ? itemS : section === "hot" ? itemC : item
  )
    .sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    })
    .slice(0, 6)
    .map((data) => {
      return (
        <div className="cArtView">
          <PrevArt
            title={data.title}
            type={props.type}
            link=""
            likes={data.likes}
            date={data.date}
          />
          <hr />
        </div>
      );
    });

  const navigate = useNavigate();
  const navigateToWrite = () => {
    navigate("./write");
  };
  const selectType = () => {
    return props.view === "home" ? (
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
    ) : (
      <p className="resultNum">총 {itemS.length}건의 검색 결과가 있습니다.</p>
    );
  };
  const selectBottom = () => {
    return props.view !== "home" ? (
      <div className="previewBottom">
        <Link
          to={`./${props.view}?query=${props.query}`}
          className="moreResult"
        >
          검색 결과 더 보기
        </Link>
      </div>
    ) : null;
  };
  const selectBtn = () => {
    return props.view === "home" ? (
      <button className="cWriteBtn" onClick={navigateToWrite}>
        글쓰기
      </button>
    ) : null;
  };

  return (
    <div className="previewContainer">
      <h2 className="cHead">{props.typeTitle}</h2>
      <div className="bar">
        {selectType()}
        {selectBtn()}
      </div>
      <hr />
      {itemSorted}
      {selectBottom()}
    </div>
  );
}

export default Preview;
