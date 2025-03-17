import { NavLink, useLocation} from "react-router-dom";
import logo from '../../../public/logo.png';
import navLinks from "../constant/navLink";
import "./Navbar.css";

export type INavLink = {
  name: string;
  path: string;
};

const Navbar = () => {
  const params = useLocation();
  return (
    <div className="navbar">
      {/* logo */}
      
      <img src={logo} alt="logo" className="logo"/>
      <div className="navbar-ul">
        {/* nav list */}
        <ul className="navbar-ul">
          {navLinks?.map((item: INavLink, index) => {
            const currentIndex = params.pathname === item.path;
            return (
              <li key={index} className="navbar-list">
                <NavLink
                  to={item.path}
                  className={currentIndex ? "active" : ""}
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        data-slot="icon"
        className="dark-theme"
      >
        <path
          fill-rule="evenodd"
          d="M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083Z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </div>
  );
};

export default Navbar;
