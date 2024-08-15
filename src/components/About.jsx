import React from "react";
import "./About.css"

const About = () => {
  return (
    <>
      <article id="about">
        <section>
          <div class="container">
            <h1>About Me</h1>
            <p>
              I am{" "}
              <span class="name">
                <strong>Malik Hadi</strong>
              </span>
              , a dedicated and results-driven individual with a strong
              background in <span>computer science</span>. I have honed my
              skills in software development, particularly in
              <span>web technologies</span>, and have hands-on experience
              working with the{" "}
              <span>
                <strong>MERN stack</strong>
              </span>
              . My educational journey has equipped me with a solid foundation
              in programming, algorithms, and data structures. I have also been
              involved in various projects that demonstrate my ability to apply
              theoretical knowledge to practical problems. In addition to my
              technical expertise, I possess strong
              <span>graphic designing</span> skills, enabling me to create
              visually appealing and user-friendly interfaces. I am passionate
              about continuous learning and am always eager to take on new
              challenges to further enhance my skills and contribute to
              innovative projects.
            </p>
            <a href="https://drive.google.com/file/d/1JIHwUQBfRI9b95ImGjgxGrIKC2p43xU1/view">
              <button class="btn">Download CV</button>
            </a>
          </div>
        </section>
      </article>
    </>
  );
};

export default About;
