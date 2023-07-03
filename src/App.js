import Benefit from "./components/Benefit";
import From from "./components/From";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Part from "./components/Part";
import Target from "./components/Target";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Show from "./components/Show";
import Why from "./components/Why";
import Footer from "./components/Footer";
import Note from "./components/Note";
import Call from "./components/commons/Call";
import BackToTop from "./components/commons/BackToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    document.querySelectorAll("img").forEach((img) =>
      img.addEventListener("load", () => {
        AOS.refresh();
      })
    );
  }, []);
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <From />
      <Part />
      <Target />
      <Benefit />
      <Show />
      <Why />
      <Note />
      <Footer />
      <Call />
      <BackToTop />
    </div>
  );
}

export default App;
