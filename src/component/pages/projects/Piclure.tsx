import ProfileCard from "../../../component/share/ProfileCard";
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

      <ProfileCard />

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
        <img src="src/assets/piclure.png" alt="piclure" />
      </div>
      <span>Tablet view of the dashboard's home page. The application is designed to be responsive to all platforms and devices.</span>

      <h3>Mobile first design</h3>
      <p>I designed the dashboard with a mobile-first approach, ensuring that the application was responsive to all platforms and viewports. Thankfully plotly and Mapbox are already mobile responsive to multi touch interactions so it was just a matter of ensuring the overall layout was adaptable.</p>
    
      <div className="project-details-image">
        <img src="src/assets/piclure-mobile.png" alt="piclure" />
      </div>
    </div>
  );
};

export default Piclure;
