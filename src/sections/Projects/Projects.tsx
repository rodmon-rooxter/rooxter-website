import ProjectCard from '../../components/ProjectCard/ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  const additionalProjects = projects.filter((project) => !project.featured)

  return (
    <section className="projects" aria-label="More selected work">
      <div className="site-container">
        <div className="featured-list">
          {additionalProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index + 3} featured />
          ))}
        </div>
      </div>
    </section>
  )
}
