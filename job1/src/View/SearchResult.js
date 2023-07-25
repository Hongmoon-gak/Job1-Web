import Preview from "../Main/Preview/Preview";
import Search from "./Search";

import { useLocation } from "react-router-dom";

function SearchResult() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");
  return (
    <div>
      <Search />
      <Preview typeTitle="법률" resultNum="30" type="laws" query={query} />
      <Preview typeTitle="새 소식" resultNum="30" type="news" query={query} />
      <Preview
        typeTitle="게시판"
        resultNum="30"
        type="community"
        query={query}
      />
    </div>
  );
}

export default SearchResult;
