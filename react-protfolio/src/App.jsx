import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Protfolio from './sections/protfolio/Protfolio'
import Testimonials from './sections/testimonials/Testimonials';
import Faqs from './sections/faqs/FAQs';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';

const App = () => {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Protfolio/>
      <Testimonials/>
      <Faqs/>
      <Footer/>
      <FloatingNav/>

    </main>
  )
}

export default App
