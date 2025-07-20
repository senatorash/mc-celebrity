import Typewriter from "typewriter-effect";
const HeroTyping = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "CORPORATE EVENTS",
          "AGMs",
          "Seminars",
          "Conferences",
          "SOCIAL EVENTS",
          "Weddings",
          "Birthdays",
          "Faith-based events",
          "Little gatherings",
        ],
        autoStart: true,
        loop: true,
        delay: 75,
        deleteSpeed: 20,
      }}
    />
  );
};
export default HeroTyping;
