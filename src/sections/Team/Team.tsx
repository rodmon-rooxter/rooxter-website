import { useParallax } from '../../hooks/useParallax'
import TeamMember from '../../components/TeamMember/TeamMember'
import { team } from '../../data/team'

export default function Team() {
  const parallaxRef = useParallax<HTMLHeadingElement>()

  return (
    <section className="section team" id="team" aria-labelledby="team-title">
      <div className="site-container">
        <h2 ref={parallaxRef} className="section-title projects-title" id="team-title">Who Are We</h2>
        <div className="team-grid">
          {team.map((member, index) => (
            <TeamMember key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
