
import { useState } from "react";
import { Link } from "react-scroll";
import Modal from "./modal";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Hireme from "./hiremeForm";

function Nav() {
  const[hireClick, setHire]=useState(false)
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
          <button onClick={()=>setHire(true)} className="bg-purple-300 w-20 h-8 border-b-4 border-purple-300 hover:border-purple-300 hover:bg-purple-100 hover:text-purple-400 rounded-2xl">
            Hire Me!
          </button>
        </div>
      </div>
      {hireClick &&(
        <div className="">
          <Modal>
              <div className="bg-white w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 rounded-md p-4">
            <div className="flex justify-end">
              <IoMdCloseCircleOutline
                onClick={() => setHire(false)}
                className="text-purple-500 text-xl cursor-pointer hover:scale-110 transition-transform duration-200"
              />
            </div>
            <Hireme/>
            </div>
          </Modal>
        </div>
      )}
    </nav>
  );
}

export default Nav;
