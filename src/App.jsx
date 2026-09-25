import "./App.css";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <main>
      <section className="projects">

        <h1>My Projects</h1>

        <div className="projects-grid">

          <ProjectCard
            title="ACM Website Redesign"
            description="Designed a responsive redesign of the UF ACM website. The focus was on a consistent UI and improving the UX."
            technologies={["PostgreSQL", "React", "Figma", "HTML"]}
            link="https://uf-acm.com/"
          />

          <ProjectCard
            title="Headstart"
            description="An assignment planner that helps students organize assignments into manageable checkpoints."
            technologies={["Next.js", "React", "Supabase", "CSS"]}
            link="#"
          />

          <ProjectCard
            title="LockedIN"
            description="A social fitness platform for logging workouts, tracking progress, and staying connected with friends."
            technologies={["React", "Node.js", "PostgreSQL"]}
            link="#"
          />

          <ProjectCard
            title="ChompCount"
            description="A simple web application designed to make tracking and viewing information quick and intuitive."
            technologies={["React", "JavaScript", "CSS"]}
            link="#"
          />

          <ProjectCard
            title="Interlinked"
            description="An interactive app focused on creating professional connections through a video chat interface."
            technologies={["React", "JavaScript", "HTML", "CSS"]}
            link="#"
          />

          <ProjectCard
            title="CampusCompass"
            description="A C++ project that uses data structures and algorithms to organize and navigate campus information."
            technologies={["C++", "Algorithms", "Data Structures"]}
            link="#"
          />

        </div>

      </section>
    </main>
  );
}

export default App;