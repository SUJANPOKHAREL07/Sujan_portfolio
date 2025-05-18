import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa"

const Footer=()=>{
    return(
        <>
      
        <footer className="bg-gray-600 text-gray-300 p-5 w-full ">
      <div className="container  px-6 lg:px-16 flex flex-col lg:flex-row items-start lg:items-center">
        {/* Left Section */}
        <div className="mb-6 lg:mb-0">
          <h2 className="text-[#FFF]  text-2xl font-bold">Sujan Pokharel</h2>

          <p className="mt-4 max-w-md">
            Typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the like Aldus PageMaker including of Lorem Ipsum.
          </p>
          <button className="mt-4 border border-[#F4FFC3] text-[#F4FFC3] px-4 py-2 rounded-lg hover:bg-[#A9C46C] hover:text-gray-900">
            Read More
          </button>
        </div>

        {/* Center Section */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <h3 className="text-white font-semibold mb-3">Shop Info</h3>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
              <li>FAQs & Help</li>
            </ul>
          </div>

          <div className="w-full ">
            <h3 className="text-white font-semibold mb-2">Contact</h3>
             <div className="flex space-x-1">  <label htmlFor="">Address:</label>
            <p>Butwal-3,Goalpark</p></div>
          <div className="flex space-x-1">  <label htmlFor="">Email:</label>
            <p>officialsuzan247@gmail.com</p></div>
           
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-4 mt-4 lg:mt-4 ml-[27rem]">
        <span className="w-10 h-10 flex items-center justify-center border border-white rounded-full ">
          <a href="https://www.facebook.com/sujanpokharell" target="_blank">
            <FaFacebookF className="text-2xl" />
          </a>
        </span>
        <span className="w-10 h-10 flex items-center justify-center border border-white rounded-full">
          <a href="https://www.instagram.com/itssuzan07/" target="_blank">
            <FaInstagram className="text-2xl" />
          </a>
        </span>
        <span className="w-10 h-10 flex items-center justify-center border border-white rounded-full">
          <a href="https://github.com/SUJANPOKHAREL07" target="_blank">
            <FaGithub className="text-2xl" />
          </a>
        </span>
      </div>
    </footer>
        </>
    )
}
export default Footer