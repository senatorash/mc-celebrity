import About from "../components/Home/About";
import Services from "../components/Home/Services";
import Testimonials from "../components/Home/Testimonial/Testimonials";
import Contact from "../components/Home/Contact";
import Cta from "../components/Home/Cta";
import HeroSection from "../components/Home/HeroSection";
const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Cta />
    </>
  );
};
export default Home;
