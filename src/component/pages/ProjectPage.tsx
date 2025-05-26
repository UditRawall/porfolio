import  { useState } from 'react';
import { projects, categories } from '../constant/projectList';
import './ProjectPage.css';

const ProjectPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleProjectClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="project-page">
      <div className="project-container">
        {/* Header */}
        <div className="project-header">
          <h1 className="project-title">Projects</h1>
          <p className="project-subtitle">My toolbox.</p>
          <p className="project-description">
            List of tools I actually own and enjoy using. Using the affiliate links 
            help support my content creation. Last updated on October 2024.
          </p>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
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
              className={`project-card ${hoveredProject === project.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
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
                  <span>Get</span>
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

        {/* Footer */}
        <div className="project-footer">
          <p>
            Found something useful? These affiliate links help support my content creation. 
            Thanks for checking out my gear!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;