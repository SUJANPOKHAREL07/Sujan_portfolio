
import { Link } from "react-scroll";

function Nav() {
  return (
    <nav>
      <div className="flex bg-gray-800 w-full fixed top-0 z-50">
        <h1 className="font-bold text-2xl py-4 text-white ml-16">
          Sujan Pokharel
        </h1>
        <div className="ml-[30rem] space-x-8 py-5 font-semibold">
          <Link
            to="/"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            activeClass="text-purple-300"
            className="cursor-pointer text-white hover:text-purple-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            activeClass="text-purple-300"
            className="cursor-pointer text-white hover:text-purple-300"
          >
            About
          </Link>
          <Link
            to="/projects"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            activeClass="text-purple-300"
            className="cursor-pointer text-white hover:text-purple-300"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            activeClass="text-purple-300"
            className="cursor-pointer text-white hover:text-purple-300"
          >
            Contact
          </Link>
        </div>
        <div className="py-4 ml-40 text-white font-bold">
          <button className="bg-purple-300 w-20 h-8 border-b-4 border-purple-300 hover:border-purple-300 hover:bg-purple-100 hover:text-purple-400 rounded-2xl">
            Hire Me!
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
