const Book = () => {
  return (
    <div className="text-black">
      <h1>Book a Session</h1>
      <p>Fill out the form below to book a session with our MC.</p>
      <form>
        <div>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="date">Preferred Date:</label>
          <input type="date" id="date" name="date" required />
        </div>
        <div>
          <label htmlFor="time">Preferred Time:</label>
          <input type="time" id="time" name="time" required />
        </div>
        <button type="submit">Book Now</button>
      </form>
      <p>We will get back to you shortly to confirm your booking.</p>
      <p>
        For any inquiries, please contact us at{" "}
        <a href="mailto:info@mccelbrity.com">info@mccelbrity.com</a>.
      </p>
      <p>Follow us on social media for updates:</p>
      <ul>
        <li>
          <a href="https://www.facebook.com/mccelbrity">Facebook</a>
        </li>
        <li>
          <a href="https://www.instagram.com/mccelbrity">Instagram</a>
        </li>
        <li>
          <a href="https://www.twitter.com/mccelbrity">Twitter</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/mccelbrity">LinkedIn</a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@mccelbrity">TikTok</a>
        </li>
        <li>
          <a href="https://www.youtube.com/mccelbrity">YouTube</a>
        </li>
      </ul>
      <p>Thank you for choosing MC Celebrity!</p>
      <p>We look forward to making your event unforgettable!</p>
    </div>
  );
};

export default Book;
