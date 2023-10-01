import React from "react";

const About = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src="./src/assets/about-pic.jpg"
            alt="About Pic"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src="./src/assets/experience.png"
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>
                1+ year <br /> Frontend Development
              </p>
            </div>
            <div className="details-container">
              <img
                src="./src/assets/education.svg"
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>
                B.Sc in Electronics and Communication Engineering <br />
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              I'm a self-taught front-end developer, passionate about crafting
              dynamic web experiences and also solving coding related problems.
              I've applied my skills by building various projects. My passion
              lies in creating intuitive and engaging web experiences, and I'm
              excited to take on new challenges and opportunities in the field.
            </p>
          </div>
        </div>
        <img
          src="./src/assets/arrow.png"
          alt="arrow icon"
          className="icon arrow"
          onClick={() => (location.href = "./#experience")}
        />
      </div>
    </section>
  );
};

export default About;
