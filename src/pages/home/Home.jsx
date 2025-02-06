import Profile from "../../assets/Avt-profile.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img object-contain"></img>
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span className="!pl-16 flex">I'm Quoc Anh</span>
            BackEnd Developer
          </h1>
          <p className="home__description">
            I am a passionate software developer with over 2 years of experience
            in analyzing, designing, developing, and troubleshooting web
            applications and web services. I have over 1 year of hands-on
            experience with C# (.NET), specializing in .NET 6-8, .NET Framework,
            Entity Framework, Blazor, WPF, ASP.NET, SignalR, and more.
            Additionally, I bring 1 year of expertise in Java programming,
            leveraging frameworks like Spring Boot, Spring Hibernate, Spring
            JPA, and Spring Security. With over 7 months of experience in the
            fintech sector, I have honed my skills in transaction inquiry and
            processing while directly collaborating with clients to resolve
            domain-specific issues. I am adept at applying best practices,
            including design patterns and clean code principles, to ensure
            efficient and maintainable solutions. My strong problem-solving
            skills enable me to quickly identify, debug, and resolve complex
            issues. I thrive in collaborative team environments and have
            experience working with diverse teams across various software
            development processes.
          </p>
          <Link to="/about" className="button">
            More About Me {""}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
