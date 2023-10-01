import React from "react";

const Experience = () => {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              <article>
                <img
                  src="/assets/stack-icons/html.svg"
                  alt="experience icon"
                  className="icon"
                />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src="/assets/stack-icons/css.svg"
                  alt="experience icon"
                  className="icon"
                />
                <div>
                  <h3>CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src="/assets/stack-icons/sass.svg"
                  alt="experience icon"
                  className="icon"
                />
                <div>
                  <h3>SASS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src="/assets/stack-icons/bootstrap.svg"
                  alt="experience icon"
                  className="icon"
                />
                <div>
                  <h3>Bootstrap</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src="/assets/stack-icons/javascript.svg"
                  alt="experience icon"
                  className="icon"
                />
                <div>
                  <h3>Javascript</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src="/assets/stack-icons/react.svg"
                  alt="experience icon"
                  className="icon"
                />
                <div>
                  <h3>ReactJS</h3>
                  <p>Basic</p>
                </div>
              </article>
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">
              Backend & Fullstack Development
            </h2>
            <div className="article-container">
              <article>
                <img
                  src="/assets/stack-icons/wordpress.svg"
                  alt="experience icon"
                  className="icon"
                />
                <div>
                  <h3>Wordpress</h3>
                  <p>Beginner</p>
                </div>
              </article>
              <article>
                <img
                  src="/assets/stack-icons/git.svg"
                  alt="experience icon"
                  className="icon"
                />
                <div>
                  <h3>Git/Github</h3>
                  <p>Basic</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/arrow.png"
        alt="arrow icon"
        className="icon arrow"
        onClick={() => (location.href = "./#projects")}
      />
    </section>
  );
};

export default Experience;
