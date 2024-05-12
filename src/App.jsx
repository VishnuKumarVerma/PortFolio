import "./App.css";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Services from "./Components/Services/Services";

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <Services />
    <Projects />
    <Experience />
    <Footer />
    </>
  );
}

export default App;
