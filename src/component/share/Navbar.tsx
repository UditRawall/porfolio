import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import logo from '../../../public/images/logo.png';
import navLinks from "../constant/navLink";
import "./Navbar.css";

export type INavLink = {
  name: string;
  path: string;
};

const Navbar = () => {
  const params = useLocation();
  const sliderRef = useRef<HTMLDivElement>(null);
  const navUlRef = useRef<HTMLUListElement>(null);

  const moveSlider = (targetElement: HTMLElement) => {
    if (!sliderRef.current || !navUlRef.current) return;

    const linkRect = targetElement.getBoundingClientRect();
    const navRect = navUlRef.current.getBoundingClientRect();
    
    const offsetX = linkRect.left - navRect.left - 4; // 4px for padding
    const width = linkRect.width;
    
    sliderRef.current.style.transform = `translateX(${offsetX}px)`;
    sliderRef.current.style.width = `${width}px`;
  };

  useEffect(() => {
    // Move slider to active link on route change
    const activeLink = document.querySelector('.navbar-list a.active') as HTMLElement;
    if (activeLink) {
      setTimeout(() => moveSlider(activeLink), 100);
    }
  }, [params.pathname]);

  useEffect(() => {
    // Handle window resize
    const handleResize = () => {
      const activeLink = document.querySelector('.navbar-list a.active') as HTMLElement;
      if (activeLink) {
        moveSlider(activeLink);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="navbar">
      {/* logo */}
      <img src={logo} alt="logo" className="logo" />
      
      <div className="navbar-container">
        <ul className="navbar-ul" ref={navUlRef}>
          {/* Sliding background */}
          <div className="slider" ref={sliderRef}></div>
          
          {/* nav list */}
          {navLinks?.map((item: INavLink, index) => {
            const currentIndex = params.pathname === item.path;
            return (
              <li key={index} className="navbar-list">
                <NavLink
                  to={item.path}
                  className={currentIndex ? "active" : ""}
                  onClick={(e) => {
                    // Move slider on click
                    setTimeout(() => moveSlider(e.currentTarget), 50);
                  }}
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
          fillRule="evenodd"
          d="M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083Z"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  );
};

export default Navbar;