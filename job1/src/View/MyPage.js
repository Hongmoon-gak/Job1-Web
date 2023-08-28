import Search from "./Search";
import Preview from "../Main/Preview/Preview";
import MoreInfo from "../Main/MoreInfo";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import MyPageBoard from "../Component/MyPageBoard";

function MyPage() {
  return (
    <div>
      <Search />
      <Routes>
        <Route path="/posts" element={<MyPageBoard option="posts" />} />
        <Route path="/comments" element={<MyPageBoard option="comments" />} />
        <Route path="/scrap" element={<MyPageBoard option="scrap" />} />
      </Routes>
      <MoreInfo />
    </div>
  );
}

export default MyPage;
