import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../common/Button";

const Header = () => {
  const NavLinks = [
    { NavTxt: "Home", Path: "/" },
    { NavTxt: "Race Calendar", Path: "/race-calendar" },
    { NavTxt: "Results", Path: "/download-results" },
    { NavTxt: "Downloads", Path: "/download" },
    { NavTxt: "Driver Profile", Path: "/driver-profile" },
    { NavTxt: "Media", Path: "/media" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="arw-container">
      <nav className="flex justify-between items-center">
        <Link to={"/"}>
          <img
            className="w-[130px] max-w-[130px]"
            src={"/favicon/logo.svg"}
            alt="Header_Logo"
          />
        </Link>
        <div className="hidden lg:flex lg:items-center lg:justify-between lg:flex-1">
          <ul className="flex flex-grow justify-center space-x-8">
            {NavLinks.map((item, i) => (
              <li key={i}>
                <NavLink
                  to={item.Path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[13px] font-semibold uppercase leading-[19.5px] text-[#FD0000] underline-offset-4 underline decoration-2"
                      : "text-[13px] font-semibold uppercase leading-[19.5px] text-white underline-offset-4 decoration-2 hover:underline hover:text-[#FD0000]"
                  }
                >
                  {item.NavTxt}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex">
            <Button
              type="button"
              text={
                <div className="flex items-center gap-x-[10px]">
                  <img
                    src={"/favicon/avatar.svg"}
                    alt="Register_Logo"
                    className="w-4 h-4"
                  />
                  REGISTER HERE
                </div>
              }
              customButtonStyle="h-8 px-4 text-sm font-semibold flex items-center gap-x-[10px] text-white rounded-[4px] bg-[#FD0000] hover:bg-[#FD0000] transition duration-300 ease-in-out"
            />
          </div>
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              width="28px"
              height="28px"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path d="M16 5H0V4h16v1zm0 8H0v-1h16v1zm0-4.008H0V8h16v.992z" />
            </svg>
          </button>
        </div>
      </nav>
      <div
        className={`lg:hidden absolute top-[76px] left-0 w-[100%] pb-12 h-[100vh] bg-black text-white z-30 rounded-[5px] ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 p-4">
          {NavLinks.map((item, i) => (
            <li key={i}>
              <NavLink
                to={item.Path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[13px] font-semibold uppercase leading-[19.5px] text-[#FD0000] px-3 py-2 rounded-md underline-offset-4 underline decoration-2"
                    : "text-[13px] font-semibold uppercase leading-[19.5px] text-white underline-offset-4 decoration-2 hover:underline hover:text-[#FC0001] px-3 py-2 rounded-md"
                }
              >
                {item.NavTxt}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex justify-center p-4">
          <button className="h-8 px-4 text-sm font-semibold flex items-center gap-x-[10px] text-white rounded-[4px] bg-[#FD0000] hover:bg-[#FD0000] transition duration-300 ease-in-out">
            <img src={"/favicon/avatar.svg"} alt="Register_Logo" />
            REGISTER HERE
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
