import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = () => {
  const [sticky, setSticky] = useState(false);
  const [showBar, setShowBar] = useState(false);
  const [responsive, setResponsive] = useState(false);

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

      linkElements.forEach((link) => {
        if (link instanceof HTMLElement) {
          link.style.color = "#000";
        }
      });
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

  // useEffect(() => {
  //   if (showBar) {
  //     document.body.style = "overflow: hidden";
  //   }

  //   return () => {
  //     document.body.style = "overflow: auto";
  //   };
  // }, [showBar]);

  return (
    <nav className={sticky ? "navbar sticky" : "navbar"}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="master_of_ceremony_logo" />
        </Link>
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
            <Link className="navbar-link" to="/">
              Home
            </Link>
          </li>
          <li className="navbar-item" onClick={() => setShowBar(false)}>
            <Link className="navbar-link" to="/">
              About
            </Link>
          </li>

          <li className="navbar-item" onClick={() => setShowBar(false)}>
            <Link className="navbar-link" to="/">
              Services
            </Link>
          </li>

          <li className="navbar-item" onClick={() => setShowBar(false)}>
            <Link className="navbar-link" to="/">
              Testimonials
            </Link>
          </li>

          <li className="navbar-item" onClick={() => setShowBar(false)}>
            <Link className="navbar-link" to="/">
              Contact
            </Link>
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
  );
};

export default NavBar;
