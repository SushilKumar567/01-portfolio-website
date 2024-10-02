import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="bg-c1 top-0 z-50 h-14 flex justify-center items-center sticky">
      <nav className="w-full flex justify-evenly items-center">
        <h1 className="w-[5%] rounded-full text-3xl font-bold text-c3 text-center">
          SK.
        </h1>
        <ul className="w-[30%] bg-c6 rounded-full p-2 flex justify-evenly items-center font-medium">
          {["Home", "Skills", "Projects", "About"].map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="relative hover:text-c4 transition-colors group cursor-pointer"
              >
                <span className="block h-0.5 bg-c4 w-0 transition-all duration-300 group-hover:w-full mb-0.25"></span>
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="bg-c5 text-black px-4 py-2 rounded-full hover:bg-c4 hover:text-white transition duration-250 ease-out cursor-pointer"
        >
          <FontAwesomeIcon className="pr-3" icon={faPhoneVolume} />
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
