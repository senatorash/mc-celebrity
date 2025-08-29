// import { useState } from "react";
import { MdAppRegistration } from "react-icons/md";
import classes from "../assets/styles/Book.module.css";
import logo from "../assets/images/logo.png";
import useFormValidation from "../hooks/useFormValidation";
import SEO from "../SEO/SEO";

const formUrl = import.meta.env.VITE_FORM_URL;

const Book = () => {
  const {
    email,
    setEmail,
    emailError,
    phoneNumber,
    setPhoneNumber,
    phoneNumberError,
    name,
    setName,
    eventType,
    setEventType,
  } = useFormValidation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // perform validation
    if (!email || !phoneNumber || !name || !eventType) {
      event.preventDefault();

      return;
    }

    // allow the form to submit normally if everything is fine
  };

  return (
    <>
      <SEO
        title="Book MC Celebrity | Hire Nigeria's Top Event Host"
        description="Secure your date with MC Celebrity, Nigeria’s leading Master of Ceremony for weddings, birthdays, corporate events, and more. Fill out the booking form to get started."
        keywords="Book MC Celebrity, Hire Event Host Nigeria, Wedding MC Booking, Corporate MC Nigeria, MC Celebrity Booking Form"
        canonical="https://plug8.com.ng/book"
        ogTitle="Book MC Celebrity – Nigeria’s Premier Event Host"
        ogDescription="Ready to elevate your event? Book MC Celebrity now for unforgettable hosting at weddings, corporate functions, and social gatherings."
        ogUrl=""
        ogImage=""
      />
      <section
        className={`container-fluid vh-100 text-black ${classes.book_section}`}
      >
        <form
          style={{ marginTop: "100px" }}
          className="container"
          action={formUrl}
          method="POST"
          onSubmit={handleSubmit}
        >
          {/* disable captcha */}
          <input type="hidden" name="_captcha" value="false" />
          {/* optional: redirect after submit */}
          {/* <input
          type="hidden"
          name="_next"
          value="http://localhost:5173/thank-you"
        /> */}

          <div className={`row ${classes.formContainer} `}>
            <div className="col-lg-6 col-md-6">
              <div>
                <h1
                  className={`text-start text-md-start text-sm-center mb-4 f-bold f-5`}
                >
                  <span className="me-2">
                    <MdAppRegistration size={30} color="#026dfd" />
                  </span>
                  Booking
                </h1>
                <p
                  className="text-lg-start text-md-start text-sm-center"
                  style={{ fontSize: "15px", lineHeight: "1.5" }}
                >
                  We will get back to you as soon as possible to confirm your
                  booking.
                </p>
              </div>

              <div className={`form-group mb-3 ${classes.input_field}`}>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
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
                    <ul key={index} className="text-danger">
                      <li>{error}</li>
                    </ul>
                  ))}
              </div>

              <div className={`form-group mb-3 ${classes.input_field}`}>
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
                    <ul key={index} className="text-danger">
                      <li>{error}</li>
                    </ul>
                  ))}
              </div>

              <div className={`form-group mb-3 ${classes.input_field}`}>
                <select
                  className="form-control"
                  name="event-type"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                >
                  <option value="">-- Select Event Type --</option>
                  <option value="wedding">Wedding</option>
                  <option value="birthday">Birthday</option>
                  <option value="corporate">Corporate</option>
                  <option value="concert">Concert</option>
                  <option value="private">Private Event</option>
                  <option value="public">Public Event</option>
                  <option value="festival">Festival</option>
                  <option value="conference">Conference</option>
                  <option value="seminar">Seminar</option>
                  <option value="workshop">Workshop</option>
                  <option value="product-launch">Product Launch</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group mb-3">
                <input
                  type="submit"
                  className={` form-control ${classes.book_btn1}`}
                  value="Submit"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <img
                className={`d-lg-inline d-md-inline d-none ${classes.logo}`}
                src={logo}
                alt="logo"
                width={250}
                style={{
                  marginLeft: "100px",
                  marginTop: "100px",
                  backgroundColor: "black",
                  borderRadius: "50%",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.37)",
                }}
              />
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Book;
