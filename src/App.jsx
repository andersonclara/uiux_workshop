import "./App.css";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <main>
      <section className="projects">

        <h1>My Projects</h1> 

        <div className="projects-grid">

          {/* TODO: fill props in & reuse component to make multiple project cards */}

          {/* Project card component */}
          <ProjectCard 
            title=""
            description=""
            technologies={["", "", ""]}
            link="LINK HERE"
          />

        </div>

      </section>
    </main>
  );
}

export default App;