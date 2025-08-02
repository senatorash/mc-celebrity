import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import TestimonyData from "./TestimonyData";
import TestimonialCard from "./TestimonialCard";
import classes from "../../../assets/styles/Testimonial.module.css";
import Animation from "../../UI/Animation";
import { Element } from "react-scroll";

const Testimonials = () => {
  return (
    <Element name="testimonials" id="testimonials">
      <section className="container mb-5">
        {/* <div > */}
        <Animation direction="fadeInUp">
          <div className={`${classes.TestimonialContent} text-center mb-5`}>
            <h4>Testimonial</h4>
            <h2>What People Say</h2>
          </div>
        </Animation>

        <Swiper
          breakpoints={{
            640: {
              // mobile
              slidesPerView: 1,
              spaceBetween: 50,
            },
            768: {
              // tablet
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              // desktop
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          fadeEffect={{ crossFade: true }}
          modules={[Navigation, Pagination, Scrollbar, EffectFade, Autoplay]}
          loop={true}
          speed={3000}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          freeMode={true}
          slidesPerView="auto"
          spaceBetween={50}
          // pagination={{ clickable: true }}
        >
          {TestimonyData.length > 0 ? (
            TestimonyData.map((testimony) => (
              <SwiperSlide key={testimony.id}>
                <Animation direction="FadeIn">
                  {" "}
                  <TestimonialCard
                    TestimonialName={testimony.name}
                    image={testimony.image}
                    feedback={testimony.feedback}
                  />
                </Animation>
              </SwiperSlide>
            ))
          ) : (
            <h1>No Testimony Available</h1>
          )}
        </Swiper>
        {/* </div> */}
      </section>
    </Element>
  );
};

export default Testimonials;
