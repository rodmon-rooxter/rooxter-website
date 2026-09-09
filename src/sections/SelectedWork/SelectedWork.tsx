import ProjectCard from '../../components/ProjectCard/ProjectCard'
import { projects } from '../../data/projects'

export default function SelectedWork() {
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section className="selected-work" id="work" aria-label="Selected work">
      <div className="site-container">
        <div className="featured-list">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} featured />
          ))}
        </div>
      </div>
    </section>
  )
}
