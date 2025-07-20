import BestSales from "../components/BestSales";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import PopularProducts from "../components/PopularProducts";

const Home = () => {
    return ( 
        <main>
        <Header />
        <Hero />
        <Featured />
        <PopularProducts />
        <BestSales />
        <Footer />
        </main>
     );
}
 
export default Home;