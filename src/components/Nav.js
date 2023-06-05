import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <Link to="/">About</Link>
        <Link to="/education">Education</Link>
        <Link to="/career">Career</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/volunteer">Volunteer</Link>
        <Link to="/tech-stack">Tech stack</Link>
        <Link to="/blog">Blog</Link>
      </ul>
    </nav>
  )
}

export default Nav;
