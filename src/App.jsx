import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./styles/Navbar.css";
import "./styles/Profile.css";
import "./styles/About.css";
import "./styles/Experience.css";
import "./styles/Projects.css";
import "./styles/Contact.css";
import "./styles/Footer.css";

function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
