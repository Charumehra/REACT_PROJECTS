import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import TypedText from "./components/TypedText";
import charu_photo from "./assets/charu_photo.jpg";
import png1 from "./assets/png1.png";
import png2 from "./assets/png2.png";
import png3 from "./assets/png3.png";
import png4 from "./assets/png4.png";
import png5 from "./assets/png5.png";
import png6 from "./assets/png6.png";



function App() {
  const contactRef = useRef(null);

  const scrollToForm = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400 text-5xl" />,
    },
    { name: "React", icon: <FaReact className="text-cyan-400 text-5xl" /> },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss className="text-sky-400 text-5xl" />,
    },
    { name: "Git", icon: <FaGitAlt className="text-red-500 text-5xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-white text-5xl" /> },
  ];

  return (
    <div className="bg-gradient-to-br from-[#1a0b2e] via-[#0a0216] to-[#000000] text-gray-200 min-h-screen font-sans">
      {/* Navbar */}
      <header className="fixed top-6 left-0 right-0 mx-auto w-[calc(100%-120px)] h-20 bg-[rgba(255,255,255,0.08)] backdrop-blur-xl border border-white/20 rounded-full px-6 flex justify-between items-center z-50 shadow-lg">
        <img
          src={charu_photo}
          alt="Charu Logo"
          className="h-12 w-12 rounded-full border-2 border-purple-400"
        />
        <ul className="hidden md:flex gap-6 text-white font-medium">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-purple-400 hover:scale-125 transition duration-300 inline-block"
              >
                &lt;/{item}&gt;
              </a>
            </li>
          ))}
        </ul>
        <button className="md:hidden text-white text-3xl">☰</button>
      </header>

      {/* Hero Section */}

      <section
        id="home"
        className="pt-40 px-6 text-center flex flex-col md:flex-row items-center justify-center gap-10"
      >
        
        <div className="md:w-1/2 flex flex-col items-center md:items-start">
          {/* Animated Intro Text */}
          <div className="flex gap-1 text-2xl text-gray-300 font-mono">
            {"Namaste(); I'm".split("").map((ch, i) => (
              <p
                key={i}
                className="hover:text-purple-400 hover:scale-150 hover:-translate-y-2 transition-transform duration-200 cursor-pointer inline-block"
              >
                {ch}
              </p>
            ))}
          </div>

          {/* Main Heading - letter by letter */}
          <h1 className="text-6xl sm:text-7xl font-extrabold mt-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent flex flex-wrap gap-1">
            {"Charu Mehra".split("").map((ch, i) => (
              <span
                key={i}
                className="hover:scale-150 hover:text-purple-400 transition-transform duration-300 cursor-pointer inline-block"
              >
                {ch}
              </span>
            ))}
          </h1>

          {/* Subheading - letter by letter */}
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-100 mt-6 flex flex-wrap gap-1">
            {"I design & code for web.".split("").map((ch, i) => (
              <span
                key={i}
                className="hover:scale-150 hover:text-blue-400 transition-transform duration-300 cursor-pointer inline-block"
              >
                {ch}
              </span>
            ))}
          </h2>

          {/* About Text */}
          <p className="mt-6 max-w-xl text-gray-300 text-lg">
            Web Developer with experience in Digital Concept Arts, Frontend Web
            Designs.
          </p>

          {/* Button */}
          <div className="mt-8">
            <button
              onClick={scrollToForm}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:scale-110 transition"
            >
              ✨ Get In Touch!
            </button>
          </div>
        </div>

        {/* Right Side Coding Animation */}
        <div className="md:w-1/2 bg-black/40 p-6 rounded-xl shadow-lg text-left font-mono text-green-400 text-lg w-full max-w-md">
          <TypedText />
        </div>
      </section>

      {/* About Section */}
      
      
