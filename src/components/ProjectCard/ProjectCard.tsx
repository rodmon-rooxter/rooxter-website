import type { Project } from '../../data/projects'

type ProjectCardProps = {
  project: Project
  index: number
  featured?: boolean
}

export default function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  const metadata = [project.category, project.year].filter(Boolean).join(' · ')

  return (
    <article className={`project-card${featured ? ' project-card--featured' : ''}`}>
      <div className="project-media">
        {project.image ? (
          <img
            src={project.image}
            alt={project.imageAlt ?? `Still from ${project.title}`}
            width="1600"
            height="900"
            loading="lazy"
          />
        ) : (
          <div className="media-placeholder" aria-hidden="true">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{project.title}</strong>
          </div>
        )}
      </div>
      <div className="project-details">
        <h3>{project.title}</h3>
        <p>{metadata}</p>
      </div>
    </article>
  )
}
