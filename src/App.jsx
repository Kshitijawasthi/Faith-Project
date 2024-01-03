import Home from "./pages/home";
import Card from "./pages/card";
import About from "./pages/about";
import AbouIns from "./pages/abouIns";
import Footer from "./pages/Footer";
function App() {
  return (
    <>
      <Home />
      <div className=" flex">
        <About />
        <Card />
      </div>
      <AbouIns />
      <Footer />
    </>
  );
}

export default App;
