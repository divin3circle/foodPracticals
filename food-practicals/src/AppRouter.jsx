import SplineDesign from "./components/SplineDesign"; 
import ChilliSauce from "./components/ChilliSauce";
import Headline from "./components/Headline";
import Home from "./components/Home";
import Navbar from "./header/Navbar";
import Yogurt from "./components/Yogurt";
import "./App.css";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Aos from 'aos';
import { useEffect } from "react";

function AppRouter() {
  useEffect(()=>{
    Aos.init()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Navbar />
          <SplineDesign />
          <Home data-aos="fade-up" duration={1500} />
          <Headline data-aos="fade-left" duration={1700} />
          <ChilliSauce data-aos="fade-up" duration={1500} />
          <Yogurt data-aos="fade-up" duration={1500} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
