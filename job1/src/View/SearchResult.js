import Preview from "../Main/Preview/Preview";

function SearchResult() {
  return (
    <div>
      Search Result
      <Preview title="법률" btn="더보기" resultNum="30" type="laws" />
      <Preview title="새 소식" btn="더보기" resultNum="30" type="news" />
      <Preview title="게시판" btn="더보기" resultNum="30" type="community" />
    </div>
  );
}

export default SearchResult;
