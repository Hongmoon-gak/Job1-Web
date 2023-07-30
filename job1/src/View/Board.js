import Search from "./Search";
import MoreInfo from "../Main/MoreInfo";
import Preview from "../Main/Preview/Preview";

function Board() {
  return (
    <div>
      <Search />
      <Preview typeTitle="게시판" type="community" view="detail" />
      <MoreInfo />
    </div>
  );
}

export default Board;
