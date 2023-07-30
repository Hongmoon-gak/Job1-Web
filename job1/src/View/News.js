import Search from "./Search";
import MoreInfo from "../Main/MoreInfo";
import Preview from "../Main/Preview/Preview";

function News() {
  return (
    <div>
      <Search />
      <Preview typeTitle="새소식" type="news" view="detail" />
      <MoreInfo />
    </div>
  );
}

export default News;
