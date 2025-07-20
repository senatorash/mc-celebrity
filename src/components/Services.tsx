import {
  FaMicrophoneAlt,
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaPodcast,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import classes from "../assets/styles/Services.module.css";
const Services = () => {
  return (
    <section className={`container ${classes.ServiceContainer}`}>
      <div className={`${classes.ServiceContent} text-center mb-5`}>
        <h4>WHAT I DO</h4>
        <h2>Awesome Quality Services</h2>
      </div>

      <div>
        <div className="row g-5">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className={`${classes.ServiceCard} text-center`}>
              <FaMicrophoneAlt className={`mb-2 ${classes.icon}`} />
              <h4>Event Hosting</h4>
              <p>
                Bringing energy and professionalism to every event, ensuring a
                memorable experience for all attendees.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className={`${classes.ServiceCard} text-center`}>
              <FaChalkboardTeacher className={`mb-2 ${classes.icon}`} />
              <h4>Public Speaking</h4>
              <p>
                Engaging audiences with compelling narratives and impactful
                messages that resonate.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className={`${classes.ServiceCard} text-center`}>
              <FaCalendarAlt className={`mb-2 ${classes.icon}`} />
              <h4>Event Planning</h4>
              <p>
                Offering comprehensive planning services to ensure every detail
                of your event is executed flawlessly.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className={`${classes.ServiceCard} text-center`}>
              <MdBusinessCenter className={`mb-2 ${classes.icon}`} />
              <h4>Corporate Events</h4>
              <p>
                Specializing in corporate gatherings, from AGMs to seminars,
                delivering professionalism and engagement.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className={`${classes.ServiceCard} text-center`}>
              <FaPodcast className={`mb-2 ${classes.icon}`} />
              <h4>Podcast</h4>
              <p>
                Specializing in corporate gatherings, from AGMs to seminars,
                delivering professionalism and engagement.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className={`${classes.ServiceCard} text-center`}>
              <FaRegCalendarAlt className={`mb-2 ${classes.icon}`} />
              <h4>Corporate Events</h4>
              <p>
                Specializing in corporate gatherings, from AGMs to seminars,
                delivering professionalism and engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
