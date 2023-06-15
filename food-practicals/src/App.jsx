import SplineDesign from "./components/SplineDesign"; 
import ChilliSauce from "./components/ChilliSauce";
import Headline from "./components/Headline";
import Home from "./components/Home";
import Navbar from "./header/Navbar";
import Yogurt from "./components/Yogurt";
function App() {
  return (
    <>
      <Navbar />
      <SplineDesign />
      <Home />
      <Headline />
      <ChilliSauce />
      <Yogurt />
    </>
  );
}

export default App;
