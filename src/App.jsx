import {Routes,Route} from "react-router-dom";
import "./assets/STYLE/moviecard.css";
import Favorites from "./assets/pages/Favorites";
import "./App.css";
import Home from "./assets/pages/Home";
import NavBar from "./assets/components/NavBar";
import "./assets/STYLE/navbar.css";


function App() {
  return (
    <div>
      <NavBar />
    <main className="main-cont">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </main>
    </div>
  );
}
export default App;