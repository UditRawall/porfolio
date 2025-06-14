
import ProfileCard from "../../../component/share/ProfileCard";
import piclureDesktop from "../../../assets/images/piclure.png";
import picluremobile from "../../../assets/images/piclure-mobile.png";
import './index.css';

const Piclure = () => {
  return (
    <div className="home-main-projects">
      <h2>PICLURE - Dashboard</h2>
      <p>
        Open source analytics dashboard built with Django with over 200k
        visitors. The dashboard provided a comprehensive and interactive
        overview of the COVID-19 pandemic.
      </p>

      <ProfileCard projectLink="https://piclure.vercel.app/"/>

      <h3>About the Project</h3>
    

      <p>
        This project was created to provide a comprehensive and interactive
        overview of the COVID-19 pandemic. The dashboard was built using Django
        and Plotly.js, and featured a fully interactive map made using Mapbox.
        The project was open source and received over 200k visitors, but the
        most rewarding part was the collaboration with contributors across the
        world.
      </p>
      <div className="project-details-image">
        <img src={piclureDesktop} alt="piclure" />
      </div>
      <span className="project-span">Desktop view of the dashboard's home page. The application is designed to be responsive to all platforms and devices.</span>

      <h3>Mobile first design</h3>
      <p>I designed the dashboard with a mobile-first approach, ensuring that the application was responsive to all platforms and viewports. Thankfully plotly and Mapbox are already mobile responsive to multi touch interactions so it was just a matter of ensuring the overall layout was adaptable.</p>
    
      <div className="project-details-image">
        <img src={picluremobile} alt="piclure" />
      </div>
      <span className="project-span">Mobile view of the dashboard's home page. The application is designed to be responsive to all platforms and devices.</span>
      <h3>Read more</h3>
    

      <p>
        Here is a blog post I wrote about the project.
      </p>

      <h4>Contact</h4>
    

      <p>
      Questions or need more details? Ping me on <a href="/linkedin">LinkedIn</a>, or any of my other social media links.
      </p>

      <section className="newsletter">
          <h2 className="newsletter-title">Newsletter</h2>
          <p className="newsletter-text">
            Get personal updates and readings on topics like tech, design, productivity, programming, and more!
          </p>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button className="newsletter-button" type="button">
              Subscribe
            </button>
          </div>
        </section>
    </div>
  );
};

export default Piclure;
