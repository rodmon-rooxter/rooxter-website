import ProjectCard from '../../components/ProjectCard/ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section className="section projects" aria-labelledby="projects-title">
      <div className="site-container">
        <h2 className="section-title" id="projects-title">Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
