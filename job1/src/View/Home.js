import Preview from "../Main/Preview/Preview";
import MoreInfo from "../Main/MoreInfo";

function Home() {
  return (
    <div>
      home
      <Preview title="게시판" btn="글쓰기" type="home" />
      <MoreInfo />
    </div>
  );
}

export default Home;
