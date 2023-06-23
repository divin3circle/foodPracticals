/* import SplineDesign from "./components/SplineDesign"; */
import ChilliSauce from "./components/ChilliSauce";
import Headline from "./components/Headline";
import Home from "./components/Home";
import Navbar from "./header/Navbar";
import Yogurt from "./components/Yogurt";
import MyApp from "./components/MyApp";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Contact from "./components/Contact";
import Basil from "./components/Basil";
import Footer from "./footer/Footer";
import Recipes from "./components/Recipes";
import Blogs from "./components/Blogs";
import Faq from "./components/Faq";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <SplineDesign /> */}
        <Route index element={<MyApp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/head" element={<Headline />} />
        <Route path="/chilly" element={<ChilliSauce />} />
        <Route path="/new" element={<Yogurt />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/basil" element={<Basil />} />
        <Route path="/recipe" element={<Recipes />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
