import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className={navOpen ? "Navbar open" : "Navbar"}>
      {navOpen ? (
        <FaChevronDown className="nav-btn" onClick={toggleNav} />
      ) : (
        <FaChevronUp className="nav-btn" onClick={toggleNav} />
      )}
      <Link to="/" className="Title" onClick={() => setNavOpen(false)}>
        PanvasJS
      </Link>
      <Link to="/" className="Link" onClick={() => setNavOpen(false)}>
        Home
      </Link>
      <HashLink smooth to="/docs#docs" className="Link" onClick={() => setNavOpen(false)}>
        Documentation
      </HashLink>

      <HashLink smooth to="/docs#variables" className="Link Sublink" onClick={() => setNavOpen(false)}>
        Global variables
      </HashLink>
      <HashLink smooth to="/docs#functions" className="Link Sublink" onClick={() => setNavOpen(false)}>
        Global functions
      </HashLink>
      <HashLink smooth to="/docs#canvas" className="Link Sublink" onClick={() => setNavOpen(false)}>
        Canvas class
      </HashLink>
      <HashLink smooth to="/docs#vector" className="Link Sublink" onClick={() => setNavOpen(false)}>
        Vector class
      </HashLink>
      <HashLink smooth to="/docs#point" className="Link Sublink" onClick={() => setNavOpen(false)}>
        Point class
      </HashLink>
      <HashLink smooth to="/docs#color" className="Link Sublink" onClick={() => setNavOpen(false)}>
        Color class
      </HashLink>
      <HashLink smooth to="/docs#image" className="Link Sublink" onClick={() => setNavOpen(false)}>
        Image class
      </HashLink>
      <HashLink smooth to="/docs#sound" className="Link Sublink" onClick={() => setNavOpen(false)}>
        Sound class
      </HashLink>

      <HashLink smooth to="/get-started#get-started" className="Link" onClick={() => setNavOpen(false)}>
        Get Started
      </HashLink>
      <HashLink smooth to="/examples#examples" className="Link" onClick={() => setNavOpen(false)}>
        Examples
      </HashLink>
    </div>
  );
};

export default Navbar;
