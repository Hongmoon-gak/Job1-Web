import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Main/NavBar/NavBar";
import Home from "./View/Home";
import Laws from "./View/Laws";
import Board from "./View/Board";
import News from "./View/News";
import Footer from "./Main/Footer";
import Login from "./View/Login/Login";
import MyPage from "./View/MyPage";
import Write from "./View/Write";
import LoginHandeler from "./View/Login/LoginHandler";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/law" element={<Laws />} />
          <Route path="/board" element={<Board />} />
          <Route path="/news" element={<News />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/write" element={<Write />} />
          <Route path="/kakaoLogin" element={<LoginHandeler />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;