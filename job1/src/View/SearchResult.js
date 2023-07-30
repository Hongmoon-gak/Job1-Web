import Preview from "../Main/Preview/Preview";
import Search from "./Search";

function SearchResult() {
  return (
    <div>
      <Search />
      <Preview typeTitle="법률" resultNum="30" type="laws" />
      <Preview typeTitle="새 소식" resultNum="30" type="news" />
      <Preview typeTitle="게시판" resultNum="30" type="community" />
    </div>
  );
}

export default SearchResult;
