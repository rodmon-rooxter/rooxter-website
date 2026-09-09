import { useParallax } from '../../hooks/useParallax'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  const parallaxRef = useParallax<HTMLHeadingElement>()

  return (
    <section className="section projects" aria-labelledby="projects-title">
      <div className="site-container">
        <h2 ref={parallaxRef} className="section-title projects-title" id="projects-title">More Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
