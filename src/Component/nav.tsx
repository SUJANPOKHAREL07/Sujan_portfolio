
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <>
    <nav>
        <h1>Sujan Pokharel</h1>
        <NavLink 
        to="/"
        className={({isActive})=>isActive? "text-green-200" : "text-green-300"}
        >Home</NavLink>
         <NavLink 
        to="/"
        className={({isActive})=>isActive? "text-green-200" : "text-green-300"}
        >About</NavLink>
    </nav>
    </>
  )
}

export default Nav