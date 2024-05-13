import About from "./components/About/About";
import Agency from "./components/Agency/Agency";
import Benefits from "./components/Benefits/Benefits";
import Cases from "./components/Cases/Cases";
import Clients from "./components/Clients/Clients";
import FaqId from "./components/Faq/FaqId";
import Figures from "./components/Figures/Figures";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import OurServices from "./components/Our-services/OurServices";
import Pricing from "./components/Pricing/Pricing";
import Testimonial from "./components/Testimonials/Testimonials";
import News from "./components/News/News";
import "./styles/main.css"
import Footer from "./components/Footer/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
// import Modal from "./components/Modal/Modal";
// import { useState } from "react";
// Import Swiper styles
import 'swiper/css';

function App() {

  // const [showModal, setShowModal] = useState(false);

  const faqList = [
    {
        q: "Aliquet lectus urna viverra in odio?",
        a: "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce massa ac facilisis."
    },
    {
        q: "Orci commodo, viverra orci mollis ut euismod?",
        a: "Adipiscing nunc arcu enim elit mattis eu placerat proin.Imperdietelementum faucibus dignissim purus.Fusce parturient diam magna ullamcorper morbi sempermassa ac facilisis.Adipiscing nunc arcu enim elit mattis eu placerat proin.Imperdiet elementum faucibusdignissim purus.Fusce parturient diam magna ullamcorper morbi semper massa ac"
    },
    {
        q: "Sagittis vitae facilisi rutrum amet mauris quisque vel convallis?",
        a: "Adipiscing nunc arcu enim elit mattis eu placerat proin.Imperdietelementum faucibus dignissim purus.Fusce parturient diam magna ullamcorper morbi sempermassa ac facilisis."
    },
    {
        q: "In id dolor quis nunc, urna hendrerit pharetra?",
        a: "Adipiscing nunc arcu enim elit mattis eu placerat proin.Imperdietelementum faucibus dignissim purus.Fusce parturient diam magna ullamcorper morbi sempermassa ac facilisis.Adipiscing nunc arcu enim elit mattis eu placerat proin.Imperdiet elementum faucibusdignissim purus.Fusce parturient diam magna ullamcorper morbi semper massa acfacilisis."
    },
    {
        q: "Orci commodo, viverra orci mollis ut euismod?",
        a: "Adipiscing nunc arcu enim elit mattis eu placerat proin.Imperdiet elementum faucibusdignissim purus.Fusce parturient diam magna ullamcorper morbi semper massa ac"
    },
]

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Clients />
      <Agency />
      <Figures />
      <OurServices />
      <Form />
      <FaqId faqList={faqList}/>
      <Cases />
      <Benefits />
      <Pricing />
      <Testimonial />
      <News />
      <Footer />
    </div>
  );
}

export default App;
