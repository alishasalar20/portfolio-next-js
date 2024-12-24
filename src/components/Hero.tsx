"use client";
import Image from "next/image";
import 'boxicons/css/boxicons.min.css';

import About1 from "@/components/About";
// import Project1 from "@/components/Project";
// import Skills1 from "@/components/Skills";

const Home = () => {
  return (
    <div id="full-container">
      <div id="container">
        <div id="content">
          <h3>Hey, It&apos;s me</h3>
          <h1>Alisha Kafeel</h1>
          <h3>
            And I&apos;m a{" "}
            <span id="multi-text">
              {/* <TypingEffect /> */}
            </span>
          </h3>
          <p>
            A dedicated student of the Governor&apos;s Sindh IT Initiative.
            Currently, I&apos;m deepening my expertise in Next.js and Python,
            building a solid foundation for my journey in Full-stack development
            and emerging technologies.
          </p>
          <div id="social-media">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer">
              {/* <i className="bx bxl-github"></i> */}
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer">
              {/* <i className="bx bxl-linkedin"></i> */}
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer">
              {/* <i className="bx bxl-instagram"></i> */}
            </a>
          </div>
          <a href="" id="btn">
            Get Resume
          </a>
        </div>
        <div id="img">
          <Image
            src={"/h2.png"}
            alt="pics"
            width={500}
            height={500}/>
        </div>
      </div>
      {/* <About1 /> */}

      {/* <h1 id="project-heading">
        Pro<span>ject</span>
      </h1> */}
      {/* <Project1 /> */}

      {/* <h1 id="skill-heading">
        <span>My</span>&nbsp;Expertise
      </h1> */}
      {/* <Skills1 /> */}
    </div>
  );
};

export default Home;