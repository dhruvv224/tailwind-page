import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Experts from './Components/Experts';
import Newsletter from './Components/Newsletter';
import Plans from './Components/Plans';
import Footer from './Components/Footer';
function App() {
  return (
   <>
    <Header/>
    <Banner/>
    {/* <Experts/> */}
    <Newsletter/>
    <Plans/>
    <Footer/>
   </>
  );
}

export default App;
