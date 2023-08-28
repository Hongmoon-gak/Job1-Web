import styled from "styled-components";
import Preview from "../Main/Preview/Preview";
import { useState } from "react";

function MyPageBoard(props) {
  const [type, setType] = useState("새소식");

  return (
    <>
      <Title>
        {props.option === "posts"
          ? "✏️ 내가 쓴 글"
          : props.option === "comments"
          ? "💬 댓글 단 글"
          : "⭐ 스크랩"}
      </Title>

      {props.option === "scrap" ? (
        <OptionContainer>
          <Option onClick={() => setType("새소식")} type={type === "새소식"}>
            새 소식
          </Option>
          <Option onClick={() => setType("법률")} type={type === "법률"}>
            법률
          </Option>
          <Option onClick={() => setType("게시판")} type={type === "게시판"}>
            게시판
          </Option>
        </OptionContainer>
      ) : null}

      <Preview
        typeTitle={type}
        type={
          type === "새소식" ? "news" : type === "법률" ? "laws" : "community"
        }
        view="mypage"
      />
    </>
  );
}

export default MyPageBoard;

const Title = styled.div`
  display: flex;
  width: 30.5625rem;
  height: 3.5625rem;
  flex-direction: column;
  justify-content: center;

  text-align: center;
  font-family: DM Sans;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem; /* 75% */

  margin: 0 auto;
`;

const OptionContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Option = styled.div`
  width: 6.25rem;
  height: 2.8125rem;
  flex-shrink: 0;

  border-radius: 1.875rem;
  border: 1px solid #e3e3e3;
  background: ${({ type }) => (type ? " #E3E3E3" : "#fff")};

  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3rem; /* 160% */

  margin: 2rem 1rem;
`;
