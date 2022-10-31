import { NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <>
      <header>
        <h1>HEADER</h1>
        <NavLink to="/admPage">admPage</NavLink>
      </header>
      <div className="header-height"></div>
    </>
  );
};
