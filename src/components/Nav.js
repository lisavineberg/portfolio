import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  const isCurrent = (path) => {
    return (path === location.pathname) ? " nav-item--current" : ""
  }

  return (
    <nav className="nav">
      <ul className="nav-list">
        <Link className={"nav-item" + isCurrent("/")} to="/">About</Link>
        <Link className={"nav-item" + isCurrent("/education")} to="/education">Education</Link>
        <Link className={"nav-item" + isCurrent("/career")} to="/career">Career</Link>
        <Link className={"nav-item" + isCurrent("/projects")} to="/projects">Projects</Link>
        <Link className={"nav-item" + isCurrent("/volunteer")} to="/volunteer">Volunteer</Link>
        <Link className={"nav-item" + isCurrent("/tech-stack")} to="/tech-stack">Tech stack</Link>
        <Link className={"nav-item" + isCurrent("/blog")} to="/blog">Blog</Link>
      </ul>
    </nav>
  )
}

export default Nav;
