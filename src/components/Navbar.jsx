import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
function Navbar() {
  return (
    <nav className="mb-24 flex items-center justify-center py-6">
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="www.linkedin.com/in/psharish27">
          <FaLinkedin />
        </a>

        <a href="https://leetcode.com/u/hydraharish123/">
          <SiLeetcode />
        </a>

        <a href="https://github.com/hydraharish123">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
