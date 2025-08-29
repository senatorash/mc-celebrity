import { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import logo from "../assets/images/logo.png";

const NavBar = () => {
  const [sticky, setSticky] = useState(false);
  const [showBar, setShowBar] = useState(false);
  const [responsive, setResponsive] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleResponsive = () => {
    if (window.innerWidth < 820) {
      setResponsive(true);
    } else {
      setResponsive(false);
    }
  };
  useEffect(() => {
    handleResponsive();
    window.addEventListener("resize", handleResponsive);
    return () => {
      window.removeEventListener("resize", handleResponsive);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 245) {
      setSticky(true);
      const btnElement = document.querySelector(".navbar .right-btns .btn ");
      const linkElements = document.querySelectorAll(
        ".navbar-menu .navbar-link"
      );
      if (btnElement instanceof HTMLElement) {
        btnElement.style.color = "#000";
      }

      {
        !responsive &&
          linkElements.forEach((link) => {
            if (link instanceof HTMLElement) {
              link.style.color = "#000";
            }
          });
      }
    } else {
      setSticky(false);
      const element = document.querySelector(".navbar .right-btns .btn");
      const linkElements = document.querySelectorAll(
        ".navbar-menu .navbar-link"
      );
      if (element instanceof HTMLElement) {
        element.style.color = "#fff";
      }

      linkElements.forEach((link) => {
        if (link instanceof HTMLElement) {
          link.style.color = "";
        }
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    // <Element name="home" id="home">
    <nav className={`navbar ${sticky ? "sticky" : ""}`}>
      <div className="container-fluid">
        {isHomePage ? (
          <Link className="navbar-brand" to="home" smooth={true} duration={500}>
            <img src={logo} alt="master_of_ceremony_logo" />
          </Link>
        ) : (
          <RouterLink className="navbar-brand" to="/">
            <img src={logo} alt="master_of_ceremony_logo" />
          </RouterLink>
        )}
        <ul
          className={
            responsive
              ? showBar
                ? "navbar-menu sidebar show"
                : "navbar-menu sidebar"
              : "navbar-menu"
          }
        >
          {responsive ? (
            <button className="btn close-btn" onClick={() => setShowBar(false)}>
              <i className="ri-close-line"></i>
            </button>
          ) : null}
          <li className="navbar-item" onClick={() => setShowBar(false)}>
            {isHomePage ? (
              <Link
                activeClass="active"
                className="navbar-link"
                to="home"
                smooth={true}
                duration={500}
                offset={-100}
                spy={true}
              >
                Home
              </Link>
            ) : (
              <RouterLink className="navbar-link" to="/">
                Home
              </RouterLink>
            )}
          </li>
          <li className="navbar-item" onClick={() => setShowBar(false)}>
            {isHomePage ? (
              <Link
                activeClass="active"
                className="navbar-link"
                to="about"
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                onSetActive={() => setShowBar(false)}
              >
                About
              </Link>
            ) : (
              <RouterLink className="navbar-link" to="/#about">
                About
              </RouterLink>
            )}
          </li>

          <li className="navbar-item" onClick={() => setShowBar(false)}>
            {isHomePage ? (
              <Link
                className="navbar-link"
                to="services"
                smooth={true}
                duration={500}
                offset={-100}
                spy={true}
                onSetActive={() => setShowBar(false)}
              >
                Services
              </Link>
            ) : (
              <RouterLink className="navbar-link" to="/#services">
                Services
              </RouterLink>
            )}
          </li>

          <li className="navbar-item" onClick={() => setShowBar(false)}>
            {isHomePage ? (
              <Link
                className="navbar-link"
                to="testimonials"
                smooth={true}
                duration={500}
                offset={-100}
                spy={true}
                activeClass="active"
                onSetActive={() => setShowBar(false)}
              >
                Testimonials
              </Link>
            ) : (
              <RouterLink className="navbar-link" to="/#testimonials">
                Testimonials
              </RouterLink>
            )}
          </li>

          <li className="navbar-item" onClick={() => setShowBar(false)}>
            {isHomePage ? (
              <Link
                className="navbar-link"
                to="contact"
                smooth={true}
                duration={500}
                offset={-100}
                spy={true}
                onSetActive={() => setShowBar(false)}
              >
                Contact
              </Link>
            ) : (
              <RouterLink className="navbar-link" to="/#contact">
                Contact
              </RouterLink>
            )}
          </li>

          <li className="navbar-item" onClick={() => setShowBar(false)}>
            <RouterLink className="navbar-link" to="/book">
              Book
            </RouterLink>
          </li>
        </ul>
        {responsive ? (
          <div className="right-btns">
            <button
              className="btn menu-toggle"
              onClick={() => setShowBar(true)}
            >
              <i className="ri-menu-3-line"></i>
            </button>
          </div>
        ) : null}
      </div>
    </nav>
    // </Element>
  );
};

export default NavBar;
