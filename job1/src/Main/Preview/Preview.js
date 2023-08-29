import PrevArt from "./PrevArt";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Preview.css";

import { post } from "./DataSample";
import { useLocation } from "react-router-dom";

import Pagination from "./Pagination";

function Preview(props) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");
  const tag = searchParams.get("tag");

  const [section, setSection] = useState("hot");
  const [page, setPage] = useState(1);
  const limit = 7;
  const offset = (page - 1) * limit;

  const item = post.filter((data) => {
    if (data.type === props.type) {
      return data;
    }
  });
  const itemSearch = item
    .filter((data) => {
      if (query === "") return data;
      else if (
        data.title.toLowerCase().includes(query) ||
        data.contents.toLowerCase().includes(query)
      ) {
        return data;
      }
    })
    .filter((data) => {
      if (tag == "null") return data;
      else if (tag === data.tags) {
        return data;
      }
    });
  const itemComm = post.filter((data) => {
    if (Number(data.likes) >= 10) return data;
  });

  const itemSorted = (
    props.view !== "home" ? itemSearch : section === "hot" ? itemComm : item
  )
    .sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    })
    .slice(offset, offset + limit)
    .map((data) => {
      return (
        <div>
          <div className="cArtView" key={data.id}>
            <PrevArt
              title={data.title}
              type={props.type}
              link=""
              likes={data.likes}
              date={data.date}
            />
            <div
              className={
                props.view === "detail" || props.view === "mypage"
                  ? "cArtCont"
                  : "cArtContNone"
              }
            >
              {data.contents}
            </div>
          </div>
          <hr />
        </div>
      );
    });

  const navigate = useNavigate();
  const navigateToWrite = () => {
    navigate("/write");
  };

  return (
    <div className="previewContainer">
      <h2 className="cHead">{props.typeTitle}</h2>
      <div className="bar">
        {props.view === "home" ? (
          <div className="cType">
            <div
              className={section === "hot" ? "selectedBtn" : "Btn"}
              onClick={() => {
                setSection("hot");
              }}
            >
              HOT
            </div>
            <div
              className={section === "new" ? "selectedBtn" : "Btn"}
              onClick={() => {
                setSection("new");
              }}
            >
              NEW
            </div>
          </div>
        ) : (
          /* query === null ? null : */ <p className="resultNum">
            총 {itemSearch.length}건의 결과가 있습니다.
          </p>
        )}
        {props.type === "community" && props.view !== "mypage" ? (
          <button className="cWriteBtn" onClick={navigateToWrite}>
            글쓰기
          </button>
        ) : null}
      </div>
      <hr />
      {itemSorted}
      {props.view === "search" ? (
        <div className="previewBottom">
          <Link to={`/${props.type}?query=${query}&tag=${tag}`} className="moreResult">
            검색 결과 더 보기
          </Link>
        </div>
      ) : props.view === "home" ? null : (
        <Pagination
          total={itemSearch.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      )}
    </div>
  );
}

export default Preview;
