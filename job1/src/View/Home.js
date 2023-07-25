import Search from "../View/Search";
import Preview from "../Main/Preview/Preview";
import MoreInfo from "../Main/MoreInfo";

function Home() {
  return (
    <div>
      <Search />
      <Preview title="게시판" type="home" />
      <MoreInfo />
    </div>
  );
}

export default Home;
