export type ServiceGroup = {
  title: string
  services: string[]
}

export const serviceGroups: ServiceGroup[] = [
  {
    title: 'Pre-production',
    services: ['Concept Art', 'Visual Development', 'Storyboarding'],
  },
  {
    title: 'Production',
    services: ['Directing', 'Cinematography'],
  },
  {
    title: 'Post',
    services: ['Editing', 'Visual Effects', 'Color', 'Sound Design'],
  },
]
