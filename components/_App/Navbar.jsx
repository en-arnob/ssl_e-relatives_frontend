import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import TopHeader from "./TopHeader";

const NavbarFour = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <header className="header-area">
        <TopHeader />

        <div className="nav-area nav-area-seven">
          <div id="navbar" className="navbar-area">
            <div className="main-nav">
              <nav className="navbar navbar-expand-md navbar-light">
                <div className="container">
                  <Link href="/" className="navbar-brand">
                    <img src="/img/logo.png" alt="logo" />
                  </Link>

                  <button
                    onClick={toggleNavbar}
                    className={classTwo}
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                  </button>

                  <div className={classOne} id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                      <li className="nav-item">
                        <Link
                          href="/"
                          className={`nav-link ${
                            currentPath == "/" && "active"
                          }`}
                        >
                          Home
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/about/"
                          className={`nav-link ${
                            currentPath == "/about/" && "active"
                          }`}
                        >
                          About
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/services-2/"
                          className={`nav-link ${
                            currentPath == "/services-2/" && "active"
                          }`}
                        >
                          Services
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/contact/"
                          className={`nav-link ${
                            currentPath == "/contact/" && "active"
                          }`}
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="others-option">
                    <div className="subscribe d-flex gap-2">
                      <Link href="/sign-in" className="default-btn">
                        Login
                      </Link>
                      <Link href="/sign-up" className="default-btn">
                        Registration
                      </Link>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarFour;
