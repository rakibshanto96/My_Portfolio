import React from "react";
import { TypeAnimation } from "react-type-animation";

const Profile = () => {
  const cvDownload = () => {
    window.open("./src/assets/resume-example.pdf");
  };
  const openContact = () => {
    location.href = "./#contact";
  };
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img
          id="profile-pic"
          src="./src/assets/profile-pic.png"
          alt="Rakib Shanto profile picture"
        />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello! 👋 I'm</p>
        <h1 className="title">Rakib Shanto</h1>
        <p className="section__text__p2">
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              1000,
              "Eager Learner",
              1000,
              "Problem Solver",
              1000,
            ]}
            speed={30}
            repeat={Infinity}
          />
        </p>
        <div className="btn-container">
          <button className="btn  btn-color-2" onClick={cvDownload}>
            Download CV
          </button>
          <button className="btn  btn-color-1" onClick={openContact}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src="./src/assets/linkedin.png"
            alt="My Linkedin profile"
            className="icon"
            onClick={() =>
              (location.href = "https://linkedin.com/in/rakibshanto96")
            }
          />
          <img
            src="./src/assets/github.png"
            alt="My Github profile"
            className="icon"
            onClick={() => (location.href = "https://github.com/rakibshanto96")}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
