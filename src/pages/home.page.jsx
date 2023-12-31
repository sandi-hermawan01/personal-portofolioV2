import Me from "../assets/img/personal-brand-logo.jpg";
import HeaderSocials from "../components/header-social.component";
import ScrollDown from "../components/scrolldown.component";
import { Typewriter } from "react-simple-typewriter";
import bgImage from "../assets/img/anime-girls-wallpaper.jpg";

const HomePage = () => {
  return (
    <>
      <section
        className="home container relative flex min-h-[90vh] justify-center"
        id="home"
      >
        <div className="intro absolute max-w-[540px] text-center top-[274px] z-50">
          <p className="flex justify-center">
            <img
              src={Me}
              className="home__img mb-5 rounded-default w-[124px] h-[124px] z-5 "
            />
          </p>
          <h1 className="home__name text-[26px] font-medium mb-2 z-5">
            Sandi Hermawan
          </h1>
          <span className="home__education z-5 pl-6">
            <Typewriter
              typeSpeed={50}
              words={["Let's make a website with React :)"]}
              loop={false}
              cursorStyle={"_"}
              cursor
            />
          </span>
          <HeaderSocials />

          <a href="#contact" className="btn mt-6">
            Let's Chat
          </a>
        </div>
        <div className="w-full h-80 mt-24 flex items-center justify-center flex-col relative">
          <img
            src={bgImage}
            className="h-80 w-full grayscale object-cover rounded-t-default"
          />
          <div className="h-80 w-full bg-gradient-to-t from-body_color to-transparent absolute top-0 left-0"></div>
        </div>
        <ScrollDown />
      </section>
    </>
  );
};

export default HomePage;
