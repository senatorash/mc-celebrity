import { useState, useEffect } from "react";
import { MdAppRegistration } from "react-icons/md";
import classes from "../assets/styles/Book.module.css";
import logo from "../assets/images/logo.png";
import { FormSubmit } from "../lib/apis/FormSubmit";
import useFormValidation from "../hooks/useFormValidation";
import Success from "../components/commons/Success";
import Error from "../components/commons/Error";
import SEO from "../SEO/SEO";

const Book = () => {
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
    // eventTypeError,
    validateBookingForm,
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
      _honey: "",
      _blacklist: "viagra, click here, free money, buy now, crypto",
      _subject: "New Booking Request from MC Celebrity Website",
    };
    if (!validateBookingForm()) {
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
      <section className={`container-fluid text-black ${classes.book_section}`}>
        <form
          style={{ justifyContent: "center" }}
          className="container"
          onSubmit={handleSubmit}
        >
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

              {isError && <Error errorMessage={isError} />}
              {isSuccess && <Success successMessage={isSuccess} />}

              <div className={`form-group mb-3 ${classes.input_field}`}>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Name"
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
                  name="location"
                  placeholder="location"
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
                  <option value="private-event">Private Event</option>
                  <option value="public-event">Public Event</option>
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
                  value={isLoading ? "Submitting" : "Submit"}
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
