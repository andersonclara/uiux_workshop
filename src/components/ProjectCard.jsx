import { useState } from "react";

function ProjectCard({ title, description, technologies, link }) {
      const [image, setImage] = useState(null);

  function handleImageUpload(event) {
    const file = event.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  }

  return (
    <div className="project-card">

      <div className="project-image">
        {image ? (
          <img src={image} alt="Project preview" />
        ) : (
          <label className="upload-area">
            <span>Upload project image</span>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              hidden
            />
          </label>
        )}
      </div>

      <div className="project-card-content">

        <h2>{title}</h2>

        <p className="project-description">
          {description}
        </p>

        <div className="tech-heading">
          <span>Tech Stack</span>
          <div className="tech-line"></div>
        </div>

        <div className="tech-tags">
          {technologies.map((technology) => (
            <span className="tech-tag" key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <a
          className="project-link"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          View project →
        </a>

      </div>
      

    </div>
  );
}

export default ProjectCard;