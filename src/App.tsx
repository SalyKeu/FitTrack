import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/layout/Navbar";
import Home from "./component/layout/Home";
function App() {
  return (
    <Router>
      <div className="flex w-screen">
        <div className="w-100 h-screen">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
