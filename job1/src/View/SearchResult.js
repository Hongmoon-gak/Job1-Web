import Preview from "../Main/Preview/Preview";

function SearchResult() {
  return (
    <div>
      Search Result
      <Preview title="법률" btn="더보기" resultNum="30" />
      <Preview title="새 소식" btn="더보기" resultNum="30" />
      <Preview title="게시판" btn="더보기" resultNum="30" />
    </div>
  );
}

export default SearchResult;
