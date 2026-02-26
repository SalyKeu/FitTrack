import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/layout/Navbar";
import Home from "./component/layout/Home";
import LoginWithEmail from "./authentication/LoginWithEmail";
import RegisterWithEmail from "./authentication/RegisterWithEmail";
import { AuthProvider } from "./context/AuthProvider";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <main className="pt-25 bg-primary-dark">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<LoginWithEmail />} />
            <Route path="/signup" element={<RegisterWithEmail />} />
          </Routes>
        </main>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
