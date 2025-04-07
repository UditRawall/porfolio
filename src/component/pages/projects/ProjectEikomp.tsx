import ProfileCard from "../../../component/share/ProfileCard";
import EikompDesktop from "../../../assets/images/eikomp_assets/desktop.png";
import Eikompmobile from "../../../assets/images/eikomp_assets/eikomp_mobile.png";
import "./index.css";

export const ProjectEikomp = () => {

  const iconSvg = (<svg width="20px" height="15px" fill="#000"  style={{border:'1px solid #282727',borderRadius:'50%',padding:'0.25rem',background:'#282727'}} viewBox="-78.51 0 229.84 229.84" xmlns="http://www.w3.org/2000/svg">
  <defs>
  </defs>
  <g id="Layer_2" data-name="Layer 2">
    <g id="Layer_1-2" data-name="Layer 1">
      <path d="M9.68,164.66c-.77-3.37-1.64-5.83-1.87-8.35C4.49,119.28,1.55,82.21,4.19,45,5,33.58,6.59,22.23,7.87,10.86a40.57,40.57,0,0,1,1-4.16,6,6,0,0,1,5.17-5C18.27,1,22.53,0,26.78,0c6.85,0,13.7.55,20.56.92,2.85.15,5.7.39,8.56.59A34.78,34.78,0,0,1,61,1.92C72.15,4.4,73.42,5.24,72.63,15.8,71.19,34.88,70,54,68.4,73.07c-1.28,15.38-2.89,30.73-4.52,46.07-1.25,11.7-4.35,23-8,34.17a14.41,14.41,0,0,1-10.78,10A86.07,86.07,0,0,1,9.68,164.66ZM63.79,10.16c-11.48-.8-22-1.63-32.6-2.23a55.18,55.18,0,0,0-9.43.51c-5,.59-6.25,2-6.82,7.14-.46,4.27-.9,8.54-1.2,12.83-1,14-2.29,28-2.81,42-.95,25.84,2.86,51.47,4.2,77.21.15,2.75.07,5.76,1.87,8a7.61,7.61,0,0,0,1.76.85c8.33,1.27,16.57-.38,24.83-.87,3-.18,4.38-2.5,5.07-5.13,1.67-6.37,3.54-12.71,4.77-19.16,1.56-8.16,2.65-16.4,3.78-24.63,1.17-8.46-.19-17.18,2.57-25.49-.22-10.57,2.09-20.93,2.4-31.47.33-11.16,1.39-22.3,2.06-33.45A53.38,53.38,0,0,0,63.79,10.16Z" />
      <path d="M.09,205.8c-.18-17.52,10.44-27.05,23.34-32.56,8-3.39,14.53-.24,20.42,4.94A26.93,26.93,0,0,1,53.4,201c-.35,6.37-1.35,12.46-4.72,18-4.4,7.26-11,10.87-19.24,10.77a45.06,45.06,0,0,1-15.88-3.2C5.74,223.59-.83,215.26.09,205.8Zm45.53-1.93a25.12,25.12,0,0,0-3.8-14.28c-2.67-4.63-7.26-7.19-12.29-8.67a7.32,7.32,0,0,0-5,.48c-7.26,3.75-13.17,8.89-15.8,17a13.74,13.74,0,0,0,0,8.39c4.1,13.81,17.09,15.08,27,13.1a3.72,3.72,0,0,0,1.51-.76C42.07,215,46.71,210.75,45.62,203.87Z" />
      <path className="cls-1" d="M63.79,10.16a53.38,53.38,0,0,1,.45,6.06c-.67,11.15-1.73,22.29-2.06,33.45-.31,10.54-2.62,20.9-2.4,31.47-2.76,8.31-1.4,17-2.57,25.49-1.13,8.23-2.22,16.47-3.78,24.63-1.23,6.45-3.1,12.79-4.77,19.16-.69,2.63-2,5-5.07,5.13-8.26.49-16.5,2.14-24.83.87a7.61,7.61,0,0,1-1.76-.85c-1.8-2.22-1.72-5.23-1.87-8-1.34-25.74-5.15-51.37-4.2-77.21.52-14,1.81-28,2.81-42,.3-4.29.74-8.56,1.2-12.83.57-5.17,1.83-6.55,6.82-7.14a55.18,55.18,0,0,1,9.43-.51C41.76,8.53,52.31,9.36,63.79,10.16Z" />
      <path className="cls-1" d="M45.62,203.87c1.09,6.88-3.55,11.15-8.43,15.27a3.72,3.72,0,0,1-1.51.76c-9.86,2-22.85.71-26.95-13.1a13.74,13.74,0,0,1,0-8.39c2.63-8.12,8.54-13.26,15.8-17a7.32,7.32,0,0,1,5-.48c5,1.48,9.62,4,12.29,8.67A25.12,25.12,0,0,1,45.62,203.87Z" />
    </g>
  </g>
</svg>
);
  return (
    <div className="home-main-projects">
      <h2>Eikomp App - Dashboard</h2>
      <p>
        At Eikomp I've been responsible for building out full stack web
        applications Compliance Certification website which is a robust and
        scalable platform developed to streamline the compliance certification
        process for organizations across various industries. Designed to handle
        over 20,000 compliance requests annually, the platform supports multiple
        types of certifications like TEC, BIS, ISI, HIPAA, and more. The goal
        was to create a seamless user experience, improve operational
        efficiency, and ensure secure data management while catering to a
        diverse client base.
      </p>

      <ProfileCard projectLink="https://eikomp-frontend.vercel.app/" />

      <h3>About the Project</h3>

      <div className="project-disclaimer">
        {iconSvg}
        The following projects are private and internal, so unfortunately I'm
        unable to show live demos or code specifics. However, I'll do my best to
        provide a high level overview of the projects and my role in them!
      </div>

      <p>
        This project was created to provide a comprehensive and interactive
        overview of the COVID-19 pandemic. The dashboard was built using Django
        and Plotly.js, and featured a fully interactive map made using Mapbox.
        The project was open source and received over 200k visitors, but the
        most rewarding part was the collaboration with contributors across the
        world.
      </p>
      <div className="project-details-image" style={{ paddingBottom: "0rem" }}>
        <img src={EikompDesktop} alt="piclure" />
      </div>
      <span className="project-span">
        Desktop view of the dashboard's home page. The application is designed
        to be responsive to all platforms and devices.
      </span>

      <h3>Mobile first design</h3>
      <p>
        I designed the dashboard with a mobile-first approach, ensuring that the
        application was responsive to all platforms and viewports. Thankfully
        plotly and Mapbox are already mobile responsive to multi touch
        interactions so it was just a matter of ensuring the overall layout was
        adaptable.
      </p>

      <div className="project-details-image">
        <img src={Eikompmobile} alt="piclure" />
      </div>
      <span className="project-span">
        Mobile view of the dashboard's home page. The application is designed to
        be responsive to all platforms and devices.
      </span>
      <h3>Read more</h3>

      <p>Here is a blog post I wrote about the project.</p>

      <h4>Contact</h4>

      <p>
        Questions or need more details? Ping me on{" "}
        <a href="/linkedin">LinkedIn</a>, or any of my other social media links.
      </p>

      <div className="flex w-full max-w-sm items-center space-x-2"></div>
    </div>
  );
};
