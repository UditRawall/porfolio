import { useState } from "react";
import { projectList } from "../constant/projectList";
import "./ProjectList.css";
// import { NavLink } from "react-router-dom";

export type IProjectLink = {
  name: string;
  description: string;
  image: string;
  path: string;
};

const ProjectList = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  console.log(hoveredIndex);

  const handleHoveredEffect = (e: any) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.target.style.setProperty("--x", `${x}px`);
    e.target.style.setProperty("--y", `${y}px`);
  };
  return (
    <div className="project-section-main">
      <ul className="project-section-list">
        {projectList.map((item: IProjectLink, index) => (
          <li key={index}>
            {/* <NavLink to={item.path} className='Navlink'> */}
              <div
                className={`project-details ${
                  hoveredIndex === index ? "highlight" : "dim"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className="image-section"
                  onMouseMove={(e) => handleHoveredEffect(e)}
                >
                  <div className="hovered-dot"></div>
                  <img src={item.image} />
                </div>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>
            {/* </NavLink> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
