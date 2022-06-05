import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Service from "./components/service/Service";
import Portifolio from "./components/portifolio/Portifolio";
import Testimonial from "./components/testimonials/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";



const App = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Service/>
      <Portifolio />
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App;