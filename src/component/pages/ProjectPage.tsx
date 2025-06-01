import { useEffect, useState } from "react";
import { projects, categories, IProject } from "../constant/projectList";
import "./ProjectPage.css";

interface MousePosition {
  x: number;
  y: number;
}

const ProjectPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [cursorImage, setCursorImage] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter(
          (project: IProject) => project.category === selectedCategory
        );

  const handleProjectClick = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const handleProjectHover = (
    project: IProject,
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    setHoveredProject(project.id);
    if (project.image) {
      setCursorImage(project.image);
      setMousePosition({ x: event.clientX, y: event.clientY });
    }
  };

  const handleProjectLeave = () => {
    setHoveredProject(null);
    setCursorImage(null);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (cursorImage) {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }
  };

  useEffect(() => {
    if (cursorImage) {
      document.addEventListener("mousemove", handleMouseMove);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [cursorImage]);

  return (
    <div className="project-page">
      <div className="project-container">
        {/* Header */}
        <div className="project-header">
          <h1 className="project-title">Projects</h1>
          <p className="project-subtitle">My personal and freelance projects.</p>
          <p className="project-description">
            List of impactful web apps across education, fintech, and AI,
            combining clean UI with real-world functionality using React,
            Next.js, Node js, Express js and modern web tech.
          </p>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`project-card ${
                hoveredProject === project.id ? "hovered" : ""
              }`}
              onMouseEnter={(e) => handleProjectHover(project, e)}
              onMouseLeave={handleProjectLeave}
              onClick={() => handleProjectClick(project.link)}
            >
              <div className="project-icon">
                <span className="icon-emoji">{project.icon}</span>
              </div>

              <div className="project-content">
                <div className="project-info">
                  <h3 className="project-name">{project.name}</h3>
                  {project.offerText && (
                    <span className="offer-badge">{project.offerText}</span>
                  )}
                </div>
                <p className="project-desc">{project.description}</p>
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  {project.isAffiliate && (
                    <span className="affiliate-badge">Affiliate</span>
                  )}
                </div>
              </div>

              <div className="project-action">
                <button className="get-btn">
                  <span>View</span>
                  <svg
                    className="arrow-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Hover Overlay */}
              <div className="hover-overlay"></div>
            </div>
          ))}
        </div>

        {/* Cursor Image */}
        {cursorImage && (
          <div
            className="cursor-image"
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
            }}
          >
            <img src={cursorImage} alt="Project preview" />
          </div>
        )}

        {/* Footer */}
        <div className="project-footer">
          <p>
            Found something useful? These affiliate links help support my
            content creation. Thanks for checking out my Portfolio!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
