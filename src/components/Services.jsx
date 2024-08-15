import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <>
      <article id="services">
        <h1>Services</h1>
        <section id="services_container">
          <div class="myCard">
            <div class="innerCard">
              <div class="frontSide">
                <h2 class="title">MERN Stack</h2>
                <p>hover me</p>
              </div>
              <div class="backSide">
                <div class="card_image">
                  <img
                    src="./images/MERN-Stack.webp"
                    alt="MERN Stack"
                    loading="lazy"
                  />
                </div>
                <h2 class="title">MERN Stack</h2>
                <p>
                  Developing dynamic web applications using MongoDB, Express.js,
                  React, and Node.js for high-performance solutions.
                </p>
              </div>
            </div>
          </div>

          <div class="myCard">
            <div class="innerCard">
              <div class="frontSide">
                <h2 class="title">Graphic Design</h2>
                <p>hover me</p>
              </div>
              <div class="backSide">
                <div class="card_image">
                  <img
                    src="./images/photoshop.jpg"
                    alt="Photoshop"
                    loading="lazy"
                  />
                </div>
                <h2 class="title">Graphic Design</h2>
                <p>
                  Creating visually compelling designs in Photoshop, from
                  branding to marketing materials, to effectively communicate
                  your message
                </p>
              </div>
            </div>
          </div>

          <div class="myCard">
            <div class="innerCard">
              <div class="frontSide">
                <h2 class="title">Video Editing</h2>
                <p>hover me</p>
              </div>
              <div class="backSide">
                <div class="card_image">
                  <img
                    src="./images/Adobe-AfterEffects.jpg"
                    alt="After Effects"
                    loading="lazy"
                  />
                </div>
                <h2 class="title">Video Editing</h2>
                <p>
                  Transforming raw footage into captivating videos with
                  professional editing, motion graphics, and sound design
                </p>
              </div>
            </div>
          </div>

          <div class="myCard">
            <div class="innerCard">
              <div class="frontSide">
                <h2 class="title">Machine Learning</h2>
                <p>hover me</p>
              </div>
              <div class="backSide">
                <div class="card_image">
                  <img
                    src="./images/MachinLearning.jpg"
                    alt="Ai"
                    loading="lazy"
                  />
                </div>
                <h2 class="title">ML</h2>
                <p>
                  Building intelligent systems using advanced machine learning
                  techniques for data-driven insights and automation.
                </p>
              </div>
            </div>
          </div>

          <div class="myCard">
            <div class="innerCard">
              <div class="frontSide">
                <h2 class="title">Python</h2>
                <p>hover me</p>
              </div>
              <div class="backSide">
                <div class="card_image">
                  <img src="./images/python.webp" alt="Python" loading="lazy" />
                </div>
                <h2 class="title">Python</h2>
                <p>
                  Providing versatile Python solutions for web development, data
                  analysis, and automation tailored to your needs.
                </p>
              </div>
            </div>
          </div>

          <div class="myCard">
            <div class="innerCard">
              <div class="frontSide">
                <h2 class="title">C++</h2>
                <p>hover me</p>
              </div>
              <div class="backSide">
                <div class="card_image">
                  <img src="./images/CPP.png" alt="CPP" loading="lazy" />
                </div>
                <h2 class="title">C++</h2>
                <p>
                  Developing high-performance applications with C++ for
                  software, game development, and real-time simulations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default Services;
