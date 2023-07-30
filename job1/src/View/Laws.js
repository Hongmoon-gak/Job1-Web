import Search from "./Search";
import MoreInfo from "../Main/MoreInfo";
import Preview from "../Main/Preview/Preview";

function Laws() {
  return (
    <div>
      <Search />
      <Preview typeTitle="법률" type="laws" view="detail" />
      <MoreInfo />
    </div>
  );
}

export default Laws;
