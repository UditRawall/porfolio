import { useState, useRef, useEffect } from "react";
import { projectList } from "../constant/projectList";
import "./ProjectList.css";
import { Link } from "react-router-dom";


export type IProjectLink = {
  name: string;
  description: string;
  image: string;
  path: string;
};

const ProjectList = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize refs array when project list changes
  useEffect(() => {
    dotRefs.current = dotRefs.current.slice(0, projectList.length);
  }, []);

  // Handle mouse hover effect

  const handleHoveredEffect = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const dotElement = dotRefs.current[index];
    if (dotElement) {
      dotElement.style.setProperty("--x", `${x}px`);
      dotElement.style.setProperty("--y", `${y}px`);
    }
  };
  
  return (
    <div className="project-section-main">
      <ul className="project-section-main-list">
        {projectList.map((item: IProjectLink, index) => (
          <li key={index} className="project-section-list">
            <Link to={item.path} className='Navlink'>
              <div
                className={`project-details ${
                  hoveredIndex === index ? "highlight" : "dim"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onMouseMove={(e) => handleHoveredEffect(e, index)}
              >
                <div className="image-section">
                  <div 
                    ref={el => dotRefs.current[index] = el}
                    className="hovered-dot"
                  ></div>
                  <img src={item.image} alt={item.name} />
                </div>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;