import Navbar from "../Componentes/Navbar/Navbar";
import Hero from "../Componentes/Hero/Hero";
import Categories from "../Componentes/Categories/Categories";
import HomeProducts from "../Componentes/HomeProducts/HomeProducts";
import Footer from "../Componentes/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <HomeProducts />
      <Footer />
    </>
  );
}

export default Home;