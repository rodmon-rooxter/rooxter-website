import type { TeamMemberData } from '../../data/team'

type TeamMemberProps = {
  member: TeamMemberData
}

export default function TeamMember({ member }: TeamMemberProps) {
  return (
    <article className="team-member">
      <h3>{member.name}</h3>
      <p>{member.role}</p>
      <a href={member.imdbUrl} target="_blank" rel="noreferrer">
        IMDb
      </a>
    </article>
  )
}
