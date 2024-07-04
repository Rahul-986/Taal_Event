import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Stripes from "./components/Stripes";
import Work from "./components/Work";
import Marquees from "./components/Marquees";
import Footer from "./components/Footer";
import LocomotiveScroll from 'locomotive-scroll';



const App = () => {
const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className='w-full h-full bg-zinc-900 font-satoshi text-white'>
        <Navbar />
        <Work/>
        <Stripes/>
        <Products/>
        <Marquees/>
        
        <Footer/>
      </div>
    </>
  );
};
export default App;
