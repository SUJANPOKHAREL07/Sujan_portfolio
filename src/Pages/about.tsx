import { PiSuitcaseSimpleLight } from "react-icons/pi";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const About = () => {
    useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
          // only animate once
    });
  }, []);
  const experience = [
    {
      key: 1,
      title: "MERN Stack Development",
      started: "2024 - Present",
      subheading: "Freelance & Personal Projects",
      description:
        "Actively developing responsive and user-friendly web interfaces while expanding skills into backend development. Created small full-stack projects to understand data handling, APIs, and server-side logic. Focused on building clean UIs and improving development workflows through version control and modern tools.",
      keytag1: "MERN",
      keytag2: "Figma",
      keytag3: "GitHub",
    },
    
    {
      key: 2,
      title: "Exploring Web Development",
      started: "2021 - 2022",
      subheading: "Self-Learning & Freelance Projects",
      description:
        "Started learning the fundamentals of web development through online courses, tutorials, and small freelance tasks. Focused on building static and dynamic websites, understanding the basics of frontend and backend technologies, and experimenting with design and layout tools.",
      keytag1: "HTML, CSS, JavaScript",
      keytag2: "Figma, Adobe Illustrator, Photoshop",
      keytag3: "Git, GitHub, Netlify",
    },
  ];
  const education = [
    {
      title: "Bachelor In Computer Application (BCA)",
      duration: "2022 - Present",
      institution: "Pokhara University, CCT",
      description:
        "Focused on core areas of computer applications including programming, database management, web development, computer networks, and software engineering. Emphasis on building practical skills for real-world problem-solving and system development.",
      tags: [
        "Database Management",
        "Web Technologies",
        "Programming Languages",
      ],
    },
     {
      title: "+2",
      duration: "2020 - 2022",
      institution: "Oxfor Secondary School",
      description:
        "Focused on core areas of computer applications including programming, database management, web development, computer networks, and software engineering. Emphasis on building practical skills for real-world problem-solving and system development.",
      tags: [
       
        "Overall Management",
        "Basic Programming ",
      ],
    },
  ];
  return (
    <>
      <section className="px-15 bg-gray-800  ">
        {/*  */}
        <div className="flex flex-row-reverse gap-9">
            {/* this is exp */}
          <div className="">
            <h2 className="text-2xl text-left mb-8 font-bold text-white " >Experience</h2>
            {experience.map((exp, key) => (
              <div
                key={key}
                className="pl-8 pb-8 border-l mb-5 border-white relative"
              >
                <div data-aos="fade-in" className="h-5 w-5 p-1 flex items-center justify-center rounded-full left-[-1.3rem] 0border-1 border-white translate-1/2 top-[-1rem] absolute">
                  <PiSuitcaseSimpleLight className="text-xs text-purple-300 text-center" />
                </div>
                <div data-aos="fade-in" className="border p-3 md:p-8 rounded-lg border-white bg-purple-400/50 mb-3">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                    <h2 className="text-xl text-left font-bold text-white">{exp.title}</h2>
                    <p className="text-xs border px-2 rounded-2xl border-white text-white font-medium " >
                      {exp.started}
                    </p>
                  </div>
                  <p className="mb-1 text-xs text-white text-left">
                    {exp.subheading}
                  </p>
                  <p className="text-white text-sm text-left mb-3">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-xs border px-2 rounded-2xl font-medium text-blue border-blue-500/50 bg-green-500/50  text-gray-50/80">
                      {exp.keytag1}
                    </p>
                    <p className="text-xs  px-2 rounded-2xl font-medium text-gray-50/80 bg-red-500/50">
                      {exp.keytag2}
                    </p>
                    <p className="text-xs  font-medium px-2 rounded-2xl  text-blue bg-gray-900/50 text-gray-50/80 ">
                      {exp.keytag3}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        {/* thi is education */}
        <div>
            <h2 className="text-2xl text-white text-left mb-8 font-bold">Education</h2>
            {education.map((edu, index) => (
              <div
                key={index}
                className="pl-8 pb-8  border-white  relative"
              >
                
                <div data-aos="fade-in" className="border p-3 md:p-8 rounded-lg border-white bg-purple-400/50  mb-3">
                  <div  className="flex justify-between items-center flex-wrap gap-2">
                    <h2 className="text-xl text-white font-bold text-left">{edu.title}</h2>
                    <p className="text-xs border h-fit px-2 rounded-2xl border-white text-white font-medium mb-3">
                      {edu.duration}
                    </p>
                  </div>
                  <p className="mb-1 text-white  text-xs  text-left">
                    {edu.institution}
                  </p>
                  <p className="text-white text-sm text-left mb-3">
                    {edu.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {edu.tags.map((tag, i) => (
                      <p
                        key={i}
                        className={`text-xs  px-2 rounded-2xl font-extralight ${
                          i === 0
                            ?  "border-blue-500/50 bg-green-500/50 text-gray-50/80 font-medium"
                            : i === 1
                            ? "font-medium text-gray-50/80 bg-red-500/50    "
                            : "text-blue font-medium bg-gray-900/50 text-gray-50/80"
                        }`}
                      >
                        {tag}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </section>
    </>
  );
};
export default About;
