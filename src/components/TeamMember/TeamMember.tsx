import type { TeamMemberData } from '../../data/team'

type TeamMemberProps = {
  member: TeamMemberData
  index: number
}

export default function TeamMember({ member, index }: TeamMemberProps) {
  return (
    <article className="team-member">
      <div className="team-portrait">
        {member.image ? (
          <img
            src={member.image}
            alt={member.imageAlt ?? `Portrait of ${member.name}`}
            width="900"
            height="1125"
            loading="lazy"
          />
        ) : (
          <div className="portrait-placeholder" aria-hidden="true">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{member.name.charAt(0)}</strong>
          </div>
        )}
      </div>
      <h3>{member.name}</h3>
      <p>{member.role}</p>
    </article>
  )
}
