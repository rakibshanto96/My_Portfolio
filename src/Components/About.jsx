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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              fugit sequi veritatis eos velit, soluta quidem praesentium, esse
              non, exercitationem laborum autem ullam! Commodi, magni, veritatis
              saepe delectus dolores, expedita temporibus dolore quis hic quod
              sapiente eligendi explicabo tempore doloribus quidem eaque maxime
              sed animi quisquam! Cupiditate nihil similique ipsa!
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
