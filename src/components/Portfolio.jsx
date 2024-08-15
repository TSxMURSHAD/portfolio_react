import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <>
      <article id="portfolio">
        <h1>Portfolio Gallery</h1>
        <section id="portfolio_container">
          <a href="https://tsxmurshad.github.io/portfolio1/">
            <div class="galleryItem">
              <img
                class="galleryImage"
                src="./images/portfolio/Project1.png"
                alt="Project1"
                loading="lazy"
              />
              <h3 class="name">Responsive Portfolio</h3>
            </div>
          </a>
          <a href="https://tsxmurshad.github.io/ProfileCard/">
            <div class="galleryItem">
              <img
                class="galleryImage"
                src="./images/portfolio/Project2.png"
                alt="Project2"
                loading="lazy"
              />
              <h3 class="name">Profile Card</h3>
            </div>
          </a>
          <a href="https://tsxmurshad.github.io/AgeCalculator/">
            <div class="galleryItem">
              <img
                class="galleryImage"
                src="./images/portfolio/Project3.png"
                alt="Project3"
                loading="lazy"
              />
              <h3 class="name">Age Calculator</h3>
            </div>
          </a>
          <a href="https://tsxmurshad.github.io/cara/">
            <div class="galleryItem">
              <img
                class="galleryImage"
                src="./images/portfolio/Project4.png"
                alt="Project4"
                loading="lazy"
              />
              <h3 class="name">E-commerce</h3>
            </div>
          </a>
          <a href="https://tsxmurshad.github.io/TicTacToe/">
            <div class="galleryItem">
              <img
                class="galleryImage"
                src="./images/portfolio/Project5.png"
                alt="Project5"
                loading="lazy"
              />
              <h3 class="name">Tic Tac Toe</h3>
            </div>
          </a>
          <a href="https://tsxmurshad.github.io/RockPaperScissor/">
            <div class="galleryItem">
              <img
                class="galleryImage"
                src="./images/portfolio/Project6.png"
                alt="Project6"
                loading="lazy"
              />
              <h3 class="name">Rock, Paper, Scissors</h3>
            </div>
          </a>
        </section>
      </article>
    </>
  );
};

export default Portfolio;
