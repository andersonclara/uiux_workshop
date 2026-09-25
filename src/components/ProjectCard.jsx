function ProjectCard(/* TODO: add props */) {

    /* BONUS TODO: add image upload function using useState */

  return (
    <div className="project-card">


      <div> 
        <span>Project Image</span> {/* BONUS TODO: add image upload interaction */}
      </div>

      <div className="project-card-content"> {/* TODO: Replace hardcoded content with props */}

        <h2>Project Title</h2>

        <p className="project-description">
          Project description
        </p>

        <div className="tech-heading">
          <span>Tech Stack</span>
          <div className="tech-line"></div>
        </div>

        <div className="tech-tags"> {/* TODO: replace hardcoded tags so you can generate tech tags dynamically */}
          <span className="tech-tag">React</span>
          <span className="tech-tag">Figma</span>
          <span className="tech-tag">HTML</span>
        </div>

        <a
          className="project-link"
          href="#"
        >
          View project →
        </a>

      </div>
      

    </div>
  );
}

export default ProjectCard;