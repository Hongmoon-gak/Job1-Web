import PrevArt from "./PrevArt";
import PrevCommOp from "./PrevCommOp";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Preview.css";

import { post } from "./DataSample";

function Preview(props) {
  const items = post
    .filter((data) => {
      if (
        (data.title.toLowerCase().includes(props.query) ||
          data.contents.toLowerCase().includes(props.query)) &&
        data.type === props.type
      ) {
        return data;
      }
    })
    .sort(function (a, b) {
      return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
    });
  const itemSorted = items.slice(0, 6).map((data) => {
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
    return props.type === "home" ? (
      <PrevCommOp />
    ) : (
      <p className="resultNum">총 {items.length}건의 검색 결과가 있습니다.</p>
    );
  };
  const selectBottom = () => {
    return props.type !== "home" ? (
      <div className="previewBottom">
        <Link
          to={`./${props.type}?query=${props.query}`}
          className="moreResult"
        >
          검색 결과 더 보기
        </Link>
      </div>
    ) : null;
  };
  const selectBtn = () => {
    return props.type === "home" ? (
      <button className="cWriteBtn" onClick={navigateToWrite}>
        글쓰기
      </button>
    ) : null;
  };
  console.log(props.query);
  console.log(post);
  /* 
  const [searchWord, setSearch] = useState(props.query);
 */

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
