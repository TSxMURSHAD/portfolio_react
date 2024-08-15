import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <article id="home">
        <section>
          <div class="container">
            <h1>
              Hi,
              <br />
              I'm <span>Malik Hadi</span>
            </h1>
            <h2>
              MERN Stack Developer <br />
              Graphic Designer
            </h2>
            <p>
              I'm a passionate and dedicated B.Sc. Computer Science student with
              half my degree completed, I'm a versatile developer skilled in
              MERN stack development, graphic design, and video editing. I'm
              passionate about crafting innovative digital solutions and
              bringing creative ideas to life. Let's collaborate and build
              exceptional projects together!
            </p>
            <Link to="/about">
              <button class="btn">Know More</button>
            </Link>
          </div>
          <img src="./images/Profile.jpg" alt="profile" loading="lazy" />
        </section>
      </article>
    </>
  );
};

export default Home;
