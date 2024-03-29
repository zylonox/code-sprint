import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Search from './pages/search';
function App() {
  return (
  <>
  <Routes>
    <Route path="/" element={<Homepage />}/>
    <Route path="/search" element={<Search/>}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/register" element={<Register />}/>
  </Routes>
  </>
  );
}

export default App;