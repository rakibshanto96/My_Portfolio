import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="./src/assets/project-1.png"
                alt="project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">25 + 5 Clock</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  (location.href =
                    "https://github.com/rakibshanto96/25_5_Clock")
                }
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  (location.href = "https://25-5-pomodoro.netlify.app/")
                }
              >
                Live Preview
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="./src/assets/project-2.png"
                alt="project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Drum Machine</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  (location.href =
                    "https://github.com/rakibshanto96/Drum_Machine")
                }
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  (location.href = "https://drumm-project.netlify.app/")
                }
              >
                Live Preview
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="./src/assets/project-3.png"
                alt="project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">
              Javascript Calculator
            </h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  (location.href =
                    "https://github.com/rakibshanto96/Javascript_Calculator")
                }
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  (location.href = "https://noobscalculator.netlify.app/")
                }
              >
                Live Preview
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src="./src/assets/arrow.png"
        alt="arrow icon"
        className="icon arrow"
        onClick={() => (location.href = "./#contact")}
      />
    </section>
  );
};

export default Projects;