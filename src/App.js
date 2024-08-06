import Hero from "./Hero";
import NavBar from "./NavBar";
import About from "./About";
import Quote from "./Quote";
import Skills from "./Skills";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Quote />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
