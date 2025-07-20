import classes from "../../assets/styles/Testimonial.module.css";
interface TestimonialProps {
  TestimonialName: string;
  image: string;
  feedback: string;
}
const TestimonialCard = ({
  TestimonialName,
  image,
  feedback,
}: TestimonialProps) => {
  return (
    // <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
    <div className={`${classes.card} card`}>
      <img
        src={image}
        alt={TestimonialName}
        loading="lazy"
        className="card-img-top"
      />
      <div className="card-body">
        <p className="card-text">"{feedback}"</p>
        <h5 className={`${classes.card_title} card-title`}>
          {TestimonialName}
        </h5>
      </div>
    </div>
    // </div>
  );
};
export default TestimonialCard;