<section id="about" className="py-20 px-6 relative">
  <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
    &lt;/About Me&gt;
  </h2>

  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-[rgba(255,255,255,0.05)] backdrop-blur-xl rounded-2xl p-10 shadow-xl border border-white/10 hover:border-purple-500/50 hover:shadow-purple-500/20 transition-all duration-500"
  >
    {/* Profile Image */}
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-purple-400 shadow-lg overflow-hidden transform transition duration-500 group-hover:scale-110 group-hover:shadow-purple-500/50">
        <img
          src={charu_photo}
          alt="Charu Mehra"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-full border-4 border-purple-500 blur-md animate-pulse opacity-70 group-hover:opacity-100 transition"></div>
    </motion.div>

    {/* Bio */}
    <motion.div
      initial={{ x: 80, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-center md:text-left space-y-6"
    >
      <h3 className="text-3xl font-bold text-purple-300 hover:text-pink-400 transition duration-300 cursor-pointer">
        Hi, I'm Charu 👋
      </h3>

      <p className="text-lg text-gray-300 leading-relaxed hover:text-gray-100 transition duration-300 cursor-default">
        I’m <span className="text-pink-400 font-semibold hover:text-pink-300">Charu Mehra</span>, a
        passionate{" "}
        <span className="text-purple-400 font-semibold hover:text-purple-300">
          Frontend Developer
        </span>{" "}
        and a final year{" "}
        <span className="text-blue-400 font-semibold hover:text-blue-300">
          B.Tech CSE student
        </span>{" "}
        at Maharishi Dayanand University.
      </p>

      <p className="text-lg text-gray-300 leading-relaxed hover:text-gray-100 transition duration-300 cursor-default">
        My journey in tech started with curiosity for how websites work, and
        over time, I developed a love for{" "}
        <span className="text-purple-400 font-semibold hover:text-purple-300">
          crafting clean, interactive, and responsive interfaces
        </span>
        . I enjoy transforming creative ideas into functional digital products
        that not only look good but also deliver{" "}
        <span className="text-pink-400 font-semibold hover:text-pink-300">
          seamless user experiences
        </span>.
      </p>

      <p className="text-lg text-gray-300 leading-relaxed hover:text-gray-100 transition duration-300 cursor-default">
        Apart from coding, I like exploring design trends, continuously learning
        new technologies, and contributing to projects that make an impact. My
        goal is to become a{" "}
        <span className="text-blue-400 font-semibold hover:text-blue-300">
          well-rounded Frontend Engineer
        </span>{" "}
        and eventually grow into a{" "}
        <span className="text-purple-400 font-semibold hover:text-purple-300">
          Full-Stack Developer
        </span>.
      </p>
    </motion.div>
  </motion.div>
</section>




      {/* Skills Section */}

      <section id="skills" className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          &lt;/Skills&gt;
        </h2>

        <div className="max-w-5xl mx-auto space-y-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
            {skills.slice(0, 5).map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.1, rotate: 3 }}
                className="w-36 p-6 bg-[rgba(255,255,255,0.07)] backdrop-blur-xl rounded-xl shadow-md hover:shadow-purple-500/50 flex flex-col items-center border border-white/10"
              >
                {skill.icon}
                <p className="mt-3 text-lg font-semibold">{skill.name}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-8">
            {skills.slice(5).map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.1, rotate: 3 }}
                className="w-36 p-6 bg-[rgba(255,255,255,0.07)] backdrop-blur-xl rounded-xl shadow-md hover:shadow-purple-500/50 flex flex-col items-center border border-white/10"
              >
                {skill.icon}
                <p className="mt-3 text-lg font-semibold">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}

      <section id="projects" className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          &lt;/Projects&gt;
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Currency Converter",
              desc: "A personal portfolio to showcase skills, projects, and contact info.",
              img: png2,
              link: "#",
            },
            {
              title: "E-Commerce Site",
              desc: "An online shopping platform with product listings and cart system.",
              img: png5,
              link: "#",
            },
            {
              title: "Weather App",
              desc: "A live weather forecasting app using APIs for real-time data.",
              img:png6,
              link: "#",
            },
            {
              title: "Routing site",
              desc: "A simple routing site using React Router.",
              img: png4,
              link: "#",
            },
            {
              title: "BMI Calculator",
              desc: "An app to calculate Body Mass Index with responsive UI.",
              img: png1,
              link: "#",
            },
            {
              title: "Guess the Number Game",
              desc: "A simple game based on js where the user has to guess a number.",
              img: png3,
              link: "#",
            },
          ].map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ scale: 1.05 }}
              className="bg-[rgba(255,255,255,0.07)] backdrop-blur-lg rounded-xl shadow-md hover:shadow-purple-500/40 border border-white/10 overflow-hidden flex flex-col"
            >
              {/* Project Image */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 flex-grow">{project.desc}</p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:scale-105 transition"
                >
                  🔗 View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <footer
        id="contact"
        ref={contactRef}
        className="py-20 px-6 text-center border-t border-gray-700"
      >
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          &lt;/Contact&gt;
        </h2>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          action="https://api.web3forms.com/submit"
          method="POST"
          className="max-w-lg mx-auto flex flex-col gap-4 bg-[rgba(255,255,255,0.08)] backdrop-blur-xl p-8 rounded-xl shadow-lg border border-white/10"
        >
          <input
            type="hidden"
            name="access_key"
            value="b22bf469-b09c-493d-bea1-f45bcc5ca380"
          />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 rounded bg-white/90 text-black focus:outline-purple-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 rounded bg-white/90 text-black focus:outline-purple-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="p-3 rounded bg-white/90 text-black focus:outline-purple-400"
            required
          ></textarea>
          <button
            type="submit"
            className="py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:scale-105 transition"
          >
            🚀 Send Message
          </button>
        </motion.form>

        <p className="text-gray-400 mt-6">Made with ❤️ by Charu Mehra</p>
      </footer>
    </div>
  );
}

export default App;
