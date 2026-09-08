import TeamMember from '../../components/TeamMember/TeamMember'
import { team } from '../../data/team'

export default function Team() {
  return (
    <section className="section team" id="team" aria-labelledby="team-title">
      <div className="site-container">
        <h2 className="section-title" id="team-title">Team</h2>
        <div className="team-grid">
          {team.map((member, index) => (
            <TeamMember key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
