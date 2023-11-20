//Header e Footer
import Header from "../../pages/Header";
import Footer from "../../pages/Footer";

//Componentes
import Hero from "../../pages/Home/Hero";
import Search from "../../pages/Home/Search";
import Stats from "../../pages/Home/Stats";
import Boost from "../../pages/Home/Boost";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Search />
      <Stats />
      <Boost />
      <Footer />
    </>
  );
};
export default Home;
