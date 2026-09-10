import { useParallax } from '../../hooks/useParallax'
import TeamMember from '../../components/TeamMember/TeamMember'
import { team } from '../../data/team'

export default function Team() {
  const parallaxRef = useParallax<HTMLHeadingElement>()
  const backgroundImage = `url("${import.meta.env.BASE_URL}images/team/team-bg-01.webp")`

  return (
    <section
      className="section team"
      id="team"
      aria-labelledby="team-title"
      style={{ backgroundImage }}
    >
      <div className="site-container">
        <h2 ref={parallaxRef} className="section-title projects-title" id="team-title">Who Are We</h2>
        <div className="team-grid">
          {team.map((member) => (
            <TeamMember key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}
