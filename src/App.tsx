
import Nav from "./Component/nav";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Footer from "./Pages/footer";
import Home from "./Pages/home";
import Projects from "./Pages/projects";

function App() {
   

  return (
    <>
      <div className=" ">
        <Nav />
      <div id="/" className="  flex justify-center items-center" >
        <Home/>
      </div>
      <div id="/about" className=" flex justify-center items-center">
      <About/>
      </div>
      <div id="/projects" className=" flex justify-center items-center">
         <Projects/>
      </div>
      <div id="/contact" className="flex justify-center items-center">
        <Contact/>
      </div>
      <Footer/>
      </div>
    </>
  );
}

export default App;
