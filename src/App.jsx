import About from "./assets/components/About";
import Banner from "./assets/components/Banner";
import Footer from "./assets/components/Footer";
import Navbar from "./assets/components/Navbar";
import Services from "./assets/components/Services";
import Top from "./assets/components/Top";

const App = () => {
  return (
    <>
      <Top />
      <Navbar />
      <Banner />
      <Services />
      <About />
      <Footer />
    </>
  );
};

export default App;
