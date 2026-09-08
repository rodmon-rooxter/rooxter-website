import ProjectCard from '../../components/ProjectCard/ProjectCard'
import { projects } from '../../data/projects'

export default function SelectedWork() {
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section className="section selected-work" id="work" aria-labelledby="selected-work-title">
      <div className="site-container">
        <h2 className="section-title" id="selected-work-title">Selected Work</h2>
        <div className="featured-list">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} featured />
          ))}
        </div>
      </div>
    </section>
  )
}
