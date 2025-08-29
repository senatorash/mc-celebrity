import About from "../components/Home/About";
import Services from "../components/Home/Services";
import Testimonials from "../components/Home/Testimonial/Testimonials";
import Contact from "../components/Home/Contact";
import Cta from "../components/Home/Cta";
import HeroSection from "../components/Home/HeroSection";
import SEO from "../SEO/SEO";
const Home = () => {
  return (
    <>
      <SEO
        title="MC Celebrity | Best MC in Nigeria"
        description="MC Celebrity is Nigeria's top Master of Ceremony for weddings, events, seminars, social events, birthdays and corporate functions."
        keywords="MC Celebrity,event host, Best MC in Nigeria, Top Emcee, Master of Ceremony, Wedding MC, Corporate MC"
        canonical=""
        ogTitle="MC Celebrity - Best Event Host in Nigeria"
        ogDescription="Book MC Celebrity, Nigeria's top Master of Ceremony, for your next event. Experience professionalism and entertainment like never before."
        ogUrl=""
        ogImage=""
      />
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
