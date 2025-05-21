import { useState } from "react";
import { Link } from "react-scroll";
import Modal from "./modal";
import { IoMdClose, IoMdCloseCircleOutline, IoMdMenu } from "react-icons/io";
import Hireme from "./hiremeForm";

function Nav() {
  const [hireClick, setHire] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  return (
    <nav>
      <div className="bg-gray-800 flex md:px-15 px-5 items-center justify-between  ">
        <h1 className="font-bold text-2xl py-4 text-white  ">Sujan Pokharel</h1>
        <div className="md:flex hidden space-x-8  font-semibold">
          <Link
            to="/"
            smooth={true}
            duration={500}
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
        <div className="flex justify-evenly space-x-4 font-bold">
          <button
            onClick={() => setHire(true)}
            className="bg-purple-300 w-20 h-8 border-b-4 text-white border-purple-300 hover:border-purple-300 hover:bg-purple-100 hover:text-purple-400 rounded-2xl"
          >
            Hire Me!
          </button>
          <button
            className="text-white md:hidden"
            onClick={() => setisOpen(!isOpen)}
          >
            {isOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
          </button>
        
        </div>
      </div>
      {isOpen && (
        <div className=" bg-gray-800 text-right font-semibold space-y-2 flex flex-col z-50 mt-13 inset-0 h-20 fixed px-12 ">
          <Link
            to="/"
            smooth={true}
            duration={500}
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
      )}
      {hireClick && (
        <div className="">
          <Modal>
            <div className="bg-purple-200 w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 rounded-md p-4">
              <div className="flex justify-end">
                <IoMdCloseCircleOutline
                  onClick={() => setHire(false)}
                  className="text-purple-500 text-xl cursor-pointer hover:scale-110 transition-transform duration-200"
                />
              </div>
              <Hireme />
            </div>
          </Modal>
        </div>
      )}
    </nav>
  );
}

export default Nav;
