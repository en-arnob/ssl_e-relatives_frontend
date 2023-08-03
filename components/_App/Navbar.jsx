import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import TopHeader from "./TopHeader";
import { UserContext } from "../../Context/UserContextAPI";
import Dropdown from "react-bootstrap/Dropdown";

const NavbarFour = () => {
  const { currentUser, systemData } = useContext(UserContext);
  const [refresh, setRefresh] = useState(false);
  // console.log(currentUser);
  // console.log(systemData);
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);

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
                    {systemData?.logo_image ? (
                      <img
                        src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}/${systemData?.logo_image}`}
                        alt="logo"
                        className="w-50 h-50"
                      />
                    ) : (
                      `${systemData?.website_name}`
                    )}
                    {/* {systemData?.website_name} */}
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
                          {currentUser && currentUser?.id ? "Profile" : "Home"}
                        </Link>
                      </li>
                      {currentUser && currentUser?.id ? (
                        <>
                          <li className="nav-item">
                            <Link
                              href="/service-request/"
                              className={`nav-link ${
                                currentPath == "/service-request/" && "active"
                              }`}
                            >
                              Service Request
                            </Link>
                          </li>
                        </>
                      ) : (
                        <>
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
                        </>
                      )}
                    </ul>
                  </div>
                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="bg-transparent border-0"
                    >
                      {currentUser && currentUser?.mobile ? (
                        <div className="navbar-btn">
                          {currentUser?.image ? (
                            <img
                              class="rounded-circle img-fluid "
                              src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}/users/${currentUser?.image}`}
                              style={{ width: "40px", height: "40px" }}
                              alt=""
                            />
                          ) : (
                            <img
                              class="rounded-circle img-fluid "
                              src="/img/avatar-user.png"
                              style={{ width: "40px", height: "40px" }}
                              alt=""
                            />
                          )}{" "}
                          <span>{currentUser?.f_name} </span>
                        </div>
                      ) : (
                        <div className="subscribe d-flex gap-2">
                          <Link href="/sign-in" className="default-btn">
                            Login
                          </Link>
                          <Link href="/sign-up" className="default-btn">
                            Registration
                          </Link>
                        </div>
                      )}
                    </Dropdown.Toggle>
                    {currentUser && currentUser?.mobile && (
                      <div>
                        <Dropdown.Menu>
                          {/* <Dropdown.Item>Profile</Dropdown.Item>
                          <Dropdown.Item>Change Password</Dropdown.Item> */}
                          <Dropdown.Item>
                            <button
                              className="btn btn-secondary py-0 px-2"
                              onClick={() => {
                                localStorage.removeItem("jwtToken");
                                setRefresh(!refresh);
                                router.push("/");
                                router.reload(window.location.pathname);
                                // router.push("/");
                              }}
                            >
                              Logout
                            </button>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </div>
                    )}
                  </Dropdown>
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
