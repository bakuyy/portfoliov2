import React from "react";
import Typewriter from "typewriter-effect";
import Project from "../components/Project";
import "../styling/Projects.css";
import { SiDevpost } from "react-icons/si";
import { FaGithub, FaYoutube } from "react-icons/fa";
import Proj1 from "../styling/projIcons/proj1.png";
import Proj2 from "../styling/projIcons/proj2.png";
import Proj3 from "../styling/projIcons/proj3.png";
import Proj4 from "../styling/projIcons/proj4.png";
import Proj5 from "../styling/projIcons/proj5.png";
import Proj6 from "../styling/projIcons/proj6.png";
import Proj7 from "../styling/projIcons/proj7.png";
import Proj8 from "../styling/projIcons/proj8.png";
import Proj9 from "../styling/projIcons/proj9.png";
import Proj10 from "../styling/projIcons/proj10.png";
import Proj11 from "../styling/projIcons/proj11.png";
import { motion } from "framer-motion"
import Rainbow from "../assets/Rainbow.png"
import Ideaman from "../assets/Ideaman.gif"
import Plane from "../assets/Plane.gif"

const Projects = () => {
  const projects = [
    {
      Id: 1,
      Name: "Thrift",
      Image: Proj1,
      TechStack: ["Python", "Flask", "HTML/CSS"],
      Desc: "A google chrome extension helping shoppers shop sustainably. It suggests similar second-hand items that the user is browsing but are cheaper and can be upcycled.",
      Links: [
        {
          icon: <SiDevpost size={28} />,
          url: "https://devpost.com/software/thrift-ys09e8",
        },
        {
          icon: <FaGithub size={28} />,
          url: "https://github.com/bakuyy/thrift",
        },
      ],
    },
    {
      Id: 2,
      Name: "Ready",
      Image: Proj2,
      TechStack: ["HTML/CSS", "React", "AlanAI"],
      Desc: "A platform that aims to make learning English accessible and make illiteracy a thing of the past. Users can learn the basic English alphabet with audio and practice reading short stories with the help of Red (Ready's very own voice assistant).",
      Links: [
        {
          icon: <SiDevpost size={28} />,
          url: "https://devpost.com/software/ready-o128ul",
        },
        {
          icon: <FaGithub size={28} />,
          url: "https://github.com/bakuyy/Ready",
        },
      ],
    },
    {
      Id: 3,
      Name: "RaveOn",
      Image: Proj3,
      TechStack: ["HTML/CSS", "React"],
      Desc: "It's like Tinder, but instead of people, you swipe for music! The platform will automatically generate a random song off the internet, allowing the user to listen to it, skip to another song (swipe left), or favorite the song (swipe right)!",
      Links: [
        {
          icon: <SiDevpost size={28} />,
          url: "https://devpost.com/software/raveon",
        },
        {
          icon: <FaGithub size={28} />,
          url: "https://github.com/bakuyy/raveon",
        },
      ],
    },
    {
      Id: 4,
      Name: "CodeBro",
      Image: Proj4,
      TechStack: [
        "Figma",
        "React",
        "CodeMirror",
        "Tailwind CSS",
        "TypeScript",
        "Github",
      ],
      Desc: "An offline programming suite that allows users to practice both their web design and competitive problem-solving skills.",
      Links: [
        {
          icon: <SiDevpost size={28} />,
          url: "https://devpost.com/software/codebro",
        },
        {
          icon: <FaGithub size={28} />,
          url: "https://github.com/AritroSaha10/HappyBirthdayMLH-Project",
        },
      ],
    },
    {
      Id: 5,
      Name: "MyHealthcEHR",
      Image: Proj5,
      TechStack: [
        "Cohere",
        "Java",
        "Javascript",
        "Tailwind CSS",
        "React",
        "SQL",
        "SpringBoot",
      ],
      Desc: "Our platform aims to revolutionize healthcare by centralizing patients' electronic health records, enabling them to access their medical information in one place, saving time, reducing costs, and improving healthcare quality.",
      Links: [
        {
          icon: <SiDevpost size={28} />,
          url: "https://devpost.com/software/myhealthcehr",
        },
        {
          icon: <FaGithub size={28} />,
          url: "https://github.com/Real1236/methacks",
        },
      ],
    },
    {
      Id: 6,
      Name: "GreenCart",
      Image: Proj6,
      TechStack: [
        "Tailwind CSS",
        "Flask",
        "HTML/CSS",
        "Python",
        "React",
        "Pandas",
        "OpenAI",
      ],
      Desc: "The grocery delivery website extension offers users a convenient way to access detailed environmental impact information and eco-friendly alternatives for food items, accessible through a simple click on the extension's icon.",
      Links: [
        {
          icon: <SiDevpost size={28} />,
          url: "https://devpost.com/software/greencart",
        },
        {
          icon: <FaGithub size={28} />,
          url: "https://github.com/EnamiYa/Green-Cart",
        },
      ],
    },
    {
      Id: 7,
      Name: "HyperX YinYang I",
      Image: Proj7,
      TechStack: ["Figma"],
      Desc: "The HyperX YINYANG I model was created to bring something new, and to ultimately revolutionize how gamers and average joes come to use headphones.",
      Links: [
        {
          icon: <SiDevpost size={28} />,
          url: "https://devpost.com/software/hyperx-yinyang-i",
        },
      ],
    },
    {
      Id: 8,
      Name: "Emergenchain",
      Image: Proj8,
      TechStack: ["Tailwind CSS", "Deso", "React", "Framer", "Figma"],
      Desc: "A website that stores medical records on the blockchain for convenience and emergency access. Emergenchain offers secure medical record storage, vaccine certificates, and emergency summary sheets accessible through QR codes, providing comprehensive healthcare information for efficient treatment in emergency situations.",
      Links: [
        {
          icon: <SiDevpost size={28} />,
          url: "https://devpost.com/software/health-hub-hi0tmo",
        },
        {
          icon: <FaGithub size={28} />,
          url: "https://github.com/edisonqu/emergenchain",
        },
      ],
    },
    {
      Id: 9,
      Name: "Keynotes",
      Image: Proj9,
      TechStack: [
        "Cohere",
        "Tailwind CSS",
        "MongoDB",
        "Python",
        "NextJS",
        "React",
      ],
      Desc: "KeyNote is an AI-powered note-taking device and web-app that simplifies lecture review by providing summaries of key concepts from recorded lectures, offering a chat feature for lecture-specific questions, and enabling users to annotate and edit notes for personalized learning experiences.",
      Links: [
        {
          icon: <SiDevpost size={28} />,
          url: "https://devpost.com/software/keynotes",
        },
        {
          icon: <FaGithub size={28} />,
          url: "https://github.com/car1zhang/htn-2023",
        },
      ],
    },
    {
      Id: 10,
      Name: "Real-time Weather Man",
      Image: Proj10,
      TechStack: ["Javascript", "Tailwind CSS", "HTML/CSS", "JSON"],
      Desc: "A weather app that calls real-time data from an API, allowing you to compare cities seamlessly. This project was inspired by my grandpa, who always makes sure that I'm dressed for the weather, despite being across the world!",
      Links: [
        { icon: <FaYoutube size={28} />, url: "https://youtu.be/IqYnqtK9X4g" },
        {
          icon: <FaGithub size={28} />,
          url: "https://github.com/bakuyy/weather-app",
        },
      ],
    },
    {
      Id: 11,
      Name: "Humidity and Temperature Checker",
      Image: Proj11,
      TechStack: [
        "C++",
        "Arduino",
        "Javascript",
        "Tailwind CSS",
        "HTML/CSS",
        "Flask",
      ],
      Desc: "My first hardware project! I built this using C++ and the DHT sensor takes in humidity and temperature levels real-time and displays it on the LCD. Super interesting to learn, and I'm excited to explore hardware further! **update: since then, I have connected it to a front-end built using React, which transmits data using Pyserial and a Flask backend.",
      Links: [
        { icon: <FaYoutube size={28} />, url: "https://youtu.be/rJGLvJFm_hU" },
        {
          icon: <FaYoutube size={28} />,
          url: "https://www.youtube.com/watch?v=PU6FYD92_7o",
        },
      ],
    },
  ];

  return (
    <div className="projects-container">
      <div className="typewriter-container">
      <img src={Ideaman} alt="Ideaman" className="ideaman"/>
      <div className="typewriter">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("ideas")
              .typeString("   ")
              .pauseFor(1500)
              .typeString("   ")
              .typeString("··········")
              .typeString("   ")
              .pauseFor(1500)
              .typeString("reality.")
              .typeString("   ")
              .pauseFor(1000)
              .start();
          }}
          options={{
            cursor: "",
            delay: 50,
          }}
        />
      </div>
      <img className="plane" src={Plane} alt="Plane"/>

      </div>

      <div>
  <img className="rainbow" src={Rainbow} alt="Rainbow" />

  <div className="proj-title noto-home">projects</div>
</div>

      <div className="w-full flex flex-col items-center">
        {projects.reverse().map((project, index) => (
          <motion.div
            key={project.Id}
            className="p-4 w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <Project
              title={project.Name}
              image={project.Image || "path/to/placeholder.png"}
              desc={project.Desc}
              techstack={project.TechStack}
              links={project.Links}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
