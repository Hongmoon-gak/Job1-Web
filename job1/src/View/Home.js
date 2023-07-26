import Search from "../View/Search";
import Preview from "../Main/Preview/Preview";
import MoreInfo from "../Main/MoreInfo";

function Home() {
  return (
    <div>
      <Search />
      <Preview typeTitle="게시판" type="community" view="home" />
      <MoreInfo />
    </div>
  );
}

export default Home;
