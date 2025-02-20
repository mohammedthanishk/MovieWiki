import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav className="Nav-Bar">
        <div className="header"> <Link to="/">Movie Wiki</Link></div>
    
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/series">series</Link>
            <Link to="/most Propular">most Popular</Link>
            <Link to="/favorites">favorites</Link>
            </div>
    </nav>
  );
}
export default NavBar;
