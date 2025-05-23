
import { FaArrowAltCircleDown } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div
      data-aos="fade-in"
      className="bg-gray-800 min-h-screen w-full px-4 md:px-20 py-10"
    >
      {/* Introduction */}
      <div className="text-white text-2xl md:text-4xl font-bold  flex flex-col md:flex-row gap-2 md:items-center md:mt-10" >
        <h1>Hello I'm</h1>
        <div className="flex items-center gap-2 ">
          <span>Sujan Pokharel -</span>
          <TypeAnimation
            sequence={[
              " Full-Stack Developer",
              200,
              " MERN-Stack Developer",
              200,
            ]}
            wrapper="span"
            speed={5}
            className="text-purple-300 text-xl md:text-2xl font-semibold"
            repeat={Infinity}
          />
        </div>
      </div>

      {/* About & Image Section */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-5 md:mt-[-2rem] ">
        {/* About Text */}
        <div className="text-white text-justify w-full md:w-2/3">
          <p>
            Hi, I'm Sujan Pokharel, a 6th semester BCA student at Crimson
            College of Technology, affiliated with Pokhara University. I'm
            currently a MERN stack development intern, gaining practical
            experience building full-stack web applications using MongoDB,
            Express.js, React, and Node.js. I'm passionate about coding,
            problem-solving, and creating user-friendly digital solutions. I
            enjoy learning new technologies and working on real-world projects
            that challenge me to grow as a developer.
          </p>
        </div>

        {/* Profile Image */}
        <div data-aos="fade-up" className="w-full md:w-1/3 flex justify-center">
          <img
            src="public/profile.png"
            alt="profile-pic"
            className="w-40 h-40 md:w-64 md:h-64 object-cover rounded-full border-4 border-purple-300"
          />
        </div>
      </div>

      {/* Download CV Button */}
      <div className="mt-1 md:mt-[-3rem] flex justify-center md:justify-start">
        <a
          href="public/Sujan-Pokharel-cv.pdf"
          download
          className="flex items-center gap-2 px-6 py-2 bg-purple-300 text-white font-semibold rounded-md border-b-5 border-purple-300 hover:bg-purple-100 hover:text-purple-400 transition-all"
        >
          Download CV <FaArrowAltCircleDown />
        </a>
      </div>
    </div>
  );
};

export default Home;
