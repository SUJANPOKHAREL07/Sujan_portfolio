
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Nav from './Component/nav'
import Home from './Pages/home'
import About from './Pages/about'
import Projects from './Pages/projects'
import Contact from './Pages/contact'
const router=createBrowserRouter([{
  path:"/",
  element:(
  <>
    <Nav/>
    <Home/>
  </>
  )
}
,
{
  
  path:"/about",
  element:(
  <>
    <Nav/>
    <About/>
  </>
  )
},
{
  
  path:"/projects",
  element:(
  <>
    <Nav/>
    <Projects/>
  </>
  )
},
{
  
  path:"/contact",
  element:(
  <>
    <Nav/>
    <Contact/>
  </>
  )
}
])
function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
