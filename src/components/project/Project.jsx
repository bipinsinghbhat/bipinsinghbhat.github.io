import React from "react";
import "./project.css";
import expedia from "../../assets/expedia.png";
import dsw from "../../assets/dsw.png";
import lr from "../../assets/limeroad.png";
import bmi from "../../assets/bmi.png";
import { Github } from "../github/Github";

export const Project = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="container portfolio_container">
        <article class="project-card">
          <div className="portfolio_item-img">
            <img src={expedia} alt="expedia" />
          </div>
          <h3 class="project-title">Clone of GeekBuying</h3>
          <p class="project-description">
            {" "}
            GeekBuying is a store that resells other brand’s products, so they aren’t exactly located in one location.{" "}
          </p>
          <p class="project-tech-stack"> <h4>Tech Stacks:</h4>  HTML | CSS | JAVASCRIPT | REACT | CHAKRA-UI</p>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/bipinsinghbhat/imaginary-blood-7556"
              target="_blank"
              class="project-github-link"
            >
              GitHub
            </a>
            <a
              href="https://kaleidoscopic-choux-b3855f.netlify.app/"
              target="_blank"
              class="project-deployed-link"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article class="project-card">
          <div className="portfolio_item-img">
            <img src={dsw} alt="expedia" />
          </div>
          <h3 class="project-title">Clone of Basspro.com</h3>
          <p class="project-description">
          It is the collaborative project and it is clone from the wbsite Basspro.com
          </p>
          <p class="project-tech-stack"> <h4>Tech Stacks:</h4>HTML | CSS | JS </p>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/ashishparate66/-violent-market-7865"
              target="_blank"
              class="project-github-link"
            >
              GitHub
            </a>
            <a
              href="https://spiffy-tapioca-4b2d86.netlify.app/"
              target="_blank"
              class="project-deployed-link"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article class="project-card">
          <div className="portfolio_item-img">
            <img src={lr} alt="expedia" />
          </div>
          <h3 class="project-title">Clone of C. & J. Clark</h3>
          <p class="project-description">
          C. & J. Clark International Ltd, doing business as Clarks, is a British international shoe manufacturer and retailer. It was founded in 1825 by Cyrus Clark
          </p>
          <p class="project-tech-stack"><h4>Tech Stacks:</h4> HTML | CSS | JavaScript </p>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/bipinsinghbhat/whimlash-machine-475"
              target="_blank"
              class="project-github-link"
            >
              GitHub
            </a>
            <a
              href="https://skinstore-lemon.vercel.app/"
              target="_blank"
              class="project-deployed-link"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article class="project-card">
          <div className="portfolio_item-img">
            <img src={bmi} alt="expedia" />
          </div>
          <h3 class="project-title">Clone of Youtube</h3>
          <p class="project-description">
            Create a replicative design of the popular video-sharing platform,
            YouTube, utilizing HTML, CSS &JavaScript as the primary technologies
          </p>
          <p class="project-tech-stack"><h4>Tech Stacks:</h4>HTML | CSS | JavaScript</p>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/shivammchaudhary1/youtube-clone"
              target="_blank"
              class="project-github-link"
            >
              GitHub
            </a>
            <a
              href="https://poetic-liger-38b8f6.netlify.app/"
              target="_blank"
              class="project-deployed-link"
            >
              Live Demo
            </a>
          </div>
        </article>

        {/* <Github/> */}
      </div>
    </section>
  );
};
