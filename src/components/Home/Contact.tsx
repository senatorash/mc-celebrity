import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import classes from "../../assets/styles/Contact.module.css";
import Animation from "../UI/Animation";
import useFormValidation from "../../hooks/useFormValidation";
import { FormSubmit } from "../../lib/apis/FormSubmit";
import Error from "../commons/Error";
import Success from "../commons/Success";

const Contact = () => {
  const [isSuccess, setIsSuccess] = useState("");
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {
    email,
    setEmail,
    emailError,
    phoneNumber,
    setPhoneNumber,
    phoneNumberError,
    name,
    setName,
    nameError,
    location,
    setLocation,
    locationError,
    eventType,
    setEventType,
    eventTypeError,
    textArea: message,
    setTextArea,
    textAreaError,
    validateForm,
    resetForm,
  } = useFormValidation();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = {
      email,
      phoneNumber,
      name,
      location,
      eventType,
      message,
      _honey: "",
      _blacklist: "viagra, click here, free money, buy now, crypto",
      _subject: "New Contact Form Submission from MC Celebrity Website",
    };
    if (!validateForm()) {
      setIsError("Some fields need your attention before submitting.");
      setIsLoading(false);
      return;
    }

    const result = await FormSubmit(formData);
    if (result?.success) {
      setIsSuccess(result.message);
      setIsError("");
      resetForm();
      setIsLoading(false);
    } else {
      setIsError("An error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  return (
    <Element name="contact" id="contact">
      <section className="container text-black" style={{ marginTop: "100px" }}>
        <Animation direction="fadeInUp">
          <div className={`${classes.Contact_text} text-center mb-5`}>
            <h4>Get In Touch</h4>
            <h2>Let's Discuss Your Project</h2>
          </div>
        </Animation>

        <div className="row g-3">
          <div className="col-lg-6">
            <Animation direction="left">
              <div className={`${classes.ContactContent}  mb-5`}>
                <p>
                  Whether you have a question, want to book an event, or just
                  want to say hello, feel free to reach out. I'm here to help
                  make your event unforgettable!
                </p>
              </div>

              <>
                <div
                  className={`${classes.ContactInfo} d-flex mb-3 align-items-center  w-75`}
                >
                  <i className="ri-map-pin-line me-3"></i>
                  <div>
                    <p className="mb-1">Address:</p>
                    <h6>Lagos, Nigeria</h6>
                  </div>
                </div>
                <div
                  className={`${classes.ContactInfo} d-flex mb-3 align-items-center  w-75`}
                >
                  <i className="ri-mail-line me-3"></i>
                  <div className="">
                    <p className="mb-1">Email:</p>
                    <h6>TheCelebrityBrand@gmail.com</h6>
                  </div>
                </div>
                <div
                  className={`${classes.ContactInfo} d-flex mb-3 align-items-center  w-75`}
                >
                  <i className="ri-phone-line me-3"></i>
                  <div>
                    <p className="mb-1">Call:</p>
                    <h6>+234-802-275-3314</h6>
                  </div>
                </div>
              </>
              {/* <div> */}
              <div className="mb-3 text-sm-start text-md-start text-lg-start ">
                <Link to="#" className={`${classes.SocialLink}`}>
                  <i className="ri-facebook-fill"></i>
                </Link>

                <Link to="#" className={`${classes.SocialLink}`}>
                  <i className="ri-instagram-line"></i>
                </Link>

                <Link to="#" className={`${classes.SocialLink}`}>
                  <i className="ri-twitter-x-line"></i>
                </Link>

                <Link to="#" className={`${classes.SocialLink}`}>
                  <i className="ri-youtube-line"></i>
                </Link>

                <Link to="#" className={`${classes.SocialLink}`}>
                  <i className="ri-tiktok-line"></i>
                </Link>
              </div>
            </Animation>
            {/* </div> */}
          </div>
          <div className={`col-lg-6 ${classes.ContactForm}`}>
            <Animation direction="right">
              <p>
                You’ve got a dream. I’ve got the tools to elevate it. Share the
                details of your project and let’s create something extraordinary
                together.
              </p>
              <form onSubmit={handleSubmit}>
                {isError && <Error errorMessage={isError} />}
                {isSuccess && <Success successMessage={isSuccess} />}
                <div className={`${classes.input_field} form-group mb-3`}>
                  <input
                    placeholder="Name"
                    type="text"
                    className="form-control "
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {nameError.length > 0 &&
                    nameError.map((error, index) => (
                      <ul
                        key={index}
                        className="text-danger text-start"
                        style={{ fontSize: "10px" }}
                      >
                        <li>{error}</li>
                      </ul>
                    ))}
                </div>
                <div className={`${classes.input_field} form-group mb-3`}>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {emailError.length > 0 &&
                    emailError.map((error, index) => (
                      <ul
                        key={index}
                        className="text-danger text-start"
                        style={{ fontSize: "10px" }}
                      >
                        <li>{error}</li>
                      </ul>
                    ))}
                </div>

                <div className={`form-group mb-3 ${classes.input_field}`}>
                  <input
                    className="form-control"
                    type="text"
                    name="phone"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => {
                      const onlyNums = e.target.value.replace(/\D/g, "");
                      setPhoneNumber(onlyNums);
                    }}
                  />
                  {phoneNumberError.length > 0 &&
                    phoneNumberError.map((error, index) => (
                      <ul
                        key={index}
                        className="text-danger text-start"
                        style={{ fontSize: "10px" }}
                      >
                        <li>{error}</li>
                      </ul>
                    ))}
                </div>

                <div className={`${classes.input_field} form-group mb-3`}>
                  <input
                    type="text"
                    placeholder="Location"
                    name="location"
                    className="form-control mb-3"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                  {locationError.length > 0 &&
                    locationError.map((error, index) => (
                      <ul
                        key={index}
                        className="text-danger text-start"
                        style={{ fontSize: "10px" }}
                      >
                        <li>{error}</li>
                      </ul>
                    ))}
                </div>
                <div className={`${classes.input_field} form-group mb-3`}>
                  <input
                    type="text"
                    placeholder="Type of Event"
                    className="form-control mb-3"
                    name="eventType"
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                  />
                  {eventTypeError.length > 0 &&
                    eventTypeError.map((error, index) => (
                      <ul
                        key={index}
                        className="text-danger text-start"
                        style={{ fontSize: "10px" }}
                      >
                        <li>{error}</li>
                      </ul>
                    ))}
                </div>
                <div className={`${classes.input_field} form-group mb-3`}>
                  <textarea
                    rows={3}
                    className="form-control mb-3"
                    placeholder="Message"
                    name="message"
                    value={message}
                    onChange={(e) => setTextArea(e.target.value)}
                  ></textarea>
                  {textAreaError.length > 0 &&
                    textAreaError.map((error, index) => (
                      <ul
                        key={index}
                        className="text-danger text-start"
                        style={{ fontSize: "10px" }}
                      >
                        <li>{error}</li>
                      </ul>
                    ))}
                </div>

                <div className="form-group mb-3">
                  <input
                    type="submit"
                    className={` form-control ${classes.ContactButton}`}
                    value={isLoading ? "Submitting" : "Submit"}
                  />
                </div>
              </form>
            </Animation>
          </div>
        </div>
      </section>
    </Element>
  );
};
export default Contact;
