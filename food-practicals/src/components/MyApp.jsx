
import ChilliSauce from "./ChilliSauce";
import Headline from "./Headline";
import Home from "./Home";
/* import Navbar from "../header/Navbar"; */
import Yogurt from "./Yogurt";
import Contact from "./Contact";
/* import Footer from "../footer/Footer"; */
import Recipes from "./Recipes";
import Blogs from "./Blogs";


const MyApp = () => {
  return (
    <>
      <Home />
      <Headline />
      <ChilliSauce />
      <Recipes/>
      <Yogurt />
      <Blogs />
      <Contact />
      {/* <Footer /> */}
    </>
  );
};

export default MyApp;
