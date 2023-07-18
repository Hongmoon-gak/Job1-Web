import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Main/NavBar";
import Home from "./View/Home";
import Laws from "./View/Laws";
import Board from "./View/Board";
import News from "./View/News";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/law' element={<Laws/>} />
          <Route path='/board' element={<Board/>} />
          <Route path='/news' element={<News/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
