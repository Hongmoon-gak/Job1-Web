import Search from "./Search";
import Preview from "../Main/Preview/Preview";
import MoreInfo from "../Main/MoreInfo";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import MyPageBoard from "../Component/MyPageBoard";
import { useState } from "react";

function MyPage() {
  const [option, setOption] = useState("posts");

  return (
    <div>
      <Search />
      <OptionContainer>
        <Option onClick={() => setOption("posts")} option={option === "posts"}>
          ✏️ 내가 쓴 글
        </Option>
        <Option
          onClick={() => setOption("comments")}
          option={option === "comments"}
        >
          💬 댓글 단 글
        </Option>
        <Option onClick={() => setOption("scrap")} option={option === "scrap"}>
          ⭐ 스크랩
        </Option>
      </OptionContainer>

      {option === "scrap" ? (
        <>
          <Preview typeTitle="새 소식" type="news" view="mypage" />
          <Preview typeTitle="법률" type="laws" view="mypage" />
          <Preview typeTitle="게시판" type="community" view="mypage" />
        </>
      ) : (
        <Preview typeTitle="게시판" type="community" view="mypage" />
      )}

      <MoreInfo />
    </div>
  );
}

export default MyPage;

const OptionContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const Option = styled.div`
  width: 10.625rem;
  height: 3.75rem;

  border-radius: 3.125rem;
  border: 1px solid #d9d9d9;
  background: ${({ option }) => (option ? "#D9D9D9" : "#fff")};

  color: #000;
  font-family: DM Sans;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 2rem 1rem;

  &:hover {
    cursor: pointer;
  }
`;
