import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/layout/Navbar";
import Home from "./component/layout/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-25 bg-primary-dark">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}
export default App;
