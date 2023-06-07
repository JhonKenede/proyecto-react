import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Testimonios from "./components/Testimonios";
import { cards } from "./components/Card/CardsDummy";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Main />
      <Card cards={cards} />
      <Testimonios />
      <Section />
      <Footer />
    </>
  );
}

export default App;
