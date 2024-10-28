import About from "./components/About/About";
import CaruselList from "./components/Carusel/CaruselList";
import Contact from "./components/Contact/Contact";
// import Carusel from "./components/Carusel/Carusel";
import Course from "./components/Course/Course";
import Employe from "./components/Employe/Employe";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Course />
      <Employe />
      <About />
      <CaruselList />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
