import Image from "next/image";

import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const HomePage = () => (
  <div>
    <Header />
    <Hero />
    <Services />
    <AboutUs />
    <ContactForm />
    <Footer />
  </div>
);

export default HomePage;
