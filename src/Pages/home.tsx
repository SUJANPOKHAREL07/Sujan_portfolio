import { FaArrowAltCircleDown } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <>
      <div data-aos="fade-in" className="bg-gray-800 h-[567px] p-35 mt-15 w-full">
        <div  className="flex gap-3 font-bold text-3xl text-white ">
          <h1>Hello I'm </h1>
          <label htmlFor="">
            Sujan Pokharel-
            <label className="text-2xl text-purple-300  font-bold">
              <TypeAnimation
                sequence={[
                  " Full-Stack Developer",
                  120,
                  " MERN-Stack Developer",
                  120,
                ]}
                wrapper="span"
                speed={20}
                className="text-purple-300"
                repeat={Infinity}
              />
            </label>
          </label>
        </div>

        <div className="text-white p-2 flex ">
          <p className="w-[60rem]">
            {" "}
            Hi, I'm Sujan Pokharel, a 6th semester BCA student at Crimson
            College of Technology, affiliated with Pokhara University. I'm
            currently a MERN stack development intern, where I’m gaining
            practical experience in building full-stack web applications using
            MongoDB, Express.js, React, and Node.js. I'm passionate about
            coding, problem-solving, and creating user-friendly digital
            solutions. I enjoy learning new technologies and working on
            real-world projects that challenge me to grow as a developer.
          </p>

          <div className="  ">
            <img
            data-aos="fade-up"
              className="h-69 w-75 rounded-l-full rounded-r-full ml-20 my-[-5rem] "
              src="public\profile.png"
              alt="profile-pic"
            />
          </div>
        </div>
        <button className=" flex ml-9  font-bold text-white bg-purple-300 w-fit  rounded-md h-8 border-b-4 border-purple-300 hover:border-purple-300 hover:bg-purple-100 hover:text-purple-400 ">
          Download Cv <FaArrowAltCircleDown className="mt-[5px] ml-1" />
        </button>
      </div>
    </>
  );
};
export default Home;
