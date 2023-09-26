import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import "./styles/Navbar.css";
import "./styles/Profile.css";
import "./styles/About.css";
import "./styles/Experience.css";
import "./styles/Projects.css";

function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <About />
      <Experience />
      <Projects />
    </>
  );
}

export default App;
