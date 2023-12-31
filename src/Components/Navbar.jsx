import React, { useEffect } from "react";

const Navbar = () => {
  const hideShowNav = () => {
    /* Desktop Sticky Nav */

    let lastScrollTop = 0;
    let desktopNav = document.getElementById("desktop-nav");
    let hamburgerNav = document.getElementById("hamburger-nav");
    window.addEventListener("scroll", () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        desktopNav.style.top = "-85px";
        hamburgerNav.style.top = "-85px";
      } else {
        desktopNav.style.top = "0";
        hamburgerNav.style.top = "0";
      }
      lastScrollTop = scrollTop;
    });
  };

  /* Re-render the navbar appearence or disappeearence */
  useEffect(() => {
    hideShowNav();
  }, []);

  const toggleMenu = () => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  };
  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">Rakib Shanto</div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Rakib Shanto</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
