
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <>
    <nav>
       <div className="flex bg-gray-800 w-full  ">
         <h1 className='font-bold text-2xl py-4  text-white ml-17'>Sujan Pokharel</h1>
       <div className="ml-[30rem] space-x-8 py-5 font-semibold">
         <NavLink 
        to="/"
        className={({isActive})=>isActive? "text-purple-300" : "text-white"}
        >Home</NavLink>
         <NavLink 
        to="/about"
        className={({isActive})=>isActive? "text-purple-300" : "text-white"}
        >About</NavLink>
          <NavLink 
        to="/projects"
        className={({isActive})=>isActive? "text-purple-300" : "text-white"}
        >Projects</NavLink>
          <NavLink 
        to="/contact"
        className={({isActive})=>isActive? "text-purple-300" : "text-white"}
        >Contact</NavLink>
       </div>
       <div className="py-4 ml-40  text-white font-bold">
        <button className='bg-purple-300 w-20 rounded-md h-8 border-b-4 border-purple-300 hover:border-purple-300 hover:bg-purple-100 hover:text-purple-400 rounded-2xl'>Hire Me!</button> 
       </div>
       </div>
    </nav>
    </>
  )
}

export default Nav