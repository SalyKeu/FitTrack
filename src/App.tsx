import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/layout/Navbar";
import Home from "./component/layout/Home";

function App() {
  return (
    <Router>
      <div className="flex w-full flex-col md:flex-row bg-primary-dark">
        <Navbar className="md:hidden" />
        <aside className="hidden h-auto md:block md:h-screen md:w-1/3 lg:w-1/5">
          <Navbar />
        </aside>
        <main className="flex-1 pt-8 md:pt-0">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;
