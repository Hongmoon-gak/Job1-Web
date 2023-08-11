import Search from "../View/Search";
import Preview from "../Main/Preview/Preview";
import MoreInfo from "../Main/MoreInfo";
import { useNavigate } from 'react-router-dom/dist';
import { useEffect } from "react";


function Home() {
  /*const navigate = useNavigate();
  useEffect(() => {
    navigate(`/search`)
  })*/
  return (
    <div>
      <Search />
      <Preview typeTitle="게시판" type="community" view="home" />
      <MoreInfo />
    </div>
  );
}

export default Home;
