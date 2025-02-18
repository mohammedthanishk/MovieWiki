import { Routes, Route } from "react-router-dom";
import Favorites from "./assets/pages/favorites";
import "./App.css";
import Home from "./assets/pages/Home";

function App() {
  return (
    <main className="main-cont">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </main>
  );
}
export default App;
