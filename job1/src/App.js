import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Main/NavBar/NavBar";
import Home from "./View/Home";
import Laws from "./View/Laws";
import Community from "./View/Community";
import News from "./View/News";
import Footer from "./Main/Footer";
import Login from "./View/Login/Login";
import MyPage from "./View/MyPage";
import Write from "./View/Write";
import SearchResult from "./View/SearchResult";
import LoginHandeler from "./View/Login/LoginHandler";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/laws" element={<Laws />} />
          <Route path="/community" element={<Community />} />
          <Route path="/news" element={<News />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage/*" element={<MyPage />} />
          <Route path="/write" element={<Write />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/kakaoLogin" element={<LoginHandeler />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
